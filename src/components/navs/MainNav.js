// Nav for the react app - Logout, Parents, Kids Projects?
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/School_R.png'
import { Navbar, NavbarBrand, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const MainNav = () => {
	const history = useHistory()
	const logout = () => {
		localStorage.removeItem('token')
		history.push('/login')
	}
	const url = window.location.href

	return (
		<Navbar className='App-header'>
			<Link to='/'>
				<NavbarBrand className='school-r'>
					<img src={Logo} alt='logo' className='logo' />
				</NavbarBrand>
			</Link>

			{url.match(/login/gi) ? (
				<span>
					<Button
						onClick={() => history.push('/register')}
						outline
						color='danger'
						style={{ color: '#f99c1b', border: '1px solid #f99c1b' }}
						className='school-r2'>
						Register
					</Button>
					<Button
						onClick={logout}
						outline
						color='danger'
						style={{ color: '#f99c1b', border: '1px solid #f99c1b' }}
						className='school-r2'>
						Log Out
					</Button>
				</span>
			) : (
				<span>
					<Button
						onClick={logout}
						outline
						color='danger'
						style={{ color: '#f99c1b', border: '1px solid #f99c1b' }}
						className='school-r2'>
						Log Out
					</Button>
				</span>
			)}
		</Navbar>
	)
}

export default MainNav
