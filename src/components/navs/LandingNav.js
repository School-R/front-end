// Nav for the marketing page
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Logo from '../../images/School_R.png'

const LandingNav = () => {
	return (
		<nav className='App-header'>
			<Link to='/'>
				<div className='school-r'>
					<img src={Logo} alt='logo' className='logo' />
				</div>
			</Link>
			<span>
				<Link to='/'>
					<Button outline color='danger' style={{ color: '#f99c1b', border: '1px solid #f99c1b' }}>
						Home
					</Button>
				</Link>
				<Link to='/about'>
					<Button outline color='danger' style={{ color: '#f99c1b', border: '1px solid #f99c1b' }}>
						About
					</Button>
				</Link>
			</span>
		</nav>
	)
}

export default LandingNav
