import React, {useState} from 'react';
import Rules from './rock_paper_scissors/images/image-rules.svg'
import {Modal} from 'reactstrap'

function RPSModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <Modal show={show} onHide={handleClose} onClick={handleShow}>
            <Modal.Header closeButton>
                <Modal.Title>Rules</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <image src={Rules}/>

            </Modal.Body>
        
        </Modal>
    )
}

export default RPSModal;