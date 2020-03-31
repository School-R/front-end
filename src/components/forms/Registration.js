import React, { useState, useEffect } from 'react'
import getUid from 'get-uid'
import { v4 as uuid } from 'uuid'
import RegistNav from '../navs/RegistNav'
import { useDispatch } from 'react-redux'
import { postNewUser, getUsers } from '../../redux/actions'

const Registration = props => {
	const dispatch = useDispatch()
	const [userToPost, setUserToPost] = useState({
		id: '',
		user_id: getUid(),
		fullname: '',
		email: '',
		password: '',
		isParent: false,
		token: uuid(),
	})
	useEffect(() => {
		dispatch(getUsers())
	}, [dispatch])

	const handleChange = e => {
		setUserToPost({
			...userToPost,
			[e.target.name]: e.target.value,
	
		})
	}
	const isTrue = JSON.parse('true')

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(postNewUser(userToPost, props))
	}

	return (
		<section>
			<RegistNav />
			<form onSubmit={handleSubmit}>
				<input type='text' name='fullname' value={userToPost.fullname} placeholder='Full Name' onChange={handleChange} />
				<input type='email' name='email' value={userToPost.email} placeholder='Email' onChange={handleChange} />
				<input type='password' name='password' value={userToPost.password} placeholder='Password' onChange={handleChange} />
				<input type='radio' name='isParent' value={isTrue} onChange={handleChange} />
				<button>Submit</button>
			</form>
		</section>
	)
}

export default Registration
