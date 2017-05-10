import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import NavBar from '../components/navbar';

const Contact = ({ name, handleClick }) => (
  <div className="operation-job-page uk-height-viewport">
    <NavBar handleClick={handleClick} />
    <div className="uk-container uk-container-center oj-container">
      <h1 className="oj-title uk-margin-top">{name}</h1>
    </div>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};


export default Contact;
