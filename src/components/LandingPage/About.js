import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import benrussell from '../images/ben-russell-portrait.jpg';
import '../scss/components/_about.scss';

export default function About() {
  return(
    <div id='about'>
      <Container>
        <h3 className='about-title'>About Me</h3>
        <div className='about-content'>
          <Image className='about-img' src={benrussell} alt='Portrait of Benjamin Russell' />
          <p className='about-text'>I am a 34 year old living in Portland, Oregon and web development was my hobby and part-time job while I was running a full-time construction company.
            I have also worked in the printing industry before. I moved to full-time web development after Covid-19 started in March 2020.
            I still do some custom carpentry design as a hobby and am creating small tables and desks for my family and friends in my free time.
            While working on design projects I learned that I enjoy working on the front end of web sites primarily. React was some of the most fun I have had.
            That being said I did learn about back end technologies and I also enjoy making a site function as smoothly and realiably as possible for all users.
            I am now searching for projects and jobs where I can utilize my strengths in front end development and sharpen my skills when it comes to back end, for example authentication and database management.
            This career path is facinating because there is so much you can do and so much you can learn every day.
          </p>
        </div>
      </Container>
    </div>
  );
}