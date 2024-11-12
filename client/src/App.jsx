import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import NoPage from './pages/NoPage.jsx';
import About from './pages/About.jsx'
import MovieReview from './components/MovieReview.jsx';

function App() {
  // initializes and updates logged in state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // initialize and update users state
  const [user, setUser] = useState([]);
  // initialize and update genres state
  const [genres, setGenres] = useState([]);
  // initialize and update reviews state
  const [reviews, setReviews] = useState([]);
  // initialize and update the array of most recent movies
  const [recentReviews, setRecentReviews] = useState([]);
  // initializes state for movies fetched from API
  const [movies, setMovies] = useState([]);
  // initializes user's selected genre
  const [selectedGenre, setSelectedGenre] = useState('');


  // functions for user login/log out
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  // fetching users from database
  const loadUsers = async () => {
    try {
      const response = await fetch("http://localhost:5001/db/users");
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  }

  // fetches users from database on page render
  useEffect(() => {
    loadUsers();
    // changes dependency so function is only ran once on mount
  }, []);

  // fetches genres from database
  const loadGenres = async () => {
    try {
      const response = await fetch("http://localhost:5001/db/genres");

      //  error handling
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGenres(data);
    } catch (error) {
      console.error('Error fetching genres: ', error);
    }
  }

  // fetches genres from database on page render
  useEffect(() => {
    loadGenres();
  }, []);

  // // fetches reviews from database
  // const loadReviews = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5001/db/reviews");
  //     // console.log(response);
  //     const data = await response.json();
  //     setReviews(data);
  //   } catch (error) {
  //     console.error('Error fetching reviews: ', error);
  //   }
  // }

  //   // fetches reviews from database on page render
  //   useEffect(() => {
  //     loadReviews();
  //   }, []);

    // fetches 3 most recent reviews
    const fetchRecent = async () => {
      try {
        const response = await fetch("http://localhost:5001/db/reviews/recent");
        const data = await response.json();
        setRecentReviews(data);
      } catch(error) {
        console.error('Error fetching most recent reviews: ', error);
      }
    }
  
      // fetches reviews from database on page render
      useEffect(() => {
        fetchRecent();
      }, []);
  

  // // fetches recent/popular movies from API
  // const loadMovies = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5001/movies");
  //     // console.log(response);
  //     const data = await response.json();
  //     setMovies(data.shows);
  //   } catch (error) {
  //     console.error('Error fetching movies: ', error);
  //   }
  // }

  //   // fetches movies from API on page render
  //   useEffect(() => {
  //     loadMovies();
  //   }, []);

// console.log(reviews);
// console.log(movies);
// console.log(users);


const getSelectedGenre = (selectedOption) => {
  if (selectedOption) {
    const selectedGenre = selectedOption.value;
    console.log('Selected Genre: ', selectedGenre);
    setSelectedGenre(selectedGenre);
  }
};


//  fetchRecommendation() => makes the call to the movies API using the users selected genres and returns an array of movies with that genre
const fetchRecommendation = async (genre) => {
  const baseAPIURL = 'https://streaming-availability.p.rapidapi.com';
  const requestParams = '/shows/search/filters?country=us&series_granularity=show&order_direction=desc&order_by=original_title&show_original_language=en&genres_relation=or&output_language=en&show_type=movie&genres=';
  // const genre = selectedGenre;
  const URLToFetch = `${baseAPIURL}${requestParams}${genre}`;

  try {
    const response = await fetch (URLToFetch, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      }
    });
    console.log('fetching from URL: ', URLToFetch);
    const data = await response.json();
    //console.log('fetched data: ', data)
    // making sure to get the shows (movies) array within the response
      setMovies(data.shows);
  } catch(error) {
    console.error('Unable to fetch movies: ', error);
  }
} 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home movies={movies} reviews={reviews} getSelectedGenre={getSelectedGenre} selectedGenre={selectedGenre} fetchRecommendation={fetchRecommendation} />} />
          <Route path="/home" element={<Home movies={movies} reviews={reviews} getSelectedGenre={getSelectedGenre} selectedGenre={selectedGenre} fetchRecommendation={fetchRecommendation} />} />
          <Route path="/reviews" element={<MovieReview reviews={reviews} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />

          {/* path to user auth from user profile in navbar */}
          <Route path='/user' element={<Auth user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />

          {/* conditionally shows home page after user signs in */}
          {/* {isLoggedIn && (
            <Route path="/home" element={<Home movies={movies} />} />
          )} */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
