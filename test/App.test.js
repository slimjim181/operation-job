import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import OperationJob from '../src/operation-job/operation-job-app';
import viewStates from '../src/operation-job/types';


describe('operation-job-app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OperationJob />, div);
  });
  it('home is default state', () => {
    const wrapper = shallow(<OperationJob />);
    expect(wrapper.state().viewState).to.equal(viewStates.HOME);
  });
  it('state changes to software developer on click of software developer button', () => {
    const wrapper = mount(<OperationJob />);
    wrapper.find('button').filter('#Software Developer').simulate('click');
    expect(wrapper.state().viewState).to.equal(viewStates.SOFTWARE);
  });
  it('state changes to leader on click of leader button', () => {
    const wrapper = mount(<OperationJob />);
    wrapper.find('button').filter('#Leader').simulate('click');
    expect(wrapper.state().viewState).to.equal(viewStates.LEADER);
  });
  it('state changes to video director on click of video director button', () => {
    const wrapper = mount(<OperationJob />);
    wrapper.find('button').filter('#Video Director').simulate('click');
    expect(wrapper.state().viewState).to.equal(viewStates.VIDEO);
  });
  it('state changes to computer builder on click of computer builder button', () => {
    const wrapper = mount(<OperationJob />);
    wrapper.find('button').filter('#Computer Builder').simulate('click');
    expect(wrapper.state().viewState).to.equal(viewStates.COMPUTER);
  });
  it('state changes to contact on click of contact button', () => {
    const wrapper = mount(<OperationJob />);
    wrapper.find('button').filter('#Contact').simulate('click');
    expect(wrapper.state().viewState).to.equal(viewStates.CONTACT);
  });
});
