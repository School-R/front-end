// App
import React from 'react'
import List from './mechanics/List'
import './mechanics/flashcard.css'

const FlashCardGame = () => {

  return (
    <section>
      <h5>**The NUMBERS are Equal to the number of Strokes it takes to write the Chinese Character**</h5>
      <List />
    </section>
  )
}

export default FlashCardGame