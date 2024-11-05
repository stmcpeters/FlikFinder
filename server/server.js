import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { join } from 'path';
import db from './db/db-connection.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// initial endpoint
// app.get('/', (req, res) => {
//   res.json('hi from your server :D');
// });

//PROD: construct path to build folder in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//PROD: serve static build files from react
app.use(express.static(join(__dirname, '../client/dist')));

////////////////////// genres //////////////////////////

// fetching all genres from genres table
app.get('/db/genres', async (req, res) => {
  try {
    const { rows: genres } = await db.query('SELECT * FROM genres');
    res.send(genres);
  } catch (error){
    console.error('Error fetching from genres table: ', error);
  }
})

///////////////////// users ////////////////////////////
// fetches all users from user table
app.get('/db/users', async (req, res) => {
  try {
    const { rows : users } = await db.query('SELECT * FROM users');
    res.send(users);
  } catch (error) {
    console.error('Error fetching users from users table: ', error);
  }
})

// create new user 
app.post('/db/users', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await db.query(`INSERT INTO users (username, password) VALUES ($1, $2)`, [username, password]);
    const newUser = result.rows[0]
    res.json(newUser);
  } catch (error) {
    console.error('Error creating new user: ', error);
  }
})

// delete user by ID
app.delete('/db/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // delete the reviews associated with that user ID
    await db.query(`DELETE FROM reviews WHERE user_id = $1`, [id]);
    // delete user from user table
    const result = await db.query(`DELETE FROM users WHERE id = $1`, [id]);
    // confirmation message in the console
    res.send(`User with the id ${id} and their reviews have been deleted from the database`);
  } catch (error) {
    console.error(`Error deleting user with the id ${id}: `, error);
  }
})

//////////////////// reviews //////////////////////////
// fetches all reviews from reviews table
app.get('/db/reviews', async (req, res) => {
  try {
    const { rows: reviews } = await db.query('SELECT * FROM reviews');
    res.send(reviews);
  } catch (error) {
    console.error('Error fetching reviews from the reviews table: ', error);
  }
})

// fetches reviews by movie ID
app.get('/db/reviews/:movieid', async (req, res) => {
  try{
    // initalizes movie ID you're searching for
    const { movieid } = req.params;
    // query to fetch reviews from database using movie ID
    const { rows: reviews } = await db.query(`SELECT * FROM reviews WHERE movie_id = $1`, [movieid]);
    res.send(reviews);
  } catch (error) {
      console.error(`Cannot find reviews matching the movie ID: ${movie_id}: `, error);
  }
})

// fetches 3 most recent reviews 
app.get('/db/recents', async (req, res) => {
  try {
    const query = 'SELECT * FROM reviews ORDER BY created_at DESC LIMIT 3'

    const { rows: recents } = await db.query(query);

    res.send(recents);
  } catch (error) {
    console.error('Error fetching latest reviews ', error);
  }
})

// create new review 
app.post('/db/reviews', async (req, res) => {
  try {
    const { user_id, movie_id, review_body } = req.body;
    const result = await db.query(`INSERT INTO reviews (user_id, movie_id, review_body) VALUES ($1, $2, $3)`, [user_id, movie_id, review_body]);
    res.send(`New review by user: ${user_id} has been added to the database`);
  } catch (error) {
    console.error('Error creating new review: ', error);
  }
})

// update/edit review by review ID
app.patch('/db/reviews/:id', async (req, res) => {
  try {
    // initalizes review id you're searching for
    const { id } = req.params;
    // gets properties to be updated
    const { review_body } = req.body;
    // query to update review by specified user ID
    const result = await db.query(`UPDATE reviews SET review_body=$1 WHERE id = $2`, [review_body, id]);
    // message to confirm review has been updated
    res.send(`Review ${id} has been updated`);
  } catch (error) {
      console.error(`Cannot find review matching that ID `, error);
  }
})

// work in progress - returning []
// fetches review by review ID 
// app.get('/db/reviews/:review_id', async (req, res) => {
//     const { review_id } = req.params;
//   try {
//     const result = await db.query(`SELECT * FROM reviews WHERE id = $1`, [review_id]);
//     res.send(result);
//   } catch (error) {
//     console.error('Error fetching review with ID: ${review_id} ', error);
//   }
// })

// delete review by ID
app.delete('/db/reviews/:id', async (req, res) => {
  try {
    // initalizes id you're searching for
    const { id } = req.params;
    // query to delete review from database using ID
    const result = await db.query(`DELETE FROM reviews WHERE id = $1`, [id]);
    // message to confirm review has been deleted
    res.send(`Review with the id ${id} has been deleted from the database`);
  } catch (error) {
      console.error(`Cannot find review matching id: ${id}: `, error);
  }
})

////////////////// user-genres ////////////////////////
// fetches user-genres joined table
app.get('/db/joined', async (req, res) => {
  try {
    const { rows: userGenres } = await db.query('SELECT * FROM user_genres');
    res.send(userGenres);
  } catch (error) {
    console.error('Error fetching from user-genre table: ', error);
  }
})

// fetches genres for specific user id
app.get('/db/joined/:userid', async (req, res) => {
  try {
    const { userid } = req.params;
    const result = await db.query(`SELECT * FROM user_genres WHERE user_id = $1`, [userid]);
    res.json(result.rows);
  } catch (error) {
    console.error(`Error fetching genres for the user id ${user_id}: `, error);
  }
})

// work in progress
// edit genres for a specific user id 
// app.patch('/db/joined/:userid', async (req, res) => {
//   try {
//     // initalizes user id you're searching for
//     const { user_id } = req.params;
//     // gets properties to be updated
//     const { old_genre_id, new_genre_id } = req.body;
//     // checks if theres a genre already assigned to the user
//     const existingGenre = await db.query(`SELECT * FROM user_genres where user_id = $1 AND genre_id = $2`, [user_id, old_genre_id])

//     // query to update genres by specified user ID
//     const result = await db.query(`UPDATE user_genres SET genre_id=$1 WHERE user_id = $2 AND genre_id = $3`, [new_genre_id, user_id, old]);
//     // message to confirm review has been updated
//     res.send(`Genres for user ${user_id} have been updated to: ${genre_id}`);
//   } catch (error) {
//       console.error(`Cannot find genres for user: ${user_id} `, error);
//   }
// })

/////////////////// movies API //////////////////////
// fetches popular/recent movies
  app.get('/movies', async (req, res) => {
    try {
      const response = await fetch("https://streaming-availability.p.rapidapi.com/shows/search/filters?country=us&series_granularity=show&order_direction=desc&order_by=original_title&show_original_language=en&output_language=en",{
        headers: {
          'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY
        }
    });
      const data = await response.json();
      res.send(data);
    } catch (error) {
      console.error('Error fetching movies from API: ', error);
    }
  })

///////////////// AI summary //////////////////////
// summarizes text
  app.post('/summarize', async (req,res) => {
    try {
      const { text } = req.body;
      const num_sentences = 3;
      const response = await fetch("https://gpt-summarization.p.rapidapi.com", {
        method: 'POST',
        headers: {
          'X-Rapidapi-Host': 'gpt-summarization.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.toStringify({ text, num_sentences})
      });
        const data = await response.json()
        res.send(data);
      } catch (error) {
        console.error('Error fetching text summary')
      }
    })

//PROD: ensure all routes are served the index.html file to allow react to manage the routing
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, '../client/dist', 'index.html'))
})

// server is listening on PORT
app.listen(PORT, () => {
  console.log(`hi :D your server is on http://localhost:${PORT}`);
});