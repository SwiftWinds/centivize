import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { useLoggedIn } from '../hooks/auth';

import '../css/land.css';

import logo from '../assets/centivizeit.png';

const Landing = () => {
  const [loggedIn, loadingLoggedIn] = useLoggedIn();

  if (!loadingLoggedIn && loggedIn) {
    return <Redirect to="/app" />;
  }

  return (
    <>
      <header className="text-center land pt-5">
        <div className="container-fluid">
          <img
            src={logo}
            className="img-fluid col-7 pb-2 col-sm-4 col-lg-3 col-xl-2"
          />
          <h2 className="pb-2">
            Incentivizing social good with community crowdsourcing.
          </h2>
          <Link to="/signup">
            <Button variant="primary mb-2" size="lg">
              Get started
            </Button>
          </Link>
          <br />
          <Link to="/signin">
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </Link>
        </div>
      </header>
      <div className="container text-center pt-5 pb-3">
        <h1>Social Good</h1>
        <p className="lead">
          Our centralized upvote-based system rewards volunteers for helping
          fellow community members.
        </p>
        <h1>Smart Healthcare</h1>
        <p className="lead">
          Our fully automated diagnosis feature, compatible with Alexa, allows
          users to recieve treatment plans without leaving their homes.
        </p>
      </div>
    </>
  );
};

export default Landing;
