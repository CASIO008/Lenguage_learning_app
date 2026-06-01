import db from '../database';

export class WordRepository {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM words ORDER BY frequency DESC',
          [],
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  static getByCategory(categoryId) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM words WHERE category_id = ?',
          [categoryId],
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  static insert(word) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO words (simplified, traditional, pinyin, meaning_pt, part_of_speech, category_id, hsk_level) 
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [word.simplified, word.traditional, word.pinyin, word.meaning_pt, 
           word.part_of_speech, word.category_id, word.hsk_level],
          (_, { insertId }) => resolve(insertId),
          (_, error) => reject(error)
        );
      });
    });
  }

  static getWordsForReview(limit = 20) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT w.*, up.status, up.next_review 
           FROM words w 
           LEFT JOIN user_progress up ON w.id = up.word_id 
           WHERE up.next_review <= datetime('now') OR up.id IS NULL
           ORDER BY up.next_review ASC 
           LIMIT ?`,
          [limit],
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }
}