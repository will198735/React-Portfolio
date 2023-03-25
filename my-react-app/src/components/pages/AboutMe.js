import React from 'react';


const person = {
  mane: 'About Me',
  theme: {
    backgroundColor: 'lightblue',
    color: 'black'
  
  }
};



export default function AboutMe() {
  return (
    <div style={person.theme} > 
   
      <h1>{person.name} About Me</h1>
     

      <img
      src="/images/IMG_1267.jpeg"alt='wilfredo recinos'
      
      width={200}
      height={200}
   
     ></img>
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
