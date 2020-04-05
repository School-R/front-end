import React from 'react';
import Paper from './rock_paper_scissors/images/icon-paper.svg'
import Rock from './rock_paper_scissors/images/icon-rock.svg'
import Scissors from './rock_paper_scissors/images/icon-scissors.svg'

const RPSModal = () => {

	let userScore = 0
	let compScore = 0
	let userScore_span = document.querySelector('.user-score')
	let compScore_span = document.querySelector('.computer-score')
	const result_div = document.querySelector('.result')
	const rock_div = document.getElementById('rock')
	const paper_div = document.getElementById('paper')
	const scissors_div = document.getElementById('scissors')
	
	
	function getCompChoice() {
		const choices = ['rock', 'paper', 'scissors']
		const randomNum = Math.floor(Math.random() * 3)
		return choices[randomNum]
	}
	function win(userChoice, computerChoice) {
		userScore++
		userScore_span.textContent = userScore;
		compScore_span.textContent = compScore;
		result_div.textContent = `You chose ${userChoice} beats Computer chose ${computerChoice}.  🎉🎉🎉You Win 🎉🎉🎉`
	}
	function lose(userChoice, computerChoice) {
		compScore++
		userScore_span.textContent = userScore
		compScore_span.textContent = compScore
		result_div.textContent = `You chose${userChoice} loses to Computer choice of ${computerChoice}.  💩You Lost 💩`
	}
	function draw(userChoice, computerChoice) {
		result_div.textContent = `You chose${userChoice} and the computer chose ${computerChoice}.  🥺You Tied 🥺`
	}
	
	function game(userChoice) {
		const computerChoice = getCompChoice()
		switch (userChoice + computerChoice) {
			case 'rockscissors':
			case 'paper, rock':
			case 'scissors, paper':
				win(userChoice, computerChoice)
				break
			case 'rock paper':
			case 'paper scissors':
			case 'scissors rock':
				lose(userChoice, computerChoice)
				break
			case 'rock rock':
			case 'paper paper':
			case 'scissors scissors':
				draw(userChoice, computerChoice)
				break
			default: return
		}
	}

const main = () =>{
rock_div.addEventListener('click', function (){
		game('rock')
	})
paper_div.addEventListener('click', function() {
		game('paper')
	})
scissors_div.addEventListener('click', function() {
		game('scissors')
	})
}
main()




	return (
		<section className='body'>
			<header>
				<h1 className='rps-h1'>Rock Paper Scissors</h1>
			</header>

			<div className='scoreboard'>
				<div id='user-label' className='badge'>
					User
				</div>
				<div id='computer-label' className='badge'>
					Comp
				</div>
				<span className='user-score'>0</span>:<span className='computer-score'>0</span>
			</div>

			<div>
				<p className='result-msg'>Paper covers Rock You Win!!</p>
			</div>

			<div className='choices'>
				<div
					id='rock'
					onClick={rock_div.addEventListener('click', function () {
						game('rock')
					})}
					className='choice'>
					<img src={Rock} alt='rock' />
				</div>
				<div
					id='paper'
					onClick={paper_div.addEventListener('click', function () {
						game('paper')
					})}
					className='choice'>
					<img src={Paper} alt='paper' />
				</div>
				<div
					id='scissors'
					onClick={scissors_div.addEventListener('click', function () {
						game('scissors')
					})}
					className='choice'>
					<img src={Scissors} alt='scissors' />
				</div>
			</div>

			<p id='action-message'>Make your Move</p>
		</section>
	)
}

export default RPSModal;