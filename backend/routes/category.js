const express = require('express');
const router = express.Router();
const { getAllNewsCategories } = require('../models/newsModel');

// 여기서 '/api/news' 경로에 대한 요청을 처리할 라우트를 정의합니다.
router.get('/', async (req, res) => {
  try {
    const categories = await getAllNewsCategories();
    console.log('Categories:', categories); // 추가된 부분
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
