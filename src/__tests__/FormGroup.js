import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup } from 'respectre/elements';

describe('FormGroup', () => {
  it('should render children', () => {
    const wrapper = shallow(<FormGroup>Hello world</FormGroup>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render FormGroup with default class', () => {
    const block = shallow(<FormGroup>FormGroup</FormGroup>);
    expect(block.hasClass('form-group')).toBe(true);
  });
  it('should have error class', () => {
    const wrapper = shallow(<FormGroup error>FormGroup</FormGroup>);
    expect(wrapper.hasClass('has-error')).toBe(true);
  });
  it('should have success class', () => {
    const wrapper = shallow(<FormGroup success>FormGroup</FormGroup>);
    expect(wrapper.hasClass('has-success')).toBe(true);
  });
});

