import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../components/marketing/LandingPage'
import AboutPage from '../components/marketing/AboutPage'
import Login from '../components/forms/Login'
import Registration from '../components/forms/Registration'
import KidsDash from '../components/kids/KidsDash'
import ParentsDash from '../components/parents/ParentDash'
import ProjectForm from '../components/forms/ProjectForm'
import UpdateProject from '../components/forms/UpdateProject'
import ProtectedRoute from './ProtectedRoute'
import KidsRegister from '../components/forms/KidsRegister'

const Routes = () => {
	return (
		<div>
			<ProtectedRoute exact path='/kids-dash/:id' component={KidsDash} />
			<ProtectedRoute exact path='/parents-dash/:id' component={ParentsDash} />
			<ProtectedRoute exact path='/kids-dash/:id/makeProject' component={UpdateProject} />
			<ProtectedRoute exact path='/kids-dash/:id/showProject' component={ProjectForm} />
			<Route exact path='/' component={LandingPage} />
			<Route path='/about' component={AboutPage} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Registration} />
			{/* <Route path='/kids_register' component={KidsRegister} /> */}
		</div>
	)
}

export default Routes
