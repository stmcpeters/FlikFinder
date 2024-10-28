import React, { useState, useEffect } from 'react'


export default function MovieReview() {

  const [recents, setRecents] = useState([]);

  useEffect(() => {
    const getRecents = async () => {
      try {
        const response = await fetch('http://localhost:5001/db/reviews/recent');

        if(!response.ok) throw new Error('Network response is not ok </3');

        const data = await response.json();
        setRecents(data);
      } catch(error){
        console.error('Error fetching recent reviews: ', error);
      }
    }
    getRecents();
  }, []);

  // submitReview() =>saves a user’s review for a specific movie to the DB
// userReviews() => fetches all user reviews for specific movie using its movieID

  return (
    <div className="movie-review">
      <h2>Most Recent Reviews</h2>
      <ul>
        {recents.map((review) => {
          return <li key={review.id}>Posted at: {review.created_at.split('T')[0]} <br /> {review.review_body}</li>
        })}
      </ul>
    </div>
  )
}
