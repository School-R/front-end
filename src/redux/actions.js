import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN = 'LOGIN'
export const SET_ERROR = 'SET_ERROR'

export const login = (credentials, props) => dispatch => {
	axiosWithAuth()
		.post('/api/login', credentials)
		.then(res => {
			return (
				localStorage.setItem('token', res.data.token),
				res.data.isParent === true
					? props.history.push(`/parent-dash/${res.data.id}`)
					: props.history.push(`/kid-dash/${res.data.id}`)
			)
		})
		.catch(err => {
			localStorage.removeItem('token')
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error logging in' })
		})
}

export const postNewUser = (userToPost, props) => dispatch => {
	axiosWithAuth()
		.post('/api/register', userToPost)
		.then(res => {
			localStorage.setItem('token', res.data.token)
			res.data.isParent === true
				? props.history.push(`/parent-dash/${res.data.id}`)
				: props.history.push(`/kid-dash/${res.data.id}`)
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error registering' })
		})
}

