// submitReview() =>saves a user’s review for a specific movie to the DB
// userReviews() => fetches all user reviews for specific movie using its movieID
import React from 'react'

export default function MovieReview({ reviews }) {
  return (
    <div className="movie-review">
      <h2>Movie Review</h2>
      <ul>
        {reviews.map((review) => {
          return <li key={review.id}>{review.review_body}</li>
        })}
      </ul>
    </div>
  )
}
