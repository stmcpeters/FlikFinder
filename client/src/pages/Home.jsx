import React from 'react'
import NavBar from '../components/NavBar'
import SelectGenres from '../components/SelectGenres'
import MovieRec from '../components/MovieRec'
import MovieReview from '../components/MovieReview'

export default function Home({ movies, reviews, getSelectedGenre }) {
  return (
    <>
      <NavBar />
      <SelectGenres getSelectedGenre={getSelectedGenre} />
      <MovieRec movies={movies}/>
      <MovieReview reviews={reviews}/>
    </>
  )
}
