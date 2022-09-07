import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Feedback from './components/feedback/Feedback'

const App = () => {
   return (
      < >
         <Header />
         <Nav />
         <About /> 
         <Experience />
         <Portfolio />
         <Feedback />
         <Contact />
         <Footer />

      </>
   )
}

export default App
