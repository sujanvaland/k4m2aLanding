import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
import logo from '/Home/logo.png';

const Footer = () => {
  const location = useLocation(); // Get the current location
  const isResearchPage = location.pathname === '/research'; // Check if the current route is /research

  console.log({location, pathname:location.pathname === '/manifesto' })

  return (
    <>
    Footer</>
  );
};

export default Footer;

