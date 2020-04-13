import React from 'react'
import './App.css'
import Routes from './utils/Routes'
import Footer from './components/navs/Footer'

const App = () => {
	return (
		<section className='App'>
			<div>
			<Routes />
			</div>
			<Footer/>
		</section>
	)
}
export default App
