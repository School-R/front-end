import React from 'react';
import MainNav from '../../navs/MainNav';
import { NavLink, useParams } from 'react-router-dom'

const ParentDash = () => {
  const { id } = useParams()

  return (
			<section>
				<MainNav />
				<div>
					<NavLink to='/parents-dash/id/newsfeed'>NewsFeed</NavLink>
					<NavLink to='/parents-dash/id/newProject'>Add New Project</NavLink>
				</div>
			</section>
		)
}

export default ParentDash