import React, {useState} from 'react';
import '../Game1/rock_paper_scissors/images'

function rpsModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <Modal show={show} onHide={handleClose} onClick={handleShow}>
            <Modal.Header closeButton>
                <Modal.Title>Rules</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <image src="front-end/src/components/dashboards/kids/Game1/rock_paper_scissors/images/image-rules.svg"/>

            </Modal.Body>
        
        </Modal>
    )
}

export default rpsModal;