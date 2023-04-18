import React from 'react';
import './stylePages/Portfolio.css';
import imageOne from '../../images/project3.png';
import imageFive from '../../images/project2.png';
import imageSix from '../../images/project1.png';





export default function Portfolio() {
  return (
   
    <div className='portfolio'>
      <h1>Porfolio</h1>
   
      <img src={imageOne} alt=" " width={400}height={400}></img>
      <img src={imageFive} alt=" " width={400}height={400}></img>
      <img src={imageSix} alt=" " width={400}height={400}></img>



      </div>
      
   
  );
}
