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

	const handleEditClick = () => {
		setEditFlip(true)
	}

	return (
		<section>
			{editFlip === true ? (
				<Card className='projectsCard'>
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
						<Button color='secondary' onClick={handleEditClick}>
							Edit
						</Button>
						<Button color='danger'>Delete</Button>
					</CardFooter>
				</Card>
			)}
		</section>
	)
}

export default NewsCard
