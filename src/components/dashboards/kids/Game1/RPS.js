import React from 'react'
import RPSModal from './RPSModal'
import {NavLink} from 'react-router-dom'
const RPS = ()=> {
    
	return (
		<div>
			<img src='./rock_paper_scissors/images/icon-rules.svg' alt='game-rules' />
			<NavLink to='/rps'>Press</NavLink>
		</div>
	)
}

export default RPS;