import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import '../../assets/css/navbar.css';
import viewStates from '.././types';

const NavBar = ({ handleClick }) => {
  const navBarItems = _.map(viewStates, (name, index) => (
    <li key={index}><a id={name} className="oj-height" role="navigation" onClick={handleClick}>{name}</a></li>
  ));
  const navBarItemsMobile = _.map(viewStates, (name, index) => (
    <li key={index}><a id={`${name}-mobile`} className="oj-height" role="navigation" onClick={handleClick}>{name}</a></li>
  ));

  return (
    <div data-uk-dropdown="{mode:'click'}">
      <nav className="uk-navbar oj-navbar">
        <div className="uk-container uk-container-center">
          <div className="uk-navbar-toggle uk-hidden-large oj-navbar-toggle oj-height" />
          <ul className="uk-navbar-nav uk-visible-large">
            {navBarItems}
          </ul>
        </div>
      </nav>
      <div className="uk-dropdown oj-dropdown uk-hidden-large">
        <ul className="uk-nav uk-nav-dropdown uk-animation-slide-left">
          {navBarItemsMobile}
        </ul>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
