import React from 'react'

const Registration = () => {
	return (
		<form>
			<input type='text' value='' placeholder='First Name' />
			<input type='text' value='' placeholder='Last Name' />
			<input type='email' value='' placeholder='Email' />
			<input type='password' value='' placeholder='Password' />
			<input type='radio' value='true' id='parent' />
			<label htmlFor='parent'>Parent</label>
			<input type='radio' value='false' />
			<label htmlFor='child' id='child'>
				Child
			</label>
		</form>
	)
}

export default Registration
