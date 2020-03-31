import React, { useState } from 'react'
import MainNav from '../navs/MainNav'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions'
import{v4 as uuid} from 'uuid'

const Login = props => {
	const dispatch = useDispatch()
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
		isParent:false,
		token: uuid()
	})

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(login(credentials, props))
	}
	return (
		<section>
			<MainNav />
			<form onSubmit={handleSubmit}>
				<input type='email' name='email' value={credentials.email} placeholder='Email' onChange={handleChange} />
				<input
					type='password'
					name='password'
					value={credentials.password}
					placeholder='Password'
					onChange={handleChange}
				/>
				<br />
				<span>
					<input type='checkbox' onChange={e => setCredentials({ ...credentials, isParent: true })} />
					<br />
					<h5>Parent</h5>
				</span>
				<button>Log In</button>
			</form>
		</section>
	)
}

export default Login
