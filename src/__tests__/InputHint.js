import React from 'react';
import { shallow } from 'enzyme';
import { InputHint } from 'respectre/elements';

describe('InputHint', () => {
  it('should render children', () => {
    const wrapper = shallow(<InputHint>Hello world</InputHint>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render default class', () => {
    const wrapper = shallow(<InputHint>InputHint</InputHint>);
    expect(wrapper.hasClass('form-input-hint')).toBe(true);
  });
});

