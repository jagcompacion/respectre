import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../elements';

describe('Button', () => {
  it('should render children', () => {
    const wrapper = shallow(<Button>Hello world</Button>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render buttons with default color', () => {
    const wrapper = shallow(<Button>Default Button</Button>);
    expect(wrapper.hasClass('btn')).toBe(true);
  });
  it('should render buttons with colors', () => {
    const danger = shallow(<Button color="danger">Danger Button</Button>);
    const error = shallow(<Button color="error">Error Button</Button>);
    const success = shallow(<Button color="success">Success Button</Button>);
    const primary = shallow(<Button color="primary">Primary Button</Button>);
    const link = shallow(<Button color="link">Link Button</Button>);
    const clear = shallow(<Button color="clear">Clear Button</Button>);
    expect(danger.hasClass('btn-danger')).toBe(true);
    expect(error.hasClass('btn-error')).toBe(true);
    expect(success.hasClass('btn-success')).toBe(true);
    expect(primary.hasClass('btn-primary')).toBe(true);
    expect(clear.hasClass('btn-clear')).toBe(true);
    expect(link.hasClass('btn-link')).toBe(true);
  });
  it('should render buttons with sizes', () => {
    const small = shallow(<Button size="sm">Small Button</Button>);
    const large = shallow(<Button size="lg">Large Button</Button>);
    expect(small.hasClass('btn-sm')).toBe(true);
    expect(large.hasClass('btn-lg')).toBe(true);
  });
  it('should render block buttons', () => {
    const block = shallow(<Button block>Block Button</Button>);
    expect(block.hasClass('btn-block')).toBe(true);
  });
  it('should render action buttons', () => {
    const block = shallow(<Button action>Action Button</Button>);
    expect(block.hasClass('btn-action')).toBe(true);
  });
  it('should render inputGroup buttons', () => {
    const block = shallow(<Button inputGroup>Input Group Button</Button>);
    expect(block.hasClass('input-group-btn')).toBe(true);
  });
  it('should render loading buttons', () => {
    const block = shallow(<Button loading>Loading Button</Button>);
    expect(block.hasClass('loading')).toBe(true);
  });
  describe('onClick', () => {
    it('calls props.onClick if it exists', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<Button onClick={onClick}>Testing Click</Button>);
      wrapper.find('button').simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
    it('is not called when disabled', () => {
      const wrapper = shallow(<Button disabled>Testing Click</Button>);
      expect(wrapper.hasClass('disabled')).toBe(true);
    });
  });
});

