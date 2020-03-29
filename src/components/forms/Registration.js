import React, {useState} from 'react'
import RegistNav from '../navs/RegistNav'
import { useDispatch } from 'react-redux'
import { postNewUser } from '../../redux/actions'

const Registration = (props) => {
	const dispatch = useDispatch()
	const [userToPost, setUserToPost] = useState({
		full_name: '',
		email: '',
		password: '',
		isParent: 'false',
	})

	const handleChange = e => {
		setUserToPost({
			...userToPost,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(postNewUser(userToPost, props))
	}

	return (
		<section>
			<RegistNav />
			<form onSubmit={handleSubmit}>
				<input type='text' name='full_name' value={userToPost.full_name} placeholder='Full Name' onChange={handleChange} />
				<input type='email' name='email' value={userToPost.email} placeholder='Email' onChange={handleChange} />
				<input type='password' name='password' value={userToPost.password} placeholder='Password' onChange={handleChange} />
				<input type='radio' name='isParent' value={setUserToPost.isParent === true} id='parent' onChange={handleChange} />
				<label htmlFor='parent'>Parent</label>
				<input type='radio' name='isParent' value={setUserToPost.isParent === false} onChange={handleChange} />
				<label htmlFor='child' id='child'>
					Child
				</label>
				<button>Submit</button>
			</form>
		</section>
	)
}

export default Registration
