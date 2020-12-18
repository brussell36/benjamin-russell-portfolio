import React from 'react';
import NavBar from './NavBar'

export default function Header() {
  return(
    <>
      <div id='header'>
        <NavBar />
        <h1 className='header-title'>Benjamin Russell</h1>
        <h3 className='header-description'>A Full Stack Developer</h3>
      </div>
    </>
  )
}