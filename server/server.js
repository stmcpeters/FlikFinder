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

// fetching all genres from genres table
app.get('/db/genres', async (req, res) => {
  try {
    const { rows: genres } = await db.query('SELECT * FROM genres');
    res.send(genres);
  } catch (error){
    console.error('Error fetching from genres table: ', error);
  }
})

// fetches all users from user table
app.get('/db/users', async (req, res) => {
  try {
    const { rows : users } = await db.query('SELECT * FROM users');
    res.send(users);
  } catch (error) {
    console.error('Error fetching users from users table: ', error);
  }
})

// fetches all reviews from reviews table
app.get('/db/reviews', async (req, res) => {
  try {
    const { rows: reviews } = await db.query('SELECT * FROM reviews');
    res.send(reviews);
  } catch (error) {
    console.error('Error fetching reviews from the reviews table: ', error);
  }
})

// server is listening on PORT
app.listen(PORT, () => {
  console.log(`hi :D your server is on http://localhost:${PORT}`);
});