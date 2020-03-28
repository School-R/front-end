import React from 'react'
import { Link } from 'react-router-dom'

const LandingNav = () => {
  return(
  <nav className="App-header">
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
  </nav>
  )
}

export default LandingNav
