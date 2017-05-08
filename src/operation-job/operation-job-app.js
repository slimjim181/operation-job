import React, { Component } from 'react';
import _ from 'lodash';
import '../../assets/operation-job.css';
import viewStates from './types';
import Computer from './components/computer';
import Button from './components/button';

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

    if (this.state.viewState === viewStates.COMPUTER) {
      return (<Computer />);
    }
    return (
      <div className="operation-job">
        <div className="oj-header">
          <h1 className="oj-name">Joseph Sutton</h1>
          <div>
            { homeScreenButtons }
          </div>
          <Button key={5} name={viewStates.CONTACT} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default OperationJob;
