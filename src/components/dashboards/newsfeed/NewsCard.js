import React, { useState } from 'react'
// ### REACTSTRAP ###
import { Card, CardImg, CardTitle, CardBody, Button, CardText, CardFooter } from 'reactstrap'
import StarRating from './StarRating'
import UpdateProject from '../../forms/UpdateProject'





   


const NewsCard = ({ imgurl, title, subject, description }) => {
	const [editFlip, setEditFlip] = useState(false)

	/* const showFront = () => ({
    setEditFlip: false
  }) */

	const handleEditClick = (flipper) => {
		return (
		setEditFlip(true)
		)
	}

	return (
		<section>
			{editFlip === true ? (
				<Card className='projectsCard' id='flipper'>
					<UpdateProject editFlip={editFlip} setEditFlip={setEditFlip} />
				</Card>
			) : (
				<Card className='projectsCard'>
					<div className='news-card-img-div'>
						<CardImg src={imgurl} alt='information on subject' style={{ height: '100%', width: '100%;' }} />
					</div>
					<CardBody>
						<CardTitle>{title}</CardTitle>
						<CardText>{subject}</CardText>
						<CardText>{description}</CardText>
						<StarRating totalStars={5} />
					</CardBody>

					<CardFooter>
						<Button
							outline
							className='edit-button'
							color='warning'
							style={{ color: '#fff' }}
							onClick={handleEditClick}>
							Edit
						</Button>
						<Button outline className='delete-button' color='danger'>
							Delete
						</Button>
					</CardFooter>
				</Card>
			)}
		</section>
	)
}

export default NewsCard
