import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import NavBar from '../src/operation-job/components/navbar';


describe('navbar', () => {
  it('handleClick is called on click of software anchor', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<NavBar handleClick={onButtonClick} />);
    wrapper.find('a').filter('#Software Developer').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
  it('handleClick is called on click of leader anchor', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<NavBar handleClick={onButtonClick} />);
    wrapper.find('a').filter('#Leader').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
  it('handleClick is called on click of video director anchor', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<NavBar handleClick={onButtonClick} />);
    wrapper.find('a').filter('#Video Director').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
  it('handleClick is called on click of computer builder anchor', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<NavBar handleClick={onButtonClick} />);
    wrapper.find('a').filter('#Computer Builder').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
  it('handleClick is called on click of contact contact anchor', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<NavBar handleClick={onButtonClick} />);
    wrapper.find('a').filter('#Contact').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});
