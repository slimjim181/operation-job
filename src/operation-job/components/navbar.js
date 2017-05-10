import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
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
          <a
            className="uk-navbar-toggle uk-hidden-large oj-navbar-toggle oj-height"
            href="#offcanvas"
            data-uk-offcanvas
          />
          <ul className="uk-navbar-nav uk-visible-large">
            {navBarItems}
          </ul>
        </div>
      </nav>
      <div id="offcanvas" className="uk-offcanvas">
        <div className="uk-offcanvas-bar" mode="push">
          <ul className="uk-nav uk-nav-offcanvas">
            {navBarItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
