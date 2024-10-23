import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UserAuth() {

// login() => will handle fetching user data from DB and set user state as logged in
// register() => will handle creating new user in DB and set user state as logged in

  // setting initial state of login data and state to update inputs
  const [loginData, setLoginData] = useState({
    username: '',
    email: ''
  })
  // setting initial state of registration data and state to update inputs
  const [registerData, setRegisterData] = useState({
    username: '',
    email: ''
  })

  // handles the user typing into login fields
  const handleLoginChange = (event) => {
    setLoginData({...loginData, [event.target.name]: event.target.value});
  }
  // handles the user typing into registration fields
  const handleRegisterChange = (event) => {
    setRegisterData({...registerData, [event.target.name]: event.target.value});
  }
  // handles login submission
  // prevents form from being submitted without validating inputs first
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // handle user authentication, if ok, onLogin is called
    onLogin();
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
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group>
                  <Form.Label htmlFor="username">Username: </Form.Label>
                    <Form.Control 
                      type="username" 
                      name="username" 
                      required
                      value={loginData.username}
                      onChange={handleLoginChange}
                      />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email">Email: </Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      required
                      value={loginData.email}
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
              <Form.Label htmlFor="username">Username: </Form.Label>
                <Form.Control
                  type="username" 
                  name="username" 
                  required
                  value={registerData.username}
                  onChange={handleRegisterChange}
                />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email: </Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  required
                  value={registerData.email}
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
