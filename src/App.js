import React from 'react';
import './App.css';
import Routes from './utils/Routes'
import LandingPage from './components/marketing/LandingPage';

const App = () => {
  return (
    <section className="App">
      
      <LandingPage/>
      

      <div>
        <Routes/>
      </div>
    </section>
  );
}

export default App;
