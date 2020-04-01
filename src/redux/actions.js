import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN = 'LOGIN'
export const SET_ERROR = 'SET_ERROR'
export const GET_USERS = 'GET_USERS'
export const POST_NEW_PROJECT = "POST_NEW_PROJECT";

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
		.post("/users", userToPost)
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
		.get("/users")
		.then(res => {
			dispatch({ type: GET_USERS, payload: res.data })
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err)
			dispatch({ type: SET_ERROR, payload: 'error getting parents' })
		})
}

export const postProject = (project) => dispatch => {
	axiosWithAuth()
    .post("/projects", project)
    .then(res => {
      dispatch({ type: POST_NEW_PROJECT, payload: res.data });
    })
    .catch(err => {
      console.log("NOOOOO!!!!", err);
      dispatch({ type: SET_ERROR, payload: "error posting a new project" });
    });
}

// export const EDIT_PROJECT_START = "EDIT_PROJECT_START"

// export const editProject = (token, project, history) => dispatch => {
//   dispatch({ type: EDIT_PROJECT_START, payload: project });
//   history.push("/add");
//   axiosWithAuth(token)
//     .put(`${projects}/projects/updateprojects/${project.id}`, project)
//     .then(res => {
//       console.log(res);
//       setTimeout(() => {
//         dispatch({ type: EDIT_PROJECT_SUCCESS, payload: res.data });
//         history.push("/projects");
//       }, 1500);
//     })
//     .catch(err => dispatch({ type: EDIT_PROJECT_ERROR }));
// };


// export const SAVE_EDIT_PROJECT_START = "SAVE_EDIT_PROJECT";

// export const saveEditProject = (token, project, history) => dispatch => {
//   dispatch({ type: SAVE_EDIT_PROJECT_START });
//   axiosWithAuth(token)
//     .put(`${urlServer}/projects/updateproject/${project.id}`, project)
//     .then(res => {
//       console.log(res);
//       setTimeout(() => {
//         dispatch({ type: SAVE_EDIT_PROJECT_SUCCESS, payload: res.data });
//         history.push("/projects");
//       }, 1500);
//     })
//     .catch(err => dispatch({ type: SAVE_EDIT_PROJECT_ERROR }));
// };

