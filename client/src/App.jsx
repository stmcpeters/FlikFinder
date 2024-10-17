import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserAuth from './components/UserAuth.jsx'
import SelectGenres from './components/SelectGenres.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <h1>Logo</h1>
        <ul className='nav-items'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Login/Sign Up</a></li>
          <li>Signed in as: <a href="#">User</a></li>
        </ul>
      </nav>

      <UserAuth />
      <SelectGenres />
    </>
  )
}

export default App
