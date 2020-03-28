import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN = 'LOGIN'
export const SET_ERROR = 'SET_ERROR'


// export const login = (credentials, props) => dispatch => {
// 	axiosWithAuth()
// 		.post('/auth/login', credentials)
//     .then(res => {
//       return(
// 			localStorage.setItem('token', res.data.token),
// 			res.data.user.role === 'parent' 
// 			?	props.history.push(`/parent-dash/${res.data.roleId.id}`)
//       : res.data.user.role === 'kid'
//       ?props.history.push(`/kid-dash/${res.data.roleId.id}`)
// 			: null )
// 		})
// 		.catch(err => {
// 			localStorage.removeItem('token')
// 			console.log('NOOOOO!!!!', err)
// 			dispatch({ type: SET_ERROR, payload: 'error logging in' })
// 		})
// }