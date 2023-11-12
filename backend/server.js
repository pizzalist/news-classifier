require('dotenv').config();

const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/category');
const clippedNewsRoutes = require('./routes/clippedNewsRoutes'); // 새로운 라우트 추가
const newsRouter = require('./routes/news');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/category', newsRoutes);
app.use('/api/clipped-news', clippedNewsRoutes); // 새로운 라우트 사용
app.use('/api/news', newsRouter); 


app.listen(3000, () => {
    console.log("http://localhost:3000");
  });