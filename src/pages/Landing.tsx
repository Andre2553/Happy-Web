import React from 'react';
import {FiArrowRight} from 'react-icons/fi'

import '../styles/pages/landing.css'
import Logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';
// import { Container } from './styles';

function Landing(){
  return (
    <div id="page-landing">
    <div className="content-wrapper">
      <img src={Logo} alt=""/>
      <main>
        <h1>Bring happiness to the World</h1>
        <p>Go to opharnates and change the day of many kids.</p>
      </main>
      <div className="location">
        <strong>Sydney</strong>
        <span>NSW</span>
      </div>
      <Link className="enter-app" to="/app"><FiArrowRight size={26} color="rgba(0,0,0,0.6)"/></Link>
    </div>
  </div>
  );
}

export default Landing;