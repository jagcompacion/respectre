import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '../../elements';

describe('Input', () => {
  it('should render children', () => {
    const wrapper = shallow(<Input>Hello world</Input>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render default class', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.hasClass('form-input')).toBe(true);
  });
  it('should render by type', () => {
    const textarea = shallow(<Input type="textarea" />);
    const select = shallow(<Input type="select" />);
    expect(textarea.hasClass('form-input')).toBe(true);
    expect(textarea.type()).toBe('textarea');
    expect(select.hasClass('form-select')).toBe(true);
  });
  it('should render by size', () => {
    const large = shallow(<Input size="lg" />);
    const small = shallow(<Input size="sm" />);
    expect(large.hasClass('input-lg')).toBe(true);
    expect(small.hasClass('input-sm')).toBe(true);
  });
  it('should have error class', () => {
    const wrapper = shallow(<Input error />);
    expect(wrapper.hasClass('is-error')).toBe(true);
  });
  it('should have success class', () => {
    const wrapper = shallow(<Input success />);
    expect(wrapper.hasClass('is-success')).toBe(true);
  });
  describe('type="select"', () => {
    it('should render by size', () => {
      const large = shallow(<Input type="select" size="lg" />);
      const small = shallow(<Input type="select" size="sm" />);
      expect(large.hasClass('select-lg')).toBe(true);
      expect(small.hasClass('select-sm')).toBe(true);
    });
  });
});

