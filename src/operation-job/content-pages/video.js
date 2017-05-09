import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import NavBar from '../components/navbar';

const Video = ({ name, handleClick }) => (
  <div className="operation-job-page uk-height-viewport">
    <NavBar handleClick={handleClick} />
    <div className="uk-container uk-container-center oj-container">
      <h1 className="oj-title">{name}</h1>
    </div>
  </div>
);

Video.propTypes = {
  name: PropTypes.func.toString.isRequired,
  handleClick: PropTypes.func.isRequired,
};


export default Video;
