import './App.css'
import { useEffect } from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactGA from 'react-ga'
import Navbar from './components/navbar/navbar'
import HomeScreen from './screens/home/home';
import ScrollToTop from '../scrollToTop';
import Pricing from './screens/pricing/pricing';
import AboutUs from './screens/aboutUs/aboutUs';
import ContactUs from './screens/contactUs/contactUs';
import Footer from './components/footer/footer';

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='App'>
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<HomeScreen/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
