import React from 'react'
import NavBar from '../components/NavBar'
import SelectGenres from '../components/SelectGenres'
import MovieRec from '../components/MovieRec'
import MovieReview from '../components/MovieReview'
import ReviewForm from '../components/ReviewForm'

export default function Home({ movies, reviews }) {
  return (
    <>
      <NavBar />
      <SelectGenres />
      <MovieRec movies={movies}/>
      <ReviewForm reviews={reviews} />
      <MovieReview reviews={reviews}/>
    </>
  )
}
