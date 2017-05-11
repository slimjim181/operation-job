import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import NavBar from '../components/navbar';

const Leader = ({ name, handleClick }) => (
  <div className="operation-job-page uk-height-viewport">
    <NavBar handleClick={handleClick} />
    <div className="uk-container uk-container-center oj-container">
      <div className="uk-vertical-align uk-text-center">
        <h1 className="oj-title uk-vertical-align-middle uk-margin-top">{name}</h1>
      </div>
      <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <h2>Orion Health Junior Development Board</h2>
          <p className="uk-text-large">
            Hand-picked by the CEO Ian McCrae to be exposed to greater business initiatives.
          </p>
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
