import React from 'react'
import '../styles/NavTabs.css';


const styles = {
  NavTabsStyle: {
    background: '#64a991',
    // padding: '15px',
    // justifyContent: 'flex-end',
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
     

      
     <nav className="nav nav-tabs "  style={styles.NavTabsStyle}> 
     
    
      <h1> Wilfredo Recinos Recinos </h1>

      <li className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}
  
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
         
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
         
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
         
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    
   
     </nav> 
   
  );
}

export default NavTabs;
