import React from 'react'
import LandingNav from '../navs/LandingNav'
import Cat from '../../images/Catherine.jpg'
import Kara from '../../images/Kara.jpg'
import {
  UncontrolledCarousel
} from 'reactstrap';

const team = [
  {
    src: `${Cat}`,
    altText: "Slide 1",
    caption: "Sliede 1",
    header: "Slide 1 Header",
    key: "1"
  },
  {
    src: `${Kara}`,
    altText: "",
    caption: "",
    header: "",
    key: "2"
  },
  {
    src: "",
    altText: "",
    caption: "",
    header: "",
    key: "3"
  },
  {
    src: "",
    altText: "",
    caption: "",
    header: "",
    key: "4"
  }
];
const AboutPage = () => {
	return (
    <section>
      <LandingNav />

      <div>
        <h2>About US</h2>
        <p>loreDuo at consetetur lorem erat eos, tempor no voluptua elitr sit gubergren stet ipsum dolor consetetur. Labore ipsum ea est.m</p>


      </div>
      <div className='about_carousel'>
        <UncontrolledCarousel items={team} />
      </div>
    </section>
  );
}

export default AboutPage
