const express = require('express');
const router = express.Router();
const { getAllClippedNews } = require('../models/newsModel');

router.get('/', async (req, res) => {
  try {
    const clippedNews = await getAllClippedNews();
    res.json(clippedNews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
