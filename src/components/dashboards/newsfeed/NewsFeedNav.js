import React from 'react';

import { Link } from 'react-router-dom'

// HAMBRGR News button Slide NAV
import { slide as Menu } from 'react-burger-menu';

const NewsFeedNav = () => {

    return(

    <Menu id='hambrgbtn'>
      <Link className="menu-item" to="/">
        Computer Education
      </Link>

      <Link className="menu-item" to="/">
        Science
      </Link>

      <Link className="menu-item" to="/">
        Math
      </Link>

      <Link className="menu-item" to="/">
        History
      </Link>

      <Link className="menu-item" to="/">
        Languages
      </Link>

      <Link className="menu-item" to="/">
        Literature
      </Link>

    </Menu>
    )
}

export default NewsFeedNav;