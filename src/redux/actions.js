import { axiosWithAuth } from '../utils/axiosWithAuth'




export const LOGIN = 'LOGIN'
export const SET_ERROR = 'SET_ERROR'
export const GET_USERS = 'GET_USERS'


export const login = (credentials, props) => dispatch => {
	axiosWithAuth()
		.post('/login', credentials)
		.then(res => {
			return (
				localStorage.setItem('token', res.data.token),
				res.data.isParent === true
					? props.history.push(`/parent-dash/${res.data.id}`)
					: props.history.push(`/kid-dash/${res.data.id}`)
			)
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error logging in' })
		})
}

export const postNewUser = (userToPost, props) => dispatch => {
	axiosWithAuth()
		.post("/users", userToPost)
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


export const getUsers = () => dispatch => {
	axiosWithAuth()
		.get("/users")
		.then(res => {
			dispatch({ type: GET_USERS, payload: res.data })
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error getting parents' })
		})
}
