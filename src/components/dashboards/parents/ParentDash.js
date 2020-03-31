import React from 'react';
import MainNav from '../../navs/MainNav';
import { NavLink } from 'react-router-dom'

const ParentDash = () => {
  

  return (
    <section>
      <MainNav />
      <div>
        <NavLink to="/parents-dash/id/newsfeed">NewsFeed</NavLink>
        <br />
        <br />
        <NavLink to="/parents-dash/id/newProject">Add New Project</NavLink>
      </div>
    </section>
  );
}

export default ParentDash