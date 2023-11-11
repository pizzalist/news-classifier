const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/category');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/category', newsRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
