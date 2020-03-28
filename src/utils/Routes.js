import React from 'react';
import { Route } from 'react-router-dom'
import LandingPage from '../components/marketing/LandingPage'
import AboutPage from '../components/marketing/AboutPage'
import Login from '../components/forms/Login'
import Registration from '../components/forms/Registration'

const Routes = () => {

  return (
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Registration}/>
    </div>
  )
}

export default Routes


