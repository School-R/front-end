import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import LandingNav from '../navs/LandingNav'
import lion from '../../images/lion.bmp'
import lion2 from '../../images/lion2.jpg'
import abc from '../../images/abc.png'
import gradcap from '../../images/gradcap.png'
import history from '../../images/history.png'
import numbers from '../../images/numbers.png'
import periodictable from '../../images/periodictable.png'
import school from '../../images/school.png'
import Footer from '../navs/Footer'

const LandingPage = () => {
	return (
		<section>
			<LandingNav />
			<section className='landing-container'>
				<span className='landing-header'>
					<img src={lion2} alt='lion-right-facing' className='img-lion' />
					<h1>School'R</h1>
					<img src={lion} alt='lion-left-facing' className='img-lion' />
				</span>
				<section className='landing-container-content'>
					<h3>Welcome to the School'R App</h3>
					<h4>Our Aim:</h4>
					<span>
						<h5>
							To Help Parents and Children Meet Educational Needs from Extra-Curricular Activities{' '}
							<i>(i.e. Science Fair Projects)</i> to Home-School Projects. Here you will find ideas of what works and what
							doesn't from both perspectives of the parents and children
						</h5>
					</span>
					<div>
						<Link to='/login'>
							<Button color='warning'>Login</Button>
						</Link>
						<div>
							<h4>Register Here</h4>
							<Link to='/register'>
								<Button color='warning'>Parents</Button>
							</Link>
							<Link to='/kids_register'>
								<Button color='warning'>Kids</Button>
							</Link>
						</div>
					</div>
				</section>

				<section className='landing-container-cards'>
					<span className='landing-card-row'>
						<span className='landing-container-card'>
							<img src={school} alt='icon' href='https://icons8.com' />
							<h3>School Activities</h3>
							<p>
								For those Extra-Curricular Activities like Clubs and Science Fairs. Here you will find what projects kids before
								you have enjoyed. Instructions, Ideas, Plans, Friends. See what other kids your age are doing. See what projects
								you can do on a budget for Parents. Shared by Parents and Kids like you.
							</p>
						</span>

						<span className='landing-container-card'>
							<img src={gradcap} alt='icon' href='https://icons8.com' />
							<h3>Success in School</h3>
							<p>
								For those Extra-Curricular Activities like Clubs and Science Fairs. Here you will find what projects kids before
								you have enjoyed. Instructions, Ideas, Plans, Friends. See what other kids your age are doing. See what projects
								you can do on a budget for Parents. Shared by Parents and Kids like you.
							</p>
						</span>

						<span className='landing-container-card'>
							<img src={history} alt='icon' href='https://icons8.com' />
							<h3>History</h3>
							<p>
								For those Extra-Curricular Activities like Clubs and Science Fairs. Here you will find what projects kids before
								you have enjoyed. Instructions, Ideas, Plans, Friends. See what other kids your age are doing. See what projects
								you can do on a budget for Parents. Shared by Parents and Kids like you.
							</p>
						</span>
					</span>

					<div className='landing-card-row'>
						<div className='landing-container-card'>
							<div className='lc-card-img'>
								<img src={abc} alt='icon' href='https://icons8.com' />
								<h3>Langauges</h3>
								<p>
									For those Extra-Curricular Activities like Clubs and Science Fairs. Here you will find what projects kids
									before you have enjoyed. Instructions, Ideas, Plans, Friends. See what other kids your age are doing. See what
									projects you can do on a budget for Parents. Shared by Parents and Kids like you.
								</p>
							</div>
						</div>
						<div className='landing-container-card'>
							<div className='lc-card-img'>
								<img src={numbers} alt='icon' href='https://icons8.com' />
								<h3>Math</h3>
								<p>
									For those Extra-Curricular Activities like Clubs and Science Fairs. Here you will find what projects kids
									before you have enjoyed. Instructions, Ideas, Plans, Friends. See what other kids your age are doing. See what
									projects you can do on a budget for Parents. Shared by Parents and Kids like you.
								</p>
							</div>
						</div>
						<div className='landing-container-card'>
							<div className='lc-card-img'>
								<img src={periodictable} alt='icon' href='https://icons8.com' />
								<h3>Science</h3>
								<p>
									For those Extra-Curricular Activities like Clubs and Science Fairs. Here you will find what projects kids
									before you have enjoyed. Instructions, Ideas, Plans, Friends. See what other kids your age are doing. See what
									projects you can do on a budget for Parents. Shared by Parents and Kids like you.
								</p>
							</div>
						</div>
					</div>
				</section>
			</section>
			<Footer />
		</section>
	)
}

export default LandingPage
