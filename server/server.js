const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// initial endpoint
app.get('/', (req, res) => {
  res.json('hi from your server :D');
});

// testing database connection - fetching genres table
app.get('/db/genres', async (req, res) => {
  try {
    const { rows: genres } = await db.query('SELECT * FROM genres');
    res.send(genres);
  } catch (error){
    console.error('Error fetching from genres table: ', error);
  }
})

// server is listening on PORT
app.listen(PORT, () => {
  console.log(`hi :D your server is on http://localhost:${PORT}`);
});