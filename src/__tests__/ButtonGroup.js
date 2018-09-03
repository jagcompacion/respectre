import React from 'react';
import { shallow } from 'enzyme';
import { ButtonGroup } from '../../elements';

describe('ButtonGroup', () => {
  it('should render children', () => {
    const wrapper = shallow(<ButtonGroup>Hello world</ButtonGroup>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render ButtonGroup with default class', () => {
    const wrapper = shallow(<ButtonGroup>Default Button</ButtonGroup>);
    expect(wrapper.hasClass('btn-group')).toBe(true);
  });
  it('should render block buttons', () => {
    const wrapper = shallow(<ButtonGroup block>Block ButtonGroup</ButtonGroup>);
    expect(wrapper.hasClass('btn-group-block')).toBe(true);
  });
});

