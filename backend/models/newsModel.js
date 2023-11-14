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
          *
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

const getAllClippedNews = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      // 여기서 SQL 쿼리를 작성합니다.
      const sql = `
        SELECT
          *
        FROM
          clipped_news
      `;

      connection.query(sql, (err, results) => {
        connection.release();
        if (err) reject(err);
        resolve(results);
      });
    });
  });
};

module.exports = { getAllNewsCategories, getAllClippedNews };
