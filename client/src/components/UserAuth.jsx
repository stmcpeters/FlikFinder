import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UserAuth({ user, onSaveUser, handleLogin }) {

  // setting initial state of login data and state to update inputs
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  // setting initial state of registration data and state to update inputs
  const [registerData, setRegisterData] = useState({
    username: '',
    password: ''
  })

  // handles user typing into input fields
  const handleLoginChange = (event) => {
    setLoginData(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleRegisterChange = (event) => {
    setRegisterData(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // function to handle post request to create new user
  const postUser = async (newUser) => {
    try{
      const response = await fetch("http://localhost:5001/db/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      onSaveUser(data);
      handleLogin();
    } catch (error) {
      console.error('Error creating new user:', error);
      alert('Could not create new user, please try again');
    }
  };

  // handles login submission
  // prevents form from being submitted without validating inputs first
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (loginData.username && loginData.password) {
      // check if the username and password match existing user data
      const userFound = user.find(u => u.username === loginData.username && u.password === loginData.password);
      if (userFound) {
        // handleLogin is called => setting logged in to true
        handleLogin();
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('Please fill out both fields');
    }
  };
  // handles registration submission
  // prevents form from being submitted without validating inputs first
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // creates new user using registerData
    postUser(registerData);
  };

  return (
    <div> 
      <h1>FlixFinder</h1> 
      <br/>
        <div className='auth-card'>
          <div className='auth-form'>
            <h2>Sign In</h2>
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group>
                  <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="username" 
                      required
                      value={loginData.username}
                      onChange={handleLoginChange}
                      />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      name="password" 
                      required
                      value={loginData.password}
                      onChange={handleLoginChange}
                      /> 
                    <Button 
                      variant="dark"
                      className='submit-btn'
                      type="submit"> 
                      Sign In
                    </Button>
                </Form.Group>
              </Form>
            </div>
      <div className='auth-form'>
        <h2>New User</h2>
          <Form onSubmit={handleRegisterSubmit}>
            <Form.Group>
              <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                  type="username" 
                  name="username" 
                  required
                  value={registerData.username}
                  onChange={handleRegisterChange}
                />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control 
                  type="password" 
                  name="password" 
                  required
                  minLength="6"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                />
                <Button 
                  variant='dark'
                  className='submit-btn'
                  type="submit">
                  Register
                </Button>
            </Form.Group>
          </Form>
        </div>
    </div>
  </div>
  )}
