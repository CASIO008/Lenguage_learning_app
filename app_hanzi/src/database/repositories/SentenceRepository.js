import db from '../database';

class SentenceRepository {
  getAll() {
    return db.getAllSync('SELECT * FROM sentences ORDER BY created_at DESC');
  }

  getByWordId(wordId) {
    return db.getAllSync('SELECT * FROM sentences WHERE word_id = ?', [wordId]);
  }

  create(sentence) {
    const result = db.runSync(
      'INSERT INTO sentences (chinese, pinyin, translation, word_id) VALUES (?, ?, ?, ?)',
      [sentence.chinese, sentence.pinyin, sentence.translation, sentence.word_id]
    );
    return result.lastInsertRowId;
  }

  delete(id) {
    db.runSync('DELETE FROM sentences WHERE id = ?', [id]);
  }
}

export default new SentenceRepository();
