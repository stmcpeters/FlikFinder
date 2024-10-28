import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UserAuth({ user, onSaveUser, handleLogin }) {

// login() => will handle fetching user data from DB and set user state as logged in
// register() => will handle creating new user in DB and set user state as logged in

// console.log("UserAuth props:", { user, onSaveUser, handleLogin });


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
            //I'm sending data to the parent for updating the list
            onSaveUser(data);
        });
  };

  // handles login submission
  // prevents form from being submitted without validating inputs first
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if(user) {
      postUser(user);
    }
    // handleLogin is called => setting logged in to true
    handleLogin();
  }
  // handles registration submission
  // prevents form from being submitted without validating inputs first
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div> 
      <h1>FlixFinder</h1> 
      <br/>
        <div className='auth-card'>
          <div className='auth-form'>
            <h2>Sign In</h2>
              <Form onSubmit={handleLoginSubmit} method="POST">
                <Form.Group>
                  <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control 
                      type="username" 
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
  )
}
