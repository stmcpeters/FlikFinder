import React from 'react'
import { useState, useEffect } from 'react';

export default function MovieRec({ movies }) {

  //  fetchRecommendation() => retrieves array of movie recommendation based on user’s selected genre
//  selectRandomMovie(movies) => takes the array of movies recommended and uses math.random to select and return a random single movie
//  displayMovie(movie) => renders the recommended movie’s data to the screen

  const [randomMovie, setRandomMovie] = useState(null);

  const selectRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  }

  // useEffect is activated every time the movies array changes, checking that movies have loaded. once the movies array is loaded, selectRandomMovie() is called and updates and sets the state of randomMovie to 1 random movie chosen out of the movies array
  useEffect(() => {
    if(movies.length > 0) {
      setRandomMovie(selectRandomMovie(movies));
      }
    }, [movies]);


    // if movies array has not loaded, loading message will be shown
    if(!movies.length) {
      return <p>Loading...</p>
    }

  //console.log('Movies: ', movies);

  return (
    <div className="movie-rec">
      <h2>Movie Reccomendation</h2>
      {/* conditionally shows movie details only if randomMovie has been set (is truthy) */}
      {randomMovie && (
        <>
          <h3>{randomMovie.title} ({randomMovie.releaseYear})</h3>
          <img src={randomMovie.imageSet.verticalPoster.w240} alt="Vertical movie poster for {randomMovie.title}" /> <br/>
          <p>
            Summary: {randomMovie.overview} <br />
            Genres: {randomMovie.genres[0].name} <br />
            Runtime: {randomMovie.runtime}min <br />
          </p>
          {/* <h4>Streaming Options</h4>
          <ul>
              {randomMovie.streamingOptions.us.map((option, index) => (
                <li key={index}>
                  Type: {option.type} <br />
                  Price: {option.price.formatted} <br /> 
                  Link: <a href={option.link} target="_blank">Watch Here</a>
                </li>
              ))}
          </ul> */}
        </>
      )}
    </div>
  )
}
