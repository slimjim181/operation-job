import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import ohAllHands1 from '../../assets/images/oh-all-hands1.jpg';
import ohAllHands2 from '../../assets/images/oh-all-hands2.jpg';
import ohAllHandsBatman1 from '../../assets/images/oh-all-hands-batman1.jpg';
import ohAllHandsBatman2 from '../../assets/images/oh-all-hands-batman2.jpg';
import NavBar from '../components/navbar';

const Speaker = ({ name, handleClick }) => (
  <div className="operation-job-page uk-height-viewport">
    <NavBar handleClick={handleClick} />
    <div className="uk-container uk-container-center oj-container uk-margin-large-bottom">
      <div className="uk-vertical-align uk-text-center">
        <h1 className="oj-title uk-vertical-align-middle uk-margin-top">{name}</h1>
      </div>
      <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <h2>Orion Health R&D All Hands</h2>
          <p>On the Junior Development Board I had the opportunity to organise and MC the quarterly R&D All hands meeting, twice!</p>
          <p>This involve a huge amount of planning, a batman costume and epic videos.</p>
          <div className="uk-grid uk-margin-bottom">
            <div className="uk-width-medium-1-2 uk-margin-bottom">
              <img src={ohAllHands1} width="600px" />
            </div>
            <div className="uk-width-medium-1-2">
              <img src={ohAllHandsBatman1} width="600px" />
            </div>
          </div>
          <div className="uk-grid uk-margin-bottom">
            <div className="uk-width-medium-1-2 uk-margin-bottom">
              <img src={ohAllHands2} width="600px" />
            </div>
            <div className="uk-width-medium-1-2">
              <img src={ohAllHandsBatman2} width="600px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Speaker.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Speaker;
