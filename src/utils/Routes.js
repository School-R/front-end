import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../components/marketing/LandingPage'
import AboutPage from '../components/marketing/AboutPage'
import Login from '../components/forms/Login'
import Registration from '../components/forms/Registration'
import KidsDash from '../components/dashboards/kids/KidsDash'
import ParentDash from '../components/dashboards/parents/ParentDash'
import AddProjectForm from '../components/forms/AddProjectForm'
import UpdateProject from '../components/forms/UpdateProject'
import NewsFeed from '../components/dashboards/Newsfeed'
import ProtectedRoute from './ProtectedRoute'


const Routes = () => {
	return (
		<div>
			<ProtectedRoute path='/parents-dash/:id' component={ParentDash} />
			<ProtectedRoute path='/parents-dash/:id/editProject' component={UpdateProject} />
			<ProtectedRoute path='/parents-dash/:id/newProject' component={AddProjectForm} />
			<ProtectedRoute path='/parents-dash/:id/newsfeed' component={NewsFeed} />
			<ProtectedRoute path='/kids-dash/:id' component={KidsDash} />
			<ProtectedRoute path='/kids-dash/:id/editProject' component={UpdateProject} />
			<ProtectedRoute path='/kids-dash/:id/newProject' component={AddProjectForm} />
			<ProtectedRoute path='/kids-dash/:id/newsfeed' component={NewsFeed} />
			<Route exact path='/' component={LandingPage} />
			<Route path='/about' component={AboutPage} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Registration} />
		</div>
	)
}

export default Routes
