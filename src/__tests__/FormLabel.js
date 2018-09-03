import React from 'react';
import { shallow } from 'enzyme';
import { FormLabel } from '../../elements';

describe('FormLabel', () => {
  it('should render children', () => {
    const wrapper = shallow(<FormLabel>Hello world</FormLabel>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render class by type', () => {
    const radio = shallow(<FormLabel type="radio">FormLabel</FormLabel>);
    const checkbox = shallow(<FormLabel type="checkbox">FormLabel</FormLabel>);
    const switchType = shallow(<FormLabel type="switch">FormLabel</FormLabel>);
    expect(radio.hasClass('form-radio')).toBe(true);
    expect(checkbox.hasClass('form-checkbox')).toBe(true);
    expect(switchType.hasClass('form-switch')).toBe(true);
  });
  it('should render inline', () => {
    const wrapper = shallow(<FormLabel inline>Hello world</FormLabel>);
    expect(wrapper.hasClass('form-inline')).toBe(true);
  });
  it('should render sizes', () => {
    const large = shallow(<FormLabel size="lg">Hello world</FormLabel>);
    const small = shallow(<FormLabel size="sm">Hello world</FormLabel>);
    expect(large.hasClass('label-lg')).toBe(true);
    expect(small.hasClass('label-sm')).toBe(true);
  });
});

