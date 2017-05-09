import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import icon from '../../assets/images/joe-thumbnail.jpg';
import '../../assets/css/navbar.css';
import viewStates from '.././types';

const NavBar = ({ handleClick }) => {
  const navBarItems = _.map(viewStates, (name, index) => (
    <li key={index}><a className="oj-height" role="navigation" onClick={handleClick}>{name}</a></li>
  ));

  return (
    <div>
      <nav className="uk-navbar oj-navbar">
        <div className="uk-container uk-container-center">
          <div className="uk-vertical-align uk-navbar-toggle oj-height">
            <img src={icon} className="uk-vertical-align-middle oj-nav-image" alt="Joseph Sutton" />
          </div>
          <ul className="uk-navbar-nav">
            {navBarItems}
          </ul>
        </div>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
