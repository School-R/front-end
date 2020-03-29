import React from 'react'
import MainNav from '../navs/MainNav'

const Login = () => {
	return (
		<section>
			<MainNav />
			<form>
				<input type='email' value='' placeholder='Email' />
				<input type='password' value='' placeholder='Password' />
			</form>
		</section>
	)
}

export default Login
