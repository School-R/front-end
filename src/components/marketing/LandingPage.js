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
						<Link to='/register'>
							<Button color='warning'>Register</Button>
						</Link>
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
								Ideas you can use for extra-credit or to study further outside of class can be found through the feed. Pick a
								few talk to your teachers if you go to a school. You can even use our sister website.
								<span>
									<a href='https://goldentutors.netlify.com/'>Golden Tutors</a> or <a href='https://outschool.com'>OutSchool</a>{' '}
									Providing tutors and classes both helping to reach your student goals.
								</span>
							</p>
						</span>

						<span className='landing-container-card'>
							<img src={history} alt='icon' href='https://icons8.com' />
							<h3>History</h3>
							<p>
								Find History Subjects, Whether you are a fan of Social Studies, U.S. Government, and World History. You are sure
								to find projects that help you dive deeper into the world that brought us to where we are today.
							</p>
						</span>
					</span>

					<div className='landing-card-row'>
						<div className='landing-container-card'>
							<div className='lc-card-img'>
								<img src={abc} alt='icon' href='https://icons8.com' />
								<h3>Langauges</h3>
								<p>
									English, Spanish, Italian, French. We encompass and encourage students of all fluency to find more in depth
									things to help them have fun learning to be even more fluent in both writing and reading languages.
								</p>
							</div>
						</div>
						<div className='landing-container-card'>
							<div className='lc-card-img'>
								<img src={numbers} alt='icon' href='https://icons8.com' />
								<h3>Math</h3>
								<p>
									Math is an all encompassing subject, from simple arithmetic to advanced calculus feel free to share methods to
									help others learn. Find methods to help you gain a deeper understanding of all things number-related. Parents
									not familiar with the new Math styles may even find tips to help them help their kids.
								</p>
							</div>
						</div>
						<div className='landing-container-card'>
							<div className='lc-card-img'>
								<img src={periodictable} alt='icon' href='https://icons8.com' />
								<h3>Science</h3>
								<p>
									Although computers are extracted out on their own because their are so many things to study when it comes to
									the computer. This category is for you basic sciences from geology to biology all things science can be found
									here. Experiments to Science Fair Ideas Abound in this Category.
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
