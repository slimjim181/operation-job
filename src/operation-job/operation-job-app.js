import React, { Component } from 'react';
import _ from 'lodash';
import '../../assets/operation-job.css';
import viewStates from './types';

import Software from './components/software';
import Leader from './components/leader';
import Computer from './components/computer';
import Video from './components/video';
import Speaker from './components/speaker';
import Contact from './components/contact';

import Button from './components/button';
import photo from '../../assets/joe.jpg';


class OperationJob extends Component {
  constructor() {
    super();
    this.state = {
      viewState: viewStates.HOME,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
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
        return (<Software />);
      case viewStates.LEADER:
        return (<Leader />);
      case viewStates.COMPUTER:
        return (<Computer />);
      case viewStates.VIDEO:
        return (<Video />);
      case viewStates.SPEAKER:
        return (<Speaker />);
      case viewStates.CONTACT:
        return (<Contact />);
      default:
        return (
          <div className="operation-job uk-grid uk-height-viewport">
            <img className="oj-image-panel" src={photo} alt="Joseph Sutton" />
            <div className="oj-content-panel uk-width-expand">
              <div className="oj-header">
                <h1 className="oj-name">Joseph Sutton</h1>
                { homeScreenButtons }
                <div className="oj-footer" >
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
