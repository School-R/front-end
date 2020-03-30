import React, {useState, useEffect} from 'react'
import RegistNav from '../navs/RegistNav'
import { useDispatch } from 'react-redux'
import { postNewParent, getParents, getKids } from '../../redux/actions'

const Registration = (props) => {
	const dispatch = useDispatch()
	const [userToPost, setUserToPost] = useState({
		id: '',
		parent_id: '',
		fullname: '',
		email: '',
		password: '',
		isParent: true,
		token:''
	})
	useEffect(() => {
		dispatch(getParents())
		dispatch(getKids())
	},[dispatch])

	const handleChange = e => {
		setUserToPost({
			...userToPost,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(postNewParent(userToPost, props))
	}

	return (
		<section>
			<RegistNav />
			<form onSubmit={handleSubmit}>
				<input type='text' name='fullname' value={userToPost.fullname} placeholder='Full Name' onChange={handleChange} />
				<input type='email' name='email' value={userToPost.email} placeholder='Email' onChange={handleChange} />
				<input type='password' name='password' value={userToPost.password} placeholder='Password' onChange={handleChange} />
				<button>Submit</button>
			</form>
		</section>
	)
}

export default Registration
