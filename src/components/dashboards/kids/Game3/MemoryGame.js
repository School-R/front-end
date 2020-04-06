import React from 'react'
import Board from './cardgame/Board'
import './gamestyles/memory.css'
import LandingNav from '../../../navs/LandingNav'
import backImg from './gamestyles/cardimages/backImg.png'
import duck from './gamestyles/cardimages/duck.png'
import pig from './gamestyles/cardimages/pig.png'
import horse from './gamestyles/cardimages/horse.png'
import cat from './gamestyles/cardimages/cat.png'
import dog from './gamestyles/cardimages/dog.png'
import dolphin from './gamestyles/cardimages/dolphin.png'
import fish from './gamestyles/cardimages/fish.png'
import roo from './gamestyles/cardimages/roo.png'
import lion from './gamestyles/cardimages/lion.png'
import frog from './gamestyles/cardimages/frog.png'

const MemoryGame = () => {
  
  const buildCards= () =>{
	let id = 0
	const images = {duck, pig, horse, cat, dog, dolphin, fish, roo, lion, frog }
	const cards = Object.keys(images).reduce((result, item) => {
		const getCard = () => ({
			id: id++,
			type: item,
			backImg,
			frontImg: images[item],
			flipped: false,
		})
		return [...result, getCard(), getCard()]
	}, [])
	return shuffle(cards)
}

const shuffle=(arr) =>{
	let len = arr.length
	for (let i = 0; i < len; i++) {
		let randomIdx = Math.floor(Math.random() * len)
		let copyCurrent = { ...arr[i] }
		let copyRandom = { ...arr[randomIdx] }
		arr[i] = copyRandom
		arr[randomIdx] = copyCurrent
	}
	return arr
}
	const cards = buildCards()
  return (
    <section>
      <LandingNav/>
		<div style={{
  textAlign: 'center',
  padding: '50px'
}}>
			<Board cards={cards} />
      </div>
    </section>
	)
}

export default MemoryGame


