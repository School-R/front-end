import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { 
	SET_ERROR,  
	GET_USERS,
	/* GET_PROJECTS_START,
	GET_PROJECTS_SUCCESS,
	GET_PROJECTS_ERROR,
	POST_PROJECT_START,
	POST_PROJECT_SUCCESS,
	POST_PROJECT_ERROR,
	EDIT_PROJECT_START,
	EDIT_PROJECT_ERROR,
	SAVE_EDIT_PROJECT_START,
	SAVE_EDIT_PROJECT_SUCCESS,
	SAVE_EDIT_PROJECT_ERROR */
} from './actions'

const initialState = {
  users: [],
  projects: [],
  error: "",
  postProjectError: false,
  postProjectStart: false,
  editProjectStart: false,
  saveEditProjectStart: false,
	saveEditProjectError: false, 
	currentProject: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			}
		case GET_USERS:
			return {
				...state,
				users: action.payload,
			}
		default:
			return state
	}
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log('THE STORE!', store.getState()))
export default store
