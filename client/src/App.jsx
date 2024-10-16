import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <h1>Logo</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Login/Sign Up</a></li>
          <li>Signed in as: <a href="#">User</a></li>
        </ul>

      </nav>
    </>
  )
}

export default App
