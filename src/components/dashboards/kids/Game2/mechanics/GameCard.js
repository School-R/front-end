import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Button, Modal } from "reactstrap";

const GameCard = ({ word, def, string }) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
			<Card className='game-card'>
				<h1 >{string}</h1>
				<CardBody className='english-word2'>
					<h3>{word}</h3>
				</CardBody>
				<CardFooter>
					<Button
						outline
						className='meaning-button'
						color='warning'
						style={{ color: '#fff', marginTop: '3%' }}
						onClick={toggle}>
						Meaning
					</Button>
				</CardFooter>
				<Modal isOpen={modal} toggle={toggle}>
					<Card className='game-card' style={{ width: '95%', margin: '5% auto' }}>
						<CardBody className='modal-body'>
							<Button
								outline
								className='cancel-button'
								color='danger'
								onClick={toggle}
								style={{ height: '40px', margin: '0 5%' }}>
								X
							</Button>
							<h1 className='english-word1' style={{ width: '70%' }}>
								{def}
							</h1>
						</CardBody>
					</Card>
				</Modal>
			</Card>
		)
}

export default GameCard