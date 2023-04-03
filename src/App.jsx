import React from 'react'
// import Header from './components/header/Header'
import Banner from './components/banner/Banner'
// import Nav from './components/nav/Nav'
import About from './components/about/About'
import Project from './components/project/Project'
import Pages from './components/pages/Pages'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'


const App = () => {
  return (
    <>
    <Banner />
    <Services />
    <About />
    <Project />
    <Testimonials />
    <Pages />
    <Contact />
    <Footer />


    </>
  )
}

export default App