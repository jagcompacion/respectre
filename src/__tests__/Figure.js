import React from 'react';
import { shallow } from 'enzyme';
import { Figure } from 'respectre/elements';

describe('Figure', () => {
  it('should render children', () => {
    const wrapper = shallow(<Figure>Hello world</Figure>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render Figure with default class', () => {
    const wrapper = shallow(<Figure>Figure</Figure>);
    expect(wrapper.hasClass('figure')).toBe(true);
  });
});

