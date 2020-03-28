import React from 'react'
import { Link } from 'react-router-dom'

const LandingNav = () => {
	return (
		<nav className='App-header'>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
		</nav>
	)
}

export default LandingNav
