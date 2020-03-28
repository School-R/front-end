import React from 'react'
import LandingNav from '../navs/LandingNav'
import lion from '../../images/lion.bmp'
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
				<header>
					<span className='landing-img-div'>
						<img src={lion} alt='lion' />
					</span>
					<h1>School'R</h1>
					<span className='landing-img-div'>
						<img src={lion} alt='lion' />
					</span>
				</header>
				<section landing-container-content>
					<h3>Welcome to the School'R App</h3>
					<h4>Our Aim:</h4>
					<span>
						<h5>
							To Help Parents and Children Meet Educational Needs from Extra-Curricular Activities Like Science Projects to
							Home-School Projects. Here you will find ideas of what works and what doesn't from both perspectives
						</h5>
					</span>
				</section>
				<section landing-container-cards>
					<div className='landing-container-card'>
						<div>
							<img src={school} alt='icon' href='https://icons8.com' />
							<h3>School Activities</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt pariatur ratione assumenda a commodi odio quod rem dicta excepturi! Magni fuga odio eligendi ea voluptas pariatur dolorem error exercitationem qui.Dicta deserunt odit reprehenderit. Numquam architecto nisi in consequatur nostrum quod rerum, optio illum quaerat neque repudiandae, quam veniam laudantium error reiciendis! Perspiciatis molestiae reiciendis animi ullam nulla rem reprehenderit.</p>
						</div>
					</div>
					<div className='landing-container-card'>
						<div className='lc-card-img'>
							<img src={gradcap} alt='icon' href='https://icons8.com' />
							<h3>Success in School</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, expedita delectus laborum nostrum facilis totam voluptate in minus similique, unde, quae aperiam porro est reprehenderit sed sit magnam nesciunt ea.Ullam fuga quisquam sit sint. Fugit sed voluptates corporis, accusamus eum unde eveniet voluptas? In sequi recusandae error voluptatum, totam unde quas quisquam corporis voluptates consequatur dolorum esse officia sed!</p>
						</div>
					</div>
					<div className='landing-container-card'>
						<div className='lc-card-img'>
							<img src={history} alt='icon' href='https://icons8.com' />
							<h3>History</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde perferendis sit illum praesentium deserunt impedit atque dolor vero, deleniti veniam omnis officiis repudiandae hic optio nisi tempore architecto possimus.Porro incidunt sit, quaerat deleniti officiis amet libero praesentium explicabo ea delectus ipsam facilis inventore. Necessitatibus corporis eligendi voluptatum obcaecati, sed mollitia reprehenderit fugiat est, rem, ab dolor vitae totam?</p>
						</div>
					</div>
					<div className='landing-container-card'>
						<div className='lc-card-img'>
							<img src={abc} alt='icon' href='https://icons8.com' />
							<h3>Langauges</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis recusandae facilis quisquam repellendus quaerat, perspiciatis quam quis sequi tempora, iusto id beatae exercitationem necessitatibus laboriosam eos error voluptates odit.Eaque laboriosam molestiae ut ea consequatur deserunt natus fuga distinctio totam laborum tenetur saepe fugit ipsa delectus quas officiis est, qui cum. Velit pariatur amet facere quod harum blanditiis magnam?</p>
						</div>
					</div>
					<div className='landing-container-card'>
						<div className='lc-card-img'>
							<img src={numbers} alt='icon' href='https://icons8.com' />
							<h3>Math</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit rerum fugit iste saepe iusto libero obcaecati! Quod a enim fugiat ullam illo. Excepturi quod, illum fugiat perspiciatis placeat deleniti quos?Architecto ipsa consequatur officiis reprehenderit debitis sunt, cupiditate ratione ex unde illum placeat iste perspiciatis quaerat. Obcaecati accusamus animi enim eos, sit hic, odio sint quaerat repudiandae id, dignissimos alias.</p>
						</div>
					</div>
					<div className='landing-container-card'>
						<div className='lc-card-img'>
							<img src={periodictable} alt='icon' href='https://icons8.com' />
							<h3>Science</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laboriosam optio? Vitae eum, earum eligendi delectus natus officia, dolorem iste quidem quas ipsam eius corporis ex, ratione pariatur in et.Enim, laudantium dignissimos? Fugit alias illo corporis, facere voluptatum delectus eveniet velit, doloribus temporibus adipisci tempora modi excepturi amet maiores non obcaecati ab, debitis ducimus aliquid tempore ratione dolore iusto?</p>
						</div>
					</div>
				</section>
      </section>
      <Footer/>
		</section>
	)
}

export default LandingPage
