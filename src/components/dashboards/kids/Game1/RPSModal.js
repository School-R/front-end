import React, { useState } from 'react'
import Rock from './images/icon-rock.svg'
import Paper from './images/icon-paper.svg'
import Scissors from './images/icon-scissors.svg'
import Rules from './images/icon-rules.svg'

const RPSModal = () => {
	const [playerChoice, setPlayerChoice] = useState('')
	const [compChoice, setCompChoice] = useState('')
	const [result, setResult] = useState('Want to Play ?')
	
	let [playerScore, setPlayerScore] = useState(0)
	let [compScore, setCompScore] = useState(0)

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

	const getWinner = (playerChoice,compChoice) => {
		switch (playerChoice + compChoice) {
			case 'Rock Scissors':
			case 'Paper Rock':
			case 'Scissors Paper':
			win(playerChoice, compChoice, playerScore)
				break
			case 'Scissors Rock':
				case 'Rock Paper':
				case 'Paper Scissors':
			lose(playerChoice, compChoice, compScore)
				break
			case 'Rock Rock':
			case 'Paper Paper':
			case 'Scissors Scissors':
			draw(playerChoice)
				break
			default:
		}		
	}
												
	const win = (playerChoice, compChoice, playerScore) => {
		setPlayerScore(playerScore + 1)
		setResult(`${playerChoice} beats ${compChoice}.🎉🎉You Win 🎉🎉`)
	}
	
	const lose = (playerChoice, compChoice, compScore) =>{
		setCompScore(compScore + 1)
		setResult(` ${compChoice} beats ${playerChoice}. 💩You Lost 💩`)
	}

	const draw = (playerChoice) => {
		setResult(`You Both Chose ${playerChoice}.🥺You Tied 🥺`)
	}
	  
	console.log(getWinner(), playerChoice, compChoice)
	
	const handleClick = (name) => {
		setPlayerChoice(name)
		getCompChoice(name)
		getWinner(result, playerChoice, compChoice, playerScore, compScore)
		
	}

	return (
		<section className='body'>
			<section className='header'>
				<h1 className='rps-h1'>Rock Paper Scissors</h1>
			</section>

			<div className='scoreboard'>
				<span className='badge'>User {playerScore}</span>:<span className='badge'> {compScore} Comp</span>
			</div>
			<span className='result-msg'>{result}</span>

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
					onClick={e => {
						e.preventDefault()
						handleClick('Paper')
					}}>
					<img src={Paper} alt='paper' />
				</div>
				<div
					className='choice'
					onClick={e => {
						e.preventDefault()
						handleClick('Scissors')
					}}>
					<img src={Scissors} alt='scissors' />
				</div>
			</div>
			<p id='action-message'>
				Make your Move <br />
				<br />⬇ ⬇ ⬇ How To Win⬇ ⬇ ⬇{' '}
			</p>
			<footer>
				<img src={Rules} alt='game-rules' />
			</footer>
		</section>
	)
}
export default RPSModal
