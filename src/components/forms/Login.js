import React, {useState} from 'react'
import MainNav from '../navs/MainNav'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions'

const Login = (props) => {
	const dispatch = useDispatch()
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	})

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = () => {
		dispatch(login(credentials, props))
	}
	return (
		<section>
			<MainNav />
			<form onSubmit={handleSubmit}>
				<input type='email' value={credentials.email} placeholder='Email' onChange={handleChange} />
				<input type='password' value={credentials.password} placeholder='Password' onChange={handleChange} />
				<button>Log In</button>
			</form>
		</section>
	)
}

export default Login
