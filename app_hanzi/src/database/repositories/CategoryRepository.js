import db from '../database';

class CategoryRepository {
  getAll() {
    return db.getAllSync('SELECT * FROM categories');
  }

  getById(id) {
    return db.getFirstSync('SELECT * FROM categories WHERE id = ?', [id]);
  }

  create(category) {
    const result = db.runSync(
      'INSERT INTO categories (name, description) VALUES (?, ?)',
      [category.name, category.description]
    );
    return result.lastInsertRowId;
  }

  delete(id) {
    db.runSync('DELETE FROM categories WHERE id = ?', [id]);
  }
}

export default new CategoryRepository();
