import React from 'react'
import '../styles/NavTabs.css';


const styles = {
  NavTabsStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
     

        // <nav style={styles.NavTabsStyle} className="NavTabs">
     <ul className="nav nav-tabs "  style={styles.NavTabsStyle}> 
     
    
      <h3> Wilfredo Recinos Recinos </h3>

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
    
   
     </ul> 
    // </nav>
  );
}

export default NavTabs;
