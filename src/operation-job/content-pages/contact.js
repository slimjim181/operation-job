import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import NavBar from '../components/navbar';
import photo from '../../assets/images/joe.jpg';
import teamEa from '../../assets/images/team-ea.jpg';
import studentLife from '../../assets/images/student-life.jpg';
import dabNation from '../../assets/images/dab-nation.jpg';
// import joeDesk from '../../assets/images/joe-desk.jpg';

const Contact = ({ name, handleClick }) => (
  <div className="operation-job-page uk-height-viewport">
    <NavBar handleClick={handleClick} />
    <div className="uk-container uk-container-center oj-container uk-margin-large-bottom">
      <div className="uk-vertical-align uk-text-center">
        <h1 className="oj-title uk-vertical-align-middle uk-margin-top">{name}</h1>
      </div>
      <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <div className="uk-grid">
            <div className="uk-width-medium-1-2 uk-row-first">
              <img width="500px" height="auto" src={photo} alt="Joseph Sutton" />
            </div>
            <div className="uk-width-medium-1-2 uk-margin-top">
              <div className="uk-grid">
                <div className="uk-width-1-6">
                  <i className="uk-icon-user uk-icon-medium" />
                </div>
                <div className="uk-width-5-6">
                  <h2>Joseph Coman Sutton</h2>
                </div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6">
                  <i className="uk-icon-map-marker uk-icon-medium" />
                </div>
                <div className="uk-width-5-6">
                  <h2 className="oj-details-h2">6 Eyrewell Road</h2>
                  <h2 className="oj-details-h2">Pegasus 7612</h2>
                  <p>I will be moving to Woolston late June</p>
                </div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6">
                  <i className="uk-icon-envelope uk-icon-medium" />
                </div>
                <div className="uk-width-5-6">
                  <h2 className="uk-text-truncate"><a href="mailto:josephsutton@hotmail.co.nz">josephsutton@hotmail.co.nz</a></h2>
                </div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6">
                  <i className="uk-icon-mobile uk-icon-large" />
                </div>
                <div className="uk-width-5-6">
                  <h2><a href="tel:+64272157015">027 215 7015</a></h2>
                </div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6">
                  <i className="uk-icon-phone uk-icon-medium" />
                </div>
                <div className="uk-width-5-6">
                  <h2><a href="tel:+6439200386">03 920 0386</a></h2>
                </div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6">
                  <i className="uk-icon-linkedin-square uk-icon-medium" />
                </div>
                <div className="uk-width-5-6">
                  <h2><a href="https://www.linkedin.com/in/joseph-sutton-148b16117/">Joseph Sutton</a></h2>
                </div>
              </div>
            </div>
          </div>
          <hr className="uk-grid-divider" />
          <div className="uk-grid">
            <div className="uk-width-medium-1-2 uk-margin-bottom">
              <img src={teamEa} width="600px" alt="EA Team" />
            </div>
            <div className="uk-width-medium-1-2">
              <img src={studentLife} width="600px" alt="Student Life water jump" />
            </div>
          </div>
          <div className="uk-grid">
            <div className="uk-width-medium-1-2">
              <img src={dabNation} width="600px" alt="Dab Nation" />
            </div>
            <div className="uk-width-medium-1-2">
              {/*<img src={joeDesk} width="600px" alt="Joe's Desk" />*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};


export default Contact;
