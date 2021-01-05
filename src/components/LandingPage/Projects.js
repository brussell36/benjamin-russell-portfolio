import React from 'react';
import Image from 'react-bootstrap/Image';
import gardenhelper from '../images/garden-helper-homepage-cropped.png';
import damerow from '../images/damerow-ford-homepage-cropped.png';
import mopop from '../images/mopop-modal-unexpanded-cropped.png';
import blazers from '../images/blazers-pregame-page-cropped.png';
import tindog from '../images/tindog-cropped.png';
import theorem from '../images/theorem-employee-page.png';
import '../scss/components/_projects.scss';

export default function Projects() {
  return (
    <>
      <div id='projects'>
          <div className='projects-container'>
            <div className='img-container'>
              <Image src={gardenhelper} alt='Garden Helper Homepage' />
            </div>
            <div className='img-container'>
              <Image src={damerow} alt='Damerow Ford Homepage' />
            </div>
            <div className='img-container'>
              <Image src={mopop} alt='MoPOP Board of Directors page' />
            </div>
            <div className='img-container'>
              <Image src={blazers} alt='Blazers pregame page' />
            </div>
            <div className='img-container'>
              <Image src={tindog} alt='Tindog' />
            </div>
            <div className='img-container'>
              <Image src={theorem} alt='Theorem employee portal' />
            </div>
          </div>
      </div>
    </>
  )
}