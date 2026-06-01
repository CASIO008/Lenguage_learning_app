import db from './database';

export const seedData = () => {
  const count = db.getFirstSync('SELECT COUNT(*) as count FROM words');

  if (count.count === 0) {
    db.runSync('INSERT INTO words (hanzi, pinyin, translation) VALUES (?, ?, ?)', ['你好', 'nǐ hǎo', 'Olá']);
    db.runSync('INSERT INTO words (hanzi, pinyin, translation) VALUES (?, ?, ?)', ['谢谢', 'xiè xiè', 'Obrigado']);
    db.runSync('INSERT INTO words (hanzi, pinyin, translation) VALUES (?, ?, ?)', ['再见', 'zài jiàn', 'Tchau']);
    db.runSync('INSERT INTO words (hanzi, pinyin, translation) VALUES (?, ?, ?)', ['对不起', 'duì bu qǐ', 'Desculpe']);
    db.runSync('INSERT INTO words (hanzi, pinyin, translation) VALUES (?, ?, ?)', ['请', 'qǐng', 'Por favor']);

    db.runSync('INSERT INTO categories (name, description) VALUES (?, ?)', ['Saudações', 'Saudações básicas']);
    db.runSync('INSERT INTO categories (name, description) VALUES (?, ?)', ['Cortesia', 'Palavras de cortesia']);
  }
};
