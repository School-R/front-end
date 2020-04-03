import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN = 'LOGIN'
export const SET_ERROR = 'SET_ERROR'
export const GET_USERS = 'GET_USERS'
export const POST_NEW_PROJECT = 'POST_NEW_PROJECT'
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const GET_PROJECTS = 'GET_PROJECTS'

export const login = (credentials, props) => dispatch => {
	axiosWithAuth()
		.post('/login', credentials)
		.then(res => {
			return (
				localStorage.setItem('token', res.data.token),
				res.data.isParent === true
					? props.history.push(`/parents-dash/${res.data.id}`)
					: props.history.push(`/kids-dash/${res.data.id}`)
			)
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error logging in' })
		})
}

export const postNewUser = (userToPost, props) => dispatch => {
	axiosWithAuth()
		.post('/users', userToPost)
		.then(res => {
			localStorage.setItem('token', res.data.token)
			res.data.isParent === true
				? props.history.push(`/parents-dash/${res.data.id}`)
				: props.history.push(`/kids-dash/${res.data.id}`)
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error registering' })
		})
}

export const getUsers = () => dispatch => {
	axiosWithAuth()
		.get('/users')
		.then(res => {
			dispatch({ type: GET_USERS, payload: res.data })
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error getting parents' })
		})
}

// ### GET Projects

export const getProjects = () => dispatch => {

	axiosWithAuth().get('/projects')
	.then(res => {
		dispatch({ type: GET_PROJECTS, payload: res.data})
	})
	.catch(err => {
		console.log('NOOOOO!!!!', err);
		dispatch({ type: SET_ERROR, payload: 'error getting the projects'});
	})
}

export const postProject = (project) => dispatch => {
	axiosWithAuth()
    .post('/projects', project)
    .then(res => {
      dispatch({ type: POST_NEW_PROJECT, payload: res.data });
    })
    .catch(err => {
      console.log('NOOOOO!!!!', err);
      dispatch({ type: SET_ERROR, payload: 'error posting a new project' });
    });
}

// payload: a data bundle
export const editProject = (project) => dispatch => {
  axiosWithAuth()
    .put('/projects/:id', project)
    .then(res => {
			dispatch({ type: EDIT_PROJECT, payload: res.data })
	})
		.catch(err => {
			console.log('NOOOOO!!!!', err);
			dispatch({ type: SET_ERROR, payload: 'error editing a project' });
		});
};


