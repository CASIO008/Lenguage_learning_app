import db from '../database';

class UserProgressRepository {
  getByWordId(wordId) {
    return db.getFirstSync('SELECT * FROM user_progress WHERE word_id = ?', [wordId]);
  }

  getDueReviews() {
    return db.getAllSync(
      'SELECT up.*, w.hanzi, w.pinyin, w.translation FROM user_progress up JOIN words w ON up.word_id = w.id WHERE up.next_review <= datetime("now")'
    );
  }

  upsert(progress) {
    const existing = this.getByWordId(progress.word_id);
    if (existing) {
      db.runSync(
        'UPDATE user_progress SET ease_factor = ?, interval = ?, repetitions = ?, next_review = ?, last_review = ? WHERE word_id = ?',
        [progress.ease_factor, progress.interval, progress.repetitions, progress.next_review, progress.last_review, progress.word_id]
      );
    } else {
      db.runSync(
        'INSERT INTO user_progress (word_id, ease_factor, interval, repetitions, next_review) VALUES (?, ?, ?, ?, ?)',
        [progress.word_id, progress.ease_factor, progress.interval, progress.repetitions, progress.next_review]
      );
    }
  }
}

export default new UserProgressRepository();
