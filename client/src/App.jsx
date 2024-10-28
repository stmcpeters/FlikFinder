import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'

function App() {
  // initializes and updates logged in state
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // initialize and update users state
  const [user, setUser] = useState([]);
  // initialize and update genres state
  const [genres, setGenres] = useState([]);
  // initialize and update reviews state
  const [reviews, setReviews] = useState([]);
  // initialize and update movies state
  const [movies, setMovies] = useState([]);


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
  }, [user]);

  // sets new user on save
  const onSaveUser = (newUser) => {
    setUser((user) => [...user, newUser]);
  }


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

  // fetches reviews from database
  const loadReviews = async () => {
    try {
      const response = await fetch("http://localhost:5001/db/reviews");
      // console.log(response);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews: ', error);
    }
  }

    // fetches reviews from database on page render
    useEffect(() => {
      loadReviews();
    }, []);

  // fetches recent/popular movies from API
  const loadMovies = async () => {
    try {
      const response = await fetch("http://localhost:5001/movies");
      // console.log(response);
      const data = await response.json();
      setMovies(data.shows);
    } catch (error) {
      console.error('Error fetching movies: ', error);
    }
  }

    // fetches movies from API on page render
    useEffect(() => {
      loadMovies();
    }, []);

// console.log(reviews);
// console.log(movies);
// console.log(users);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Auth user={user} onLogin={handleLogin} onSaveUser={onSaveUser} />} />
          <Route path="/" element={<Auth user={user} onLogin={handleLogin} onSaveUser={onSaveUser} />} />
          {/* conditionally shows home page after user signs in */}
          {isLoggedIn && (
            <Route path="/home" element={<Home movies={movies} reviews={reviews} />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
