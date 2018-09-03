import React from 'react';
import { shallow } from 'enzyme';
import { InputGroup } from '../../elements';

describe('InputGroup', () => {
  it('should render children', () => {
    const wrapper = shallow(<InputGroup>Hello world</InputGroup>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render InputGroup with default class', () => {
    const wrapper = shallow(<InputGroup>InputGroup</InputGroup>);
    expect(wrapper.hasClass('input-group')).toBe(true);
  });
  it('should render inline', () => {
    const wrapper = shallow(<InputGroup inline>InputGroup</InputGroup>);
    expect(wrapper.hasClass('input-inline')).toBe(true);
  });
});

