import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import ohJdb from '../../assets/images/oh-jdb.jpg';
import ohTrophy from '../../assets/images/oh-trophy.jpg';
import NavBar from '../components/navbar';

const Leader = ({ name, handleClick }) => (
  <div className="operation-job-page uk-height-viewport">
    <NavBar handleClick={handleClick} />
    <div className="uk-container uk-container-center oj-container uk-margin-large-bottom">
      <div className="uk-vertical-align uk-text-center">
        <h1 className="oj-title uk-vertical-align-middle uk-margin-top">{name}</h1>
      </div>
      <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <h2>Orion Health Junior Development Board</h2>
          <p>Hand-picked by the CEO Ian McCrae to be exposed to greater business initiatives. I got to work with a diverse team of like minded leaders to innovate change within Orion Health. The main change I was involved with was turning company meetings into a great experience of which I recieved a CEO award for. See the Speaker page for more information.</p>
          <div className="uk-grid" data-uk-grid-margin>
            <div className="uk-width-medium-2-10">
              <img src={ohTrophy} />
            </div>
            <div className="uk-width-medium-8-10">
              <img src={ohJdb} width="600px" />
            </div>
          </div>
          <h2>Reference</h2>
          <h2>Volunteer involvement</h2>
          <h2>Clifton Strengths Finder</h2>
        </div>
      </div>
    </div>
  </div>
);

Leader.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Leader;
