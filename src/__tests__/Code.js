import React from 'react';
import { shallow } from 'enzyme';
import { Code } from 'respectre/elements';

describe('Code', () => {
  it('should render children', () => {
    const wrapper = shallow(<Code>Hello world</Code>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render Code with default class', () => {
    const wrapper = shallow(<Code>Code</Code>);
    expect(wrapper.hasClass('code')).toBe(true);
  });
});

