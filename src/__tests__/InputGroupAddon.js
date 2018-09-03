import React from 'react';
import { shallow } from 'enzyme';
import { InputGroupAddon } from '../../elements';

describe('InputGroupAddon', () => {
  it('should render children', () => {
    const wrapper = shallow(<InputGroupAddon>Hello world</InputGroupAddon>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render InputGroupAddon with default class', () => {
    const wrapper = shallow(<InputGroupAddon>InputGroupAddon</InputGroupAddon>);
    expect(wrapper.hasClass('input-group-addon')).toBe(true);
  });
  it('should render by sizes', () => {
    const large = shallow(<InputGroupAddon size="lg">InputGroupAddon</InputGroupAddon>);
    const small = shallow(<InputGroupAddon size="sm">InputGroupAddon</InputGroupAddon>);
    expect(large.hasClass('addon-lg')).toBe(true);
    expect(small.hasClass('addon-sm')).toBe(true);
  });
});

