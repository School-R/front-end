import React from 'react';
import Paper from './rock_paper_scissors/images/icon-paper.svg'
import Rock from './rock_paper_scissors/images/icon-rock.svg'
import Scissors from './rock_paper_scissors/images/icon-scissors.svg'
import {Card} from 'reactstrap'
const RPSModal=() => {
    
	return (
		
		<section className='body'>
			<header>
				<h1 className='rps-h1'>Rock Paper Scissors</h1>
			</header>

			<div className='scoreboard'>
				<div id='user-label' className='badge'>User</div>
				<div id='computer-label' className='badge'>Comp</div>
				<span id='user-score'>0</span>:<span id='computer-score'>0</span>
			</div>

			<div >
				<p className="result-msg">Paper covers Rock You Win!!</p>
			</div>

			<div className="choices">
				<div id='rock' className="choice"><img src={Rock} alt='rock'/></div>
				<div id='paper' className="choice"><img src={Paper} alt='paper'/></div>
				<div id='scissors' className="choice"><img src={Scissors} alt='scissors'/></div>
			</div>

			<p id='action-message'>Make your Move</p>
			</section>
		
	)
}

export default RPSModal;