import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/registration-success.css';

function RegistrationSuccess() {
  return (
    <div id="page-registration-success">
      <div className="success-content-wrapper">
        <main>
          <h1>Done!</h1>

          <p> The registration was concluded and it was sent to the Admin to be approved
            Just wait :)</p>

          <Link to="/app" className="success-enter-app">
            Go back to the map
          </Link>
        </main>
      </div>
    </div>
  );
}

export default RegistrationSuccess;