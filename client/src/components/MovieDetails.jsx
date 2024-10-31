import React from 'react';
import { useParams } from 'react-router-dom';

import React from 'react'

export default function MovieDetails({ movies }) {
  const params = useParams();
  const movie_id = params.id;

  const selectedMovie = movies.find(movie => movie.id === parseInt(movie_id));

  if(!selectedMovie) {
    <p>Loading...</p>
  }

  return (
    <div className="<movie-details">
      <h1>{selectedMovie.title} ({selectedMovie.releaseYear})</h1>
      <img 
        src={selectedMovie.imageSet.verticalPoster.w420} 
        alt={selectedMovie.title} />
      <h3>Summary:</h3>
          <p>{selectedMovie.overview}</p>
          <p>Genres: {selectedMovie.genres[0].name}</p>
          <p>Runtime: {selectedMovie.runtime}min</p>
          <h4>Streaming Options</h4>
          <ul>
              {selectedMovie.streamingOptions.us.map((option, index) => (
                <li key={index}>
                  Type: {option.type} <br />
                  Service: {option.service.name} <br />
                  {/* Price: {option.price.formatted} <br />  */}
                  Link: <a href={option.link} target="_blank">Watch Here</a>
                </li>
              ))}
          </ul>
    </div>
  )
}
