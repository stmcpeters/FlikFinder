import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// helps to access the parameters of the current route to manage the dynamic routes in the URL
import { useParams } from 'react-router-dom';

export default function ReviewForm ({ reviews, onSaveReview }) {
  // const [exisitingReviews, setExisitingReviews] = useState([]);

  // initial values of form to be updated
  const [valuesForm, setValuesForm] = useState({
    username: "",
    movie_title: "",
    review_body: "",
  })

  // creates a state for managing errors
  const [error, setError] = useState({
    errorUsername: false,
    errorMovieTitle: false,
    errorReviewBody: false,
  });

  const params = useParams();

  // populate review form with current logged in user ID and movie ID
  useEffect(() => {
    // fetch current user ID
    const fetchCurrentUserId = async () => {
      try {
        const response = await fetch('/db/users');
        const data = await response.json();
        setValuesForm((prev) => ({ ...prev, username: data[0]?.username || '' }));
      } catch (error) {
        console.error('Error fetching current user ID:', error);
      }
    };

    // fetch movie ID from URL parameters
    const fetchMovieId = () => params.id;

    Promise.all([fetchCurrentUserId(), fetchMovieId()]).then(([_, movieId]) => {
      setValuesForm((prev) => ({ ...prev, movie_title: movieId }));
    });
  }, [params.id]);

  // fetches exisiting reviews for movie ID the user is viewing - WIP
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try{
  //       const response = await fetch(`/db/reviews/${params.id}`);
  //       const data = await response.json();
  //       setExisitingReviews(data);
  //     } catch (error) {
  //       console.error('Error fetching reviews: ', error);
  //     }
  //   }
  //   fetchReviews();
  // }, [params.id]);

    // functions that handle user typing into fields
    const handleUsernameInputChange = (event) => {
      setValuesForm((prev) => ({ ...prev, username: event.target.value }));
    };
  
    const handleMovieTitleInputChange = (event) => {
      setValuesForm((prev) => ({ ...prev, movie_title: event.target.value }));
    };
  
    const handleBodyInputChange = (event) => {
      setValuesForm((prev) => ({ ...prev, review_body: event.target.value }));
    };

  // making sure all form fields have values
  const validateForm = () => {
    return Object.values(valuesForm).every(value => value.trim() !== '');
  };

  // prevents submission without validation, alerts if inputs are empty
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      alert('Please fill out all fields.');
      return;
    }
  // attempts to have movie ID populate automatically based on which movie the user is viewing
    const newReview ={
      ...valuesForm,
      movie_id: params.id
    };

    try {
      const response = await fetch("/db/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      onSaveReview(data);
      //this line just for cleaning the form
      clearForm();
    } catch (error) {
      console.error('Error posting new review: ', error);
      alert('Could not post review, please try again');
    }
  }; 

  const clearForm = () => {
    setValuesForm({
      username: "",
      movie_title: "",
      review_body: "",
    });
  };


  return (
    <Card className='review-form'>
      <Card.Body>
        <Card.Title>Create New Review</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control 
                  data-testid='username'
                  id="username"
                  type="text"
                  name="username"
                  required
                  value={valuesForm.username}
                  onChange={handleUsernameInputChange}
                />
              {error.errorUsername && <span>This field is required</span>}
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="movie-title">Movie Title</Form.Label>
                <Form.Control 
                  type="text"
                  name="movie_title"
                  required
                  value={valuesForm.title}
                  onChange={handleMovieTitleInputChange}
                />
              {error.errorMovieTitle && <span>This field is required</span>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Review Body</Form.Label>
                <Form.Control 
                  type="textarea"
                  name="review_body"
                  required
                  value={valuesForm.review_body}
                  onChange={handleBodyInputChange}
                />
              {error.errorReviewBody && <span>This field is required</span>}
            </Form.Group>
            <Form.Group>
              <Button type="submit">Create Review</Button>
            </Form.Group>
            {/* <div id="error-message">Please fill out all fields.</div> */}
          </Form>
      </Card.Body>
    </Card>
    )
}
