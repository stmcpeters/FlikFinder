import React from 'react'
import NavBar from '../components/NavBar'
import SelectGenres from '../components/SelectGenres'
import MovieDetails from '../components/MovieDetails'
import MovieReview from '../components/MovieReview'

export default function Home({ movies, reviews }) {
  return (
    <>
      <NavBar />
      <SelectGenres />
      <MovieDetails movies={movies}/>
      <MovieReview reviews={reviews}/>
    </>
  )
}
