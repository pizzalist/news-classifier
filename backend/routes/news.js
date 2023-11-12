const express = require('express');
const router = express.Router();
const { getNewsByCategoryId, getNewsByDateAndCategory } = require('../models/newsModel');

// 특정 카테고리 ID에 해당하는 뉴스 가져오는 라우트
router.get('/category/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const news = await getNewsByCategoryId(categoryId);
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 특정 기간 및 카테고리에 해당하는 뉴스를 가져오는 라우트
router.get('/date-category', async (req, res) => {
    try {
      const { startDate, endDate, categoryId } = req.query;
      const news = await getNewsByDateAndCategory(startDate, endDate, categoryId);
      res.json(news);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

module.exports = router;
