const express = require('express');
const cors = require('cors');

const treeRoutes = require('./routes/treeRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/trees', treeRoutes);

module.exports = app;