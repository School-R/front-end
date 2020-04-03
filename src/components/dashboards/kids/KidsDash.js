import React from 'react'
import MainNav from '../../navs/MainNav'
import { NavLink, useParams } from 'react-router-dom'
import style from 'styled-components'

const Button = style.button`
	background-color: #F99C1B;
	color: #fff;
	padding: 10px;
	width: 20%;
	border: none;
	border-radius: 4px;
	font-size: 14px;
	font-weight: bold;
	margin-top: 10px;
	margin: 0.5%;
	cursor: pointer;
	&:disabled {
      opacity: .5;
    }
    &:hover {
      background-color: #FA7027;
    }
`

const KidsDash = () => {
	const {id}=useParams()
  return (
    <section>
      <MainNav />
      <div>
        <NavLink to={`/kids-dash/${id}/newsfeed`}>
          <Button> News Feed</Button>
        </NavLink>
      </div>
    </section>
  );
}

export default KidsDash