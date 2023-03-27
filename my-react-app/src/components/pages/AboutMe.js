import React from 'react';
import '../pages/stylePages/AboutMe.css';


const person = {
  mane: 'About Me',
  theme: {
    backgroundColor: '',
    color: 'black'
  
  }
};



export default function AboutMe() {
  return (
    <div style={person.theme} className='about' > 
   
      <h1>{person.name} About Me</h1>
     

      
     <img src="/images/IMG_1267.jpeg" class="rounded-circle"alt='wilfredo recinos'width={200}height={200}></img>
      <p>
      I am  a full stack web developer, currently  student 
      from UCB of California Bootcamp, with newly developd
      skills in  HTML, JavaScript, CSS, React, Web API,
       NodeJS, OOP, Express, SQL, ORM, MVC, CS, NOSQL, PWA
       React and MERN. I am  a problem solver passionate About
       computer's programs.
      </p>
   
    </div>
  );
}
