//  fetchRecommendation() => retrieves array of movie recommendation based on user’s selected genre
//  selectRandomMovie(movies) => takes the array of movies recommended and uses math.random to select and return a random single movie
//  displayMovie(movie) => renders the recommended movie’s data to the screen
import React from 'react'

export default function MovieRec({ movies }) {

  // const selectRandomMovie = (movies) => {
  //   const randomIndex = Math.floor(Math.random() * movies.length);
  //   return movies[randomIndex];
  // }

  // const randomMovie = selectRandomMovie(movies);

  console.log('Movies: ', movies);

  return (
    <>
      <h2>Movie Rec</h2>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.shows[0].title}</li>
        })}
      </ul>
    </>
  )
}
