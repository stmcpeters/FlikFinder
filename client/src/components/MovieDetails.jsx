import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails({ movies }) {
  const params = useParams();
  const movie_id = params.id;

  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!movies || !movie_id) {
      setLoading(false);
      return;
    }

    const movie = movies.find(movie => movie.id === parseStr(movie_id));
    setSelectedMovie(movie);
    setLoading(false);
  }, [movies, movie_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!selectedMovie) {
    return <p>Movie not found</p>;
  }

  const summarizeReview = async (reviewBody) => {
    try {
      const response = await fetch('/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: reviewBody, num_sentences: 3 }),
      });
      const data = await response.json();
      return data.summary;
    } catch (error) {
      console.error('Error summarizing review:', error);
      return '';
    }
  };

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
      {/* <h3>User Reviews</h3>
      {selectedMovie.reviews && selectedMovie.reviews.map(review => (
        <>
          <h4>Review by: {review.user.username}</h4>
          <p>{review.review_body}</p>
        </>
      ))} */}
    </div>
  )
}
