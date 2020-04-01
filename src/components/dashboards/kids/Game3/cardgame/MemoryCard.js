import React from 'react'


const MemoryCard = props => {
	const { frontImg, backImg, flipped, onClick } = props
	const img = flipped ? frontImg : backImg
	return (
		<div className='Card' onClick={onClick}>
			<img src={img} alt='' />
		</div>
	)
}

export default MemoryCard
