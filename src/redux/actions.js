import { axiosWithAuth } from '../utils/axiosWithAuth'
import parents from '../data/parents'
import  kids  from '../data/kids'


export const LOGIN = 'LOGIN'
export const SET_ERROR = 'SET_ERROR'
export const GET_PARENTS = 'GET_PARENTS'
export const GET_KIDS = 'GET_KIDS'

export const login = (credentials, props) => dispatch => {
	axiosWithAuth()
		.post({parents} || {kids}, credentials)
		.then(res => {
			return (
				localStorage.setItem('token', res.data.token),
				res.data.isParent === true
					? props.history.push(`/parent-dash/${res.data.parent_id}`)
					: props.history.push(`/kid-dash/${res.data.kids_id}`)
			)
		})
		.catch(err => {
			localStorage.removeItem('token')
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error logging in' })
		})
}

export const postNewParent = (parentToPost, props) => dispatch => {
	axiosWithAuth()
		.post({parents}, parentToPost)
		.then(res => {
			localStorage.setItem('token', res.data.token)
			props.history.push(`/parent-dash/${res.data.parent_id}`)
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error registering' })
		})
}

export const postNewChild = (kidToPost, props) => dispatch => {
	axiosWithAuth()
		.post({kids}, kidToPost)
		.then(res => {
			localStorage.setItem('token', res.data.token)
			props.history.push(`/kid-dash/${res.data.kids_id}`)
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error registering' })
		})
}
export const getParents = () => dispatch => {
	axiosWithAuth()
		.get({parents})
		.then(res => {
			dispatch({ type: GET_PARENTS, payload: res.data })
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error getting parents' })
		})
}
export const getKids = () => dispatch => {
	axiosWithAuth()
		.get({kids})
		.then(res => {
			dispatch({ type: GET_KIDS, payload: res.data })
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error getting kids' })
		})
}