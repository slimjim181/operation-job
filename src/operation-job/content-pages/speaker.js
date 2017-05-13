import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import speakingBatman from '../../assets/images/speaking-batman.jpg';
import speakingCec from '../../assets/images/speaking-cec.jpg';
import ohAllHands3 from '../../assets/images/oh-all-hands3.jpg';
import ohAllHands2 from '../../assets/images/oh-all-hands2.jpg';
import ohAllHandsBatman1 from '../../assets/images/oh-all-hands-batman1.jpg';
import NavBar from '../components/navbar';

const Speaker = ({ name, handleClick }) => {
  const allHandsParagraph = 'On the Junior Development Board I had the opportunity to organise and MC the quarterly R&D All Hands ' +
    'meeting, twice! This involved a huge amount of planning, a batman costume and epic videos.';
  return (
    <div className="operation-job-page uk-height-viewport">
      <NavBar handleClick={handleClick} />
      <div className="uk-container uk-container-center oj-container uk-margin-large-bottom">
        <div className="uk-vertical-align uk-text-center">
          <h1 className="oj-title uk-vertical-align-middle uk-margin-top">{name}</h1>
        </div>
        <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
          <div className="uk-width-1-1">
            <h2>I really enjoy public speaking</h2>
            <p>Whether adults or kids the passion for public speaking began at City East Church.</p>
            <div className="uk-grid uk-margin-bottom">
              <div className="uk-width-medium-1-2 uk-margin-bottom">
                <img src={speakingBatman} width="600px" alt="City East Church as Batman" />
              </div>
              <div className="uk-width-medium-1-2">
                <img src={speakingCec} width="600px" alt="City East Church speaking" />
              </div>
            </div>
            <h2>Orion Health R&D All Hands</h2>
            <p>{allHandsParagraph}</p>
            <div className="uk-grid uk-margin-bottom">
              <div className="uk-width-medium-4-10 uk-margin-bottom">
                <img src={ohAllHands3} width="600px" alt="MC with audience" />
              </div>
              <div className="uk-width-medium-6-10">
                <div className="uk-margin">
                  <img src={ohAllHands2} width="600px" alt="MC" />
                </div>
                <div className="uk-margin">
                  <img src={ohAllHandsBatman1} width="600px" alt="Batman" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Speaker.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Speaker;
