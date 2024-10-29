import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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

const renderCard = (card) => {
  return (
    <Card style={{ width: '18rem' }} key={card.id}>
      <Card.Body>
        <Card.Title>Posted on: {card.created_at.split('T')[0]}</Card.Title>
          <Card.Text>{card.review_body}</Card.Text>
        <Button variant="primary">Movie Details</Button>
      </Card.Body>
    </Card>
  )
}

  return (
    <div>
     <h2>Most Recent Reviews</h2>
      <div className='review-card'>
        {recents.map(renderCard)}
     </div>
    </div>
  )
}
