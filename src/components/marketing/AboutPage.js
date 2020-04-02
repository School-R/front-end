import React from 'react'
import LandingNav from '../navs/LandingNav'
import Cat from '../../images/Catherine.jpg'
import Kara from '../../images/Kara.jpg'
import Jesus from '../../images/Jesus.jpg'
import Conary from '../../images/Conary.jpg'
import {
  UncontrolledCarousel
} from 'reactstrap';

const team = [
  {
    src: `${Cat}`,
    altText: "Catherine",
    caption: "YAAAY!",
    header: "Catherine Kim",
    key: "1"
  },
  {
    src: `${Kara}`,
    altText: "Kara",
    caption: "Success consists of going from failure to failure without loss of enthusiasm. ~~Sir Winston Churchill",
    header: "Kara",
    key: "2"
  },
  {
    src: `${Jesus}`,
    altText: "Jesus",
    caption: "More Errors Again!",
    header: "Jesus",
    key: "3"
  },
  {
    src: `${Conary}`,
    altText: "Conary",
    caption: "Now we are cooking with grease",
    header: "Conary",
    key: "4"
  }
];
const AboutPage = () => {
	return (
    <section>
      <LandingNav />

      <div>
        <h2>About US</h2>
        <p className='about-para'>Every team member contributed to the project with young children in mind but the App has potential to grow into something from small children to Technical Schools and College Students would love to use. Every member contributed to all elements of both the Front-End and BackEnd</p>
      </div>
      <div className='about_carousel'>
        <UncontrolledCarousel items={team} className='carousel-text' />
      </div>
    </section>
  );
}

export default AboutPage
