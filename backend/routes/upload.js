// backend/routes/upload.js

const express = require('express');
const { saveClippedNews } = require('../models/newsModel');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    await saveClippedNews(data);
    res.status(200).send('Data uploaded successfully');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
