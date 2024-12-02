// app.js
const express = require('express');
const path = require('path');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

