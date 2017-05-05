import React from 'react';
import ReactDOM from 'react-dom';
import OperationJob from '../src/operation-job/operation-job-app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OperationJob />, div);
});
