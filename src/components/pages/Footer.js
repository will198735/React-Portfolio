import React from 'react';
import './stylePages/Footer.css';

import { FaGithub, FaLinkedinIn, FaJs} from "react-icons/fa";




const Footer = () => {
  return (
    <footer  className=" footer w-100 mt-auto text-dark p-4 ">
      <div className="container text-center mb-5  ">
        <h4> <FaGithub/> <FaLinkedinIn/> <FaJs/></h4>
       
      </div>
    </footer>
  );
};

export default Footer;
