import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import ohLogo from '../../assets/images/oh-logo.png';
import atLogo from '../../assets/images/at-logo.png';
import ucLogo from '../../assets/images/uc-logo.png';
import NavBar from '../components/navbar';

const Software = ({ name, handleClick }) => (
  <div className="operation-job-page uk-height-viewport">
    <NavBar handleClick={handleClick} />
    <div className="uk-container uk-container-center oj-container oj-container">
      <div className="uk-vertical-align uk-text-center">
        <h1 className="oj-title uk-vertical-align-middle uk-margin-top">{name}</h1>
      </div>
      <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <h2>About this Website</h2>
          <p className="uk-text-large">
            This website was built with react, npm and uikit. But I have experience with Java, Python and a few others.
            Code for this website is <a href="https://github.com/slimjim181/operation-job">here</a>
          </p>
          <h2>Experience</h2>
          <div className="uk-grid" data-uk-grid-margin>
            <div className="uk-width-medium-1-2">
              <div className="uk-grid">
                <div>
                  <img width="90px" height="90px" src={ohLogo} alt="Orion Health Logo" />
                </div>
                <div className="oj-full-flex">
                  <h3 className="oj-no-margin">Orion Health</h3>
                  <p className="uk-text-bold oj-no-margin">Software Engineer</p>
                  <p className="oj-no-margin">Jan 2015-Apr 2017 - 2 yrs 4 mos</p>
                </div>
              </div>
            </div>
            <div className="uk-width-medium-1-2">
              <div className="uk-grid">
                <div>
                  <img width="85px" height="51px" src={atLogo} alt="Allied Telesis Logo" />
                </div>
                <div className="oj-full-flex">
                  <h3 className="oj-no-margin">Allied Telesis</h3>
                  <p className="uk-text-bold oj-no-margin">Summer Internship</p>
                  <p className="oj-no-margin">Nov 2013-Feb 2015 - 4 mos</p>
                </div>
              </div>
            </div>
          </div>
          <h2>Education</h2>
          <div className="uk-width-medium-1-2">
            <div className="uk-grid">
              <div>
                <img width="80px" src={ucLogo} alt="University of Canterbury Logo" />
              </div>
              <div className="oj-full-flex">
                <h3 className="oj-no-margin">University of Canterbury</h3>
                <p className="uk-text-bold oj-no-margin">Bachelor of Science in Computer Science</p>
                <p className="oj-no-margin">2012-2014</p>
              </div>
            </div>
          </div>
          <h2>My time at Orion Health</h2>
          <h2>Reference</h2>
        </div>
      </div>
    </div>
  </div>
);

Software.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Software;
