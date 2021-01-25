import React from 'react';
import Container from 'react-bootstrap/Container';
import '../scss/components/_about.scss';

export default function About() {
  return(
    <div id='about'>
      <Container>
        <h3 className='about-title'>About Me</h3>
      </Container>
    </div>
  );
}