import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ReviewForm ({ reviews, onSaveReview }) {
  // handles review form

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

    // creates functions that handle user typing into fields
  const handleUsernameInputChange = (event) => {
    const username = event.target.value;
    setValuesForm((valuesForm) => ({ ...valuesForm, username}));
    if(username === "") {
      setError((error) => ({ ...error, errorUsername: true}));
    } else {
      setError((error) => ({ ...error, errorUsername: false}));
    }
  }

  const handleMovieTitleInputChange = (event) => {
    const movie_title = event.target.value;
    setValuesForm((valuesForm) => ({ ...valuesForm, movie_title }));
    if(movie_title === "") {
      setError((error) => ({ ...error, errorMovieTitle: true }));
    } else {
      setError((error) => ({ ...error, errorMovieTitle: false }));
    }
  }

  const handleBodyInputChange = (event) => {
    const body = event.target.value;
    setValuesForm((valuesForm) => ({ ...valuesForm, body }));
    if(body === "") {
      setError((error) => ({ ...error, errorReviewBody: true }));
    } else {
      setError((error) => ({ ...error, errorReviewBody: false }));
    }
  }


  // submitReview() =>saves a user’s review for a specific movie to the DB
  const submitReview = (newReview) => {
    const updatedReview ={
      ...newReview,
      username: valuesForm.username
    };

  return fetch("http://localhost:5001/db/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReview),
  })
      .then((response) => {
          if(!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json();
      })
      .then((data) => {
          onSaveReview(data);
          //this line just for cleaning the form
          clearForm();
      })
      .catch((error) => console.error('Error posting new review: ', error));
  };

// event.preventDefault() stops the form from being submitted normally
// Object.values(valuesForm) gets all form values
// checks if every value is truthy (not empty)
// shows an alert if any fields are empty
// postEntry(valuesForm) sends form data

  const onSubmit = (event) => {
    // console.log('submit called');
    event.preventDefault();
    if (Object.values(valuesForm).every(value => value.trim() === '')) {
      alert('Please fill out all fields.');
      return;
    }
    submitReview(valuesForm);
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
          <Form onSubmit={onSubmit}>
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
              <Form.Label>Movie Title</Form.Label>
                <Form.Control 
                  type="text"
                  name="title"
                  required
                  value={valuesForm.title}
                  onChange={handleMovieTitleInputChange}
                />
              <Form.Label>Review Body</Form.Label>
                <Form.Control 
                  type="text"
                  name="text"
                  required
                  value={valuesForm.body}
                  onChange={handleBodyInputChange}
                />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Create Review</Button>
            </Form.Group>
            <div id="error-message">Please fill out all fields.</div>
          </Form>
      </Card.Body>
    </Card>
    )
}
