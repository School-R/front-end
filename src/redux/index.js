import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { 
	SET_ERROR,  
	GET_USERS,
	POST_NEW_PROJECT,
  GET_PROJECTS
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
        projects: action.payload
      };  
    case POST_NEW_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log('THE STORE!', store.getState()))
export default store
