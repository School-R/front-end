// Registration for the react app - Only for Registration & Login
import React from 'react'
import Logo from '../../images/School_R.png'
import {Link} from 'react-router-dom'
import { Navbar, NavbarBrand, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const RegistNav = () => {
	const history = useHistory()

	const logout = () => {
		localStorage.removeItem('token')
		history.push('/login')
	}

	// Make sure to add a logout function
	return (
		<div>
			<Navbar className='App-header'>
				<Link to='/'>
					<NavbarBrand className='school-r'>
						<img src={Logo} alt='logo' className='logo' />
					</NavbarBrand>
				</Link>
				<span>
					<Button
						onClick={() => history.push('/login')}
						outline
						style={{ color: '#f99c1b', border: '1px solid #f99c1b' }}
						className='school-r2'>
						Login
					</Button>
					<Button onClick={logout} outline style={{ color: '#f99c1b', border: '1px solid #f99c1b' }} className='school-r2'>
						Log Out
					</Button>
				</span>
			</Navbar>
		</div>
	)
}

export default RegistNav
