import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/operation-job.css';

const Button = ({ name, handleClick }) => (
  <button
    className="uk-button uk-button-primary uk-button-large uk-margin-bottom uk-margin-right"
    onClick={event => handleClick(event)}
  >{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
