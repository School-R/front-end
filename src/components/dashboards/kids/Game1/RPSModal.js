import React, { useState } from 'react'
import Rock from './images/icon-rock.svg'
import Paper from './images/icon-paper.svg'
import Scissors from './images/icon-scissors.svg'
import Rules from './images/icon-rules.svg'
import {Modal}from 'reactstrap'

const RPSModal = () => {
	let [playerScore, setPlayerScore] = useState(0)
	let [compScore, setCompScore] = useState(0)
	const [playerChoice, setPlayerChoice] = useState('')
	const [compChoice, setCompChoice] = useState('')
	const [result, setResult] = useState('Want to Play ?')
	const [result2, setResult2]=useState('')
	
	const [modal, setModal] = useState(false)

	const toggle = () => setModal(!modal)

	const getCompChoice = () => {
		const randNum = Math.floor(Math.random() * 100)
		if (randNum < 33) {
			setCompChoice('Rock')
		} else if (randNum <= 66) {
			setCompChoice('Paper')
		} else if (randNum <= 99) {
			setCompChoice('Scissors')
		} else {
			return
		}
	}

	const getWinner = () => {
		getCompChoice()
		switch (playerChoice + compChoice) {
			case 'RockScissors':
			case 'PaperRock':
			case 'ScissorsPaper':
			win(playerChoice, compChoice)
				break
			  case 'Scissors Rock':
				case 'RockPaper':
				case 'PaperScissors':
			lose(playerChoice, compChoice)
				break
			case 'RockRock':
			case 'PaperPaper':
			case 'ScissorsScissors':
			draw(playerChoice)
				break 
			default:
			
		}		
	}
												
	const win = (playerChoice, compChoice) => {
		setPlayerScore(playerScore + 1)
		setResult(`${playerChoice} beats ${compChoice}.`)
		setResult2(`🎉🎉You Win 🎉🎉`)
	}
	
	const lose = (playerChoice, compChoice) =>{
		setCompScore(compScore + 1)
		setResult(` ${compChoice} beats ${playerChoice}.`)
    setResult2(`💩You Lose 💩`)
	}

	const draw = (playerChoice) => {
		setCompScore(compScore + 0)
		setPlayerScore(playerScore + 0)
		setResult(`You Both Chose ${playerChoice}.`)
    setResult2(`🥺You Tied 🥺`)
	}
	
	
	
	const handleClick = (name) => {
		setPlayerChoice(name)
		getCompChoice()
		getWinner(win(playerChoice, compChoice, playerScore), lose(playerChoice, compChoice), draw(playerChoice))
		
	}

	return (
		<section className='body'>
			<section className='header'>
				<h1 className='rps-h1'>Rock Paper Scissors</h1>
			</section>

			<div className='scoreboard'>
				<span className='badge'>User {playerScore}</span>:<span className='badge'> {compScore} Comp</span>
			</div>
			<span className='result-msg'>
				{result}
				<br />
				{result2}
			</span>

			<div className='choices'>
				<div
					className='choice'
					onClick={(e) => {
						e.preventDefault()
						handleClick('Rock')
					}}>
					<img src={Rock} alt='rock' />
				</div>
				<div
					className='choice'
					onClick={(e) => {
						e.preventDefault()
						handleClick('Paper')
					}}>
					<img src={Paper} alt='paper' />
				</div>
				<div
					className='choice'
					onClick={(e) => {
						e.preventDefault()
						handleClick('Scissors')
					}}>
					<img src={Scissors} alt='scissors' />
				</div>
			</div>
			<p className='action-message'>Make your Move</p>
					<br/>
			<div onClick={toggle} className='action-message'>
				⬇ ⬇ ⬇ How To Win ⬇ ⬇ ⬇
			</div>
			<Modal isOpen={modal} toggle={toggle}>
				<footer style={{ margin: '0 auto' }}>
					<img src={Rules} alt='game-rules' />
				</footer>
			</Modal>
		</section>
	)
}
export default RPSModal
