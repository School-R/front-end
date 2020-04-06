// App
import React from 'react'
import List from './mechanics/List'
import LandingNav from '../../../navs/LandingNav'
import './mechanics/flashcard.css'

const FlashCardGame = () => {

  return (
    <section>
      <LandingNav/>
      <h5>**The NUMBERS are Equal to the number of Strokes it takes to write the Chinese Character**</h5>
      <List />
    </section>
  )
}

export default FlashCardGame