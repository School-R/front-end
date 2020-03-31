import React from 'react'
import MainNav from '../../navs/MainNav'
import { NavLink, useParams } from 'react-router-dom'


const KidsDash = () => {
	const {id}= useParams()
  return (
			<section>
				<MainNav />
				<div>
					<NavLink to='/kids-dash/id/newsfeed'>NewsFeed</NavLink>
					<NavLink to='/kids-dash/id/newProject'>Add New Project</NavLink>
				</div>
			</section>
		)
}

export default KidsDash