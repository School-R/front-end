import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN = 'LOGIN'
export const SET_ERROR = 'SET_ERROR'

export const login = (credentials, props) => dispatch => {
	axiosWithAuth()
		.post('/schoolr_login.json?key=7924d6d0', credentials)
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
		.post('/schoolr_registration.json?key=7924d6d0', userToPost)
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

