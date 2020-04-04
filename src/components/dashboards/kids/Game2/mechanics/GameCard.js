import React, { useState } from 'react'
import { Card, CardTitle, CardSubtitle, Button, Modal } from "reactstrap";

const GameCard = ({ word, def, string }) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Card className="game-card">
      <h1 className="chinese-char">{string}</h1>
      <CardTitle className="english-word2">{word}</CardTitle>
      <Button outline color="warning" onClick={toggle} >
        Meaning
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <Card className="game-card">
          <CardSubtitle className="english-word1">{def}</CardSubtitle>
          <Button outline color="danger" onClick={toggle}>
            X
          </Button>
        </Card>
      </Modal>
    </Card>
  );
}

export default GameCard