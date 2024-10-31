import React, { useState, useEffect } from 'react'

export default function MovieReview({ renderCard }) {

  // initializes and sets state for most recent reviews
  const [recents, setRecents] = useState([]);
  // initializes and sets user reviews fetched by movie ID
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    const getRecents = async () => {
      try {
        const response = await fetch('http://localhost:5001/db/recents');

        if(!response.ok) throw new Error('Network response is not ok </3');

        const data = await response.json();
        setRecents(data);
      } catch(error){
        console.error('Error fetching recent reviews: ', error);
      }
    }
    getRecents();
  }, []);

// reviewsByMovie() => fetches all user reviews for specific movie using its movieID
useEffect(() => {
  const reviewsByMovie = async () => {
    try {
      const response = await fetch('http://localhost:5001/db/reviews/:movieid');

      if(!response.ok) throw new Error('Network response is not ok </3');

      const data = await response.json();
      setUserReviews(data);
    } catch(error){
      console.error('Error fetching user reviews for this movie: ', error);
    }
  }
  reviewsByMovie();
}, []);
//console.log(recents);

  return (
    <div>
     {/* <h2>Most Recent Reviews</h2>
      <div className='review-card'>
        {recents.map(renderCard)}
      </div> */}
    </div>
  )
}
