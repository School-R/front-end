// Cases: keyword that I use with reducers
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // it's there for the store
import { 
	SET_ERROR,  
	GET_USERS,
	POST_NEW_PROJECT,
  GET_PROJECTS,
  EDIT_PROJECT
} from './actions'

const initialState = {
  users: [],
  projects: [],
  error: ""
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case POST_NEW_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case EDIT_PROJECT:
      const newProjectsArray = state.projects.filter(project => project.id !== action.payload.id);
			return {
				...state,
				projects: [...newProjectsArray, action.payload],
			};
    default:
      return state;
  }
}
// Creating an array so that you can filter through it and pull one piece of info which is the projects_id to grab the pre-populated info. Case is going to grab the id on line 41 through the action. Global

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log('THE STORE!', store.getState())) // global state in redux
export default store
