// routes/index.js
const express = require('express');
const router = express.Router();
const path = require('path');
const argumentsData = require('../data/arguments.json');

// Home route
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

// Argument route
router.get('/argument', (req, res) => {
  res.render('argument', { data: argumentsData });
});

module.exports = router;

