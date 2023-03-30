import React from 'react';
import './stylePages/Portfolio.css';
import imageOne from '../../images/download2.png';
import imageTwo from '../../images/download.png';
import imageTree from '../../images/download3.jpg';
import imageFour from '../../images/images4.png';
import imageFive from '../../images/Screen Shot 2023-02-21 at 4.53.04 PM.png';
import imageSix from '../../images/Screenshot (128).png';





export default function Portfolio() {
  return (
   
    <div className='portfolio'>
      <h1>Porfolio</h1>
   
      <img src={imageOne} alt=" " width={400}height={400}></img>
    <img src={imageTwo} alt=" " width={400}height={400}></img>
      <img src={imageTree} alt=" " width={400}height={400}></img>
      <img src={imageFour} alt=" " width={400}height={400}></img>
      <img src={imageFive} alt=" " width={400}height={400}></img>
      <img src={imageSix} alt=" " width={400}height={400}></img>



      </div>
      
   
  );
}
