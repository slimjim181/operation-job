import React, { Component } from 'react';
import '../../assets/operation-job.css';

class OperationJob extends Component {
  render() {
    return (
      <div className="operation-job">
        <div className="oj-header">
          <h1 className="oj-name">Joseph Sutton</h1>
          <div>
            <button className="uk-button uk-button-primary uk-button-large uk-margin-bottom uk-margin-right">Software Developer</button>
            <button className="uk-button uk-button-secondary uk-button-large uk-margin-bottom uk-margin-right">Leader</button>
            <button className="uk-button uk-button-primary uk-button-large uk-margin-bottom uk-margin-right">Computer Builder</button>
            <button className="uk-button uk-button-secondary uk-button-large uk-margin-bottom uk-margin-right">Video Director</button>
            <button className="uk-button uk-button-primary uk-button-large uk-margin-bottom uk-margin-right">Speaker</button>
          </div>
          <button className="uk-button uk-button-default uk-button-large uk-margin">Contact</button>
        </div>
      </div>
    );
  }
}

export default OperationJob;
