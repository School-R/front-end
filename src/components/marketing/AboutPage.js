import React from 'react'
import LandingNav from '../navs/LandingNav'
import Footer from '../navs/Footer'
import Cat from '../../images/Catherine.jpg'
import Kara from '../../images/Kara.jpg'
import Jesus from '../../images/Jesus.jpg'
import {
  UncontrolledCarousel
} from 'reactstrap';

const team = [
  {
    src: `${Cat}`,
    altText: "",
    caption: "YAAAY!",
    header: "",
    key: "1"
  },
  {
    src: `${Kara}`,
    altText: "",
    caption: "Success consists of going from failure to failure without loss of enthusiasm. ~~Sir Winston Churchill",
    header: "",
    key: "2"
  },
  {
    src: `${Jesus}`,
    altText: "",
    caption: "More Errors Again!",
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
    <Footer/>
    </section>
  );
}

export default AboutPage
