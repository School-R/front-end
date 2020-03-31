import { axiosWithAuth } from '../utils/axiosWithAuth'

const urlServer = 'https://carl-shouts.herokuapp.com/api'

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

export const GET_PROJECTS_START = "GET_PROJECTS_START";
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS";
export const GET_PROJECTS_ERROR = "GET_PROJECTS_ERROR";

export const getProjects = token => dispatch => {
  const userId = localStorage.getItem("user_id");
  dispatch({ type: GET_PROJECTS_START });
  axiosWithAuth(token)
    .get(`${urlServer}/projects/${userId}`)
    .then(res => {
      console.log(res.data);
      setTimeout(() => {
        dispatch({ type: GET_PROJECTS_SUCCESS, payload: res.data });
      }, 1000);
    })
    .catch(err => {
      dispatch({ type: GET_PROJECTS_ERROR }); 
      console.log(err);
    });
};

export const POST_PROJECT_START = "POST_PROJECT_START"
export const POST_PROJECT_SUCCESS = "POST_PROJECT_SUCCESS"
export const POST_PROJECT_ERROR = "POST_PROJECT_ERROR"

export const postProject = (token, project, history) => dispatch => {
	console.log(project)
	dispatch({ type: POST_PROJECT_START })
	axiosWithAuth(token)
		.post(`${urlServer}/projects/insertProjects`, project)
		.then(res => {
			console.log(res)
			setTimeout(() => {
				dispatch({ type: POST_PROJECT_SUCCESS, payload: res.data })
				history.push('/projects')
			}, 1500)
		})
		.catch(err => dispatch({ type: POST_PROJECT_ERROR }))
}

// export const EDIT_PROJECT_START = "EDIT_PROJECT_START"
// export const EDIT_PROJECT_SUCCESS = "EDIT_PROJECT_SUCCESS"
// export const EDIT_PROJECT_ERROR = "EDIT_PROJECT_ERROR"

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


export const SAVE_EDIT_PROJECT_START = "SAVE_EDIT_PROJECT_START";
export const SAVE_EDIT_PROJECT_SUCCESS = "SAVE_EDIT_PROJECT_SUCCESS";
export const SAVE_EDIT_PROJECT_ERROR = "SAVE_EDIT_PROJECT_ERROR";

export const saveEditProject = (token, project, history) => dispatch => {
  dispatch({ type: SAVE_EDIT_PROJECT_START });
  axiosWithAuth(token)
    .put(`${urlServer}/projects/updateproject/${project.id}`, project)
    .then(res => {
      console.log(res);
      setTimeout(() => {
        dispatch({ type: SAVE_EDIT_PROJECT_SUCCESS, payload: res.data });
        history.push("/projects");
      }, 1500);
    })
    .catch(err => dispatch({ type: SAVE_EDIT_PROJECT_ERROR }));
};

