import React from 'react';

import { Link } from 'react-router-dom'

// HAMBRGR News button Slide NAV
import { slide as Menu } from 'react-burger-menu';

const NewsFeedNav = () => {

    return(

    <Menu id='hambrgbtn'>
      <Link className="menu-item" to="/">
        School Activities
      </Link>

      <Link className="menu-item" to="/">
        Success in School
      </Link>

      <Link className="menu-item" to="/">
        History
      </Link>

      <Link className="menu-item" to="/">
        Langauges
      </Link>

      <Link className="menu-item" to="/">
        Math
      </Link>

      <Link className="menu-item" to="/">
        Science
      </Link>

    </Menu>
    )
}

export default NewsFeedNav;