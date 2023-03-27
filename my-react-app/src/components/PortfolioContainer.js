import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

 
  const renderPage = () => {
   
    if (currentPage === 'AboutMe') {
      return <AboutMe/>;
    }
   
    if (currentPage === 'Portfolio') {
      return <Portfolio/>;
    }
    
    if (currentPage === 'Contact') {

      return <Contact/>;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  
    return <Footer/>;
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section className='bg-primary '>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </section>
  );
}
