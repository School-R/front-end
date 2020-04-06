// Nav for the marketing page
// It will go to KidsDash eventually
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
			<span style={{ margin: '0 auto', width: '75%', marginLeft: '7%' }}>
				{/* This will be moved once we have backend with Auth */}

				<Link to='/memoryGame'>
					<Button outline color='danger' style={{ color: '#f99c1b', border: '1px solid #f99c1b', margin: '.5%' }}>
						Memory
					</Button>
				</Link>
				<Link to='/rock_paper_scissors'>
					<Button outline color='danger' style={{ color: '#f99c1b', border: '1px solid #f99c1b', margin: '.5%' }}>
						Rock Paper Scissors
					</Button>
				</Link>
				<Link to='/flash_card'>
					<Button outline color='danger' style={{ color: '#f99c1b', border: '1px solid #f99c1b', margin: '.5%' }}>
						Flash Cards
					</Button>
				</Link>
			</span>

			<span style={{ width: '15%' }}>
				<Link to='/'>
					<Button outline color='danger' style={{ color: '#f99c1b', border: '1px solid #f99c1b', margin: '2%' }}>
						Home
					</Button>
				</Link>
				<Link to='/about'>
					<Button outline color='danger' style={{ color: '#f99c1b', border: '1px solid #f99c1b', margin: '2%' }}>
						About
					</Button>
				</Link>
			</span>
		</nav>
	)
}

export default LandingNav
