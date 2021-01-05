import React from 'react';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';
import NavBar from './NavBar'

export default function LandingPage() {
  return(
    <>
      <NavBar />
      <Header />
      <Projects />
      <Contact />
    </>
  )
}