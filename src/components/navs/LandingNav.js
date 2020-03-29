// Nav for the marketing page
import React from 'react'
import { Link } from 'react-router-dom'
import RegistNav from '../navs/RegistNav'

const LandingNav = () => {
	return (
		<nav className='App-header'>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<RegistNav />
		</nav>
	)
}

export default LandingNav
