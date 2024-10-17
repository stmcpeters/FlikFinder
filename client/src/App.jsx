import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx'
import UserAuth from './components/UserAuth.jsx'
import SelectGenres from './components/SelectGenres.jsx'
import MovieRec from './components/MovieRec.jsx'
import MovieReview from './components/MovieReview.jsx'

function App() {
  const [count, setCount] = useState(0)
  // initialize and update users state
  const [users, setUsers] = useState([]);
  // initialize and update genres state
  const [genres, setGenres] = useState([]);
  // initialize and update reviews state
  const [reviews, setReviews] = useState([]);

  // fetching users from database
  const loadUsers = async () => {
    try {
      const response = await fetch("http://localhost:5001/db/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  }

  // fetches users from database on page render
  useEffect(() => {
    loadUsers();
  }, []);


  // fetches genres from database
  const loadGenres = async () => {
    try {
      const response = fetch("http://localhost:5001/db/genres");
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
      const response = fetch("http://localhost:5001/db/reviews");
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



  return (
    <>
      <NavBar />
      <UserAuth />
      <SelectGenres genres={genres} />
      <MovieRec />
      <MovieReview reviews={reviews} />
    </>
  )
}

export default App
