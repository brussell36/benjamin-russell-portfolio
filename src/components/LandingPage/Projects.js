import React from 'react';
import Image from 'react-bootstrap/Image';
import gardenhelper from '../images/garden-helper-homepage.png';
import damerow from '../images/damerow-ford-homepage.png';
import mopop from '../images/mopop-modal-unexpanded.png';

export default function Projects() {
  return (
    <>
      <div id='projects'>
          <div className='projects-container'>
            <Image src={gardenhelper} alt='Garden Helper Homepage' />
            <Image src={damerow} alt='Damerow Ford Homepage' />
            <Image src={mopop} alt='MoPOP Board of Directors page' />
          </div>
      </div>
    </>
  )
}