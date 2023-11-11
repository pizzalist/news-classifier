const pool = require('../db');

const getAllNewsCategories = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      const sql = `
        SELECT
          category_id,
          category_name
        FROM
          news_categories
      `;
      
      connection.query(sql, (err, results) => {
        connection.release(); // 연결 해제
        if (err) reject(err);
        resolve(results);
      });
    });
  });
};

module.exports = { getAllNewsCategories };
