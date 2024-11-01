import React, { useState, useEffect } from 'react';

export default function MovieRec({ movies, selectedGenre, fetchRecommendation }) {

  // initializes state for random movie to display
  const [randomMovie, setRandomMovie] = useState(null);

  //  selectRandomMovie(movies) => takes the array of movies recommended and uses math.random to select and return a random single movie
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

    // console.log(randomMovie);

  // sets movies to fetched data from movies API
  const handleFetchMovies = async () => {
    const fetchedMovies = await fetchRecommendation(selectedGenre.value);
    setMovies(fetchedMovies);
  }

  // // if movies array has not loaded, loading message will be shown
  // if(!movies.length) {
  //   return <p>Loading...</p>
  // }

  // will display this message if a user has not selected a genre yet
  if (!selectedGenre) {
    return <p>Please select a genre to see recommendations.</p>;
  }

  return (
    <div className="movie-rec">
      {/* conditionally shows movie details only if randomMovie has been set (is truthy) */}
      {randomMovie && (
        <>
          <h2>Movie Recommendation</h2>
          <h3>{randomMovie.title} ({randomMovie.releaseYear})</h3>
          <img src={randomMovie.imageSet.horizontalPoster.w480} alt={randomMovie.title} /> <br/>
          <h4>Summary:</h4>
          <p>{randomMovie.overview}</p>
          <p>Genres: {randomMovie.genres[0].name}</p>
          <p>Runtime: {randomMovie.runtime}min</p>
          <h4>Streaming Options</h4>
          <ul className='streaming-options'>
              {randomMovie.streamingOptions.us.map((option, index) => (
                <li key={index}>
                  {option.type} on {option.service.name}: <br />
                  <a href={option.link} target="_blank"> Watch Here</a>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  )
}
