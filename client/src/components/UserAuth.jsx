// login() => will handle fetching user data from DB and set user state as logged in
// register() => will handle creating new user in DB and set user state as logged in

import React from 'react'

export default function UserAuth() {
  return (
    <div className='user-auth'> 
      <h1>UserAuth Component</h1>
      <form >
        <label>Username: </label>
          <input type="text" name="username" /> <br></br>
        <label>Email: </label>
          <input type="text" name="username" /><br></br>
        <input type="submit" value="Sign in" disabled/>
      </form>
    </div>

  )
}
