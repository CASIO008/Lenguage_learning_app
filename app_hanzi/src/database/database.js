import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('chinese_learning.db');

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // Criar tabelas
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS categories (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT,
          level TEXT,
          icon TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`,
        [],
        () => console.log('Categories table created'),
        (_, error) => reject(error)
      );

      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS words (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          simplified TEXT NOT NULL,
          traditional TEXT,
          pinyin TEXT NOT NULL,
          meaning_pt TEXT NOT NULL,
          part_of_speech TEXT,
          category_id INTEGER,
          hsk_level TEXT,
          frequency INTEGER DEFAULT 0,
          audio_url TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (category_id) REFERENCES categories(id)
        );`,
        [],
        () => console.log('Words table created'),
        (_, error) => reject(error)
      );

      // ... criar outras tabelas
      
      resolve();
    });
  });
};

export default db;