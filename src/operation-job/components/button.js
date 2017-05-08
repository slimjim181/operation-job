import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/operation-job.css';

const Button = ({ name, handleClick, buttonType }) => (
  <button
    className={`uk-button ${buttonType} uk-button-large uk-margin-top uk-margin-right uk-text-large oj-button`}
    onClick={event => handleClick(event)}
  >{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonType: PropTypes.string,
};

Button.defaultProps = {
  buttonType: 'uk-button-primary',
};

export default Button;
