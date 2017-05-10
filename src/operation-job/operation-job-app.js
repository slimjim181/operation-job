import React, { Component } from 'react';
import _ from 'lodash';
import '../assets/css/operation-job.css';
import viewStates from './types';

import Software from './content-pages/software';
import Leader from './content-pages/leader';
import Computer from './content-pages/computer';
import Video from './content-pages/video';
import Speaker from './content-pages/speaker';
import Contact from './content-pages/contact';

import Button from './components/button';
import photo from '../assets/images/joe.jpg';

const JOSEPH = 'Joseph Sutton';


class OperationJob extends Component {
  constructor() {
    super();
    this.state = {
      viewState: viewStates.HOME,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      viewState: event.target.textContent,
    });
  }

  render() {
    const homeScreenButtonNames = [
      viewStates.SOFTWARE,
      viewStates.LEADER,
      viewStates.COMPUTER,
      viewStates.VIDEO,
      viewStates.SPEAKER,
    ];
    const homeScreenButtons = _.map(homeScreenButtonNames, (name, index) => (
      <Button key={index} name={name} handleClick={this.handleClick} />
    ));

    // TODO consider a navigation library.
    switch (this.state.viewState) {
      case viewStates.SOFTWARE:
        return (<Software name={this.state.viewState} handleClick={this.handleClick} />);
      case viewStates.LEADER:
        return (<Leader name={this.state.viewState} handleClick={this.handleClick} />);
      case viewStates.COMPUTER:
        return (<Computer name={this.state.viewState} handleClick={this.handleClick} />);
      case viewStates.VIDEO:
        return (<Video name={this.state.viewState} handleClick={this.handleClick} />);
      case viewStates.SPEAKER:
        return (<Speaker name={this.state.viewState} handleClick={this.handleClick} />);
      case viewStates.CONTACT:
        return (<Contact name={this.state.viewState} handleClick={this.handleClick} />);
      default:
        return (
          <div className="operation-job-home uk-grid uk-height-viewport">
            <img className="oj-image-panel" src={photo} alt={JOSEPH} />
            <div className="oj-content-panel">
              <div className="oj-header">
                <h1 className="oj-name uk-margin-large">{JOSEPH}</h1>
                <div className="uk-margin-large">
                  { homeScreenButtons }
                </div>
                <div className="oj-contact-section uk-margin-large-top uk-margin-large-bottom" >
                  <Button key={6} name={viewStates.CONTACT} handleClick={this.handleClick} />
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}

export default OperationJob;
