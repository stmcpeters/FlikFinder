import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UserAuth({ user, isLoggedIn, setIsLoggedIn,  setUser }) {

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

  // handles the user typing into login fields
  const handleLoginChange = (event) => {
    setLoginData({...loginData, [event.target.name]: event.target.value});
  }
  // handles the user typing into registration fields
  const handleRegisterChange = (event) => {
    setRegisterData({...registerData, [event.target.name]: event.target.value});
  }

  // function to handle post request to create new user
  const postUser = (newUser) => {
    return fetch("http://localhost:5001/db/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setUser(data);
            setIsLoggedIn(true);
        });
  };

  // handles login submission
  // prevents form from being submitted without validating inputs first
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if(loginData.username && loginData.password) {
      // checks if inputted loginData matches existing user data - used "usr" to limit confusion
      const userFound = user.find((usr) => usr.username === loginData.username && usr.password === loginData.password)
      // sets updates states if loginData matches existing user
      if(userFound) {
        setIsLoggedIn(true);
        setUser(userFound);
        console.log('login successful');
        // error handling if inputted loginData doesn't match an existing user
      } else {
        console.error('Login failed: ', error);
        alert('Existing user not found, please register');
      }
      // error handling if no values in login username and password
    } else {
      console.error('Both fields are required');
      alert('Please fill out both fields');
    }
  }
  
  // handles registration submission
  // prevents form from being submitted without validating inputs first
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if(registerData.username && registerData.password) {
      // create new user object
      const newUser = {
        username: registerData.username,
        password: registerData.password
      };
      // calls the postUser function to create a new user
      postUser(newUser)
        // updates login state after registration
        .then(() => setIsLoggedIn(true))
        .catch((error) => console.error('Registration error: ', error));
    }
  }

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
