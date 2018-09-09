import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from '../../components';

describe('Avatar', () => {
  it('should render children', () => {
    const wrapper = shallow(<Avatar>Hello world</Avatar>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should have class avatar', () => {
    const wrapper = shallow(<Avatar>Hello world</Avatar>);
    expect(wrapper.hasClass('avatar')).toBe(true);
  });
  it('should render with sizes', () => {
    const xLarge = shallow(<Avatar size="xl">xLarge Avatar</Avatar>);
    const large = shallow(<Avatar size="lg">Large Avatar</Avatar>);
    const small = shallow(<Avatar size="sm">Small Avatar</Avatar>);
    const xSmall = shallow(<Avatar size="xs">xSmall Avatar</Avatar>);
    expect(xLarge.hasClass('avatar-xl')).toBe(true);
    expect(large.hasClass('avatar-lg')).toBe(true);
    expect(small.hasClass('avatar-sm')).toBe(true);
    expect(xSmall.hasClass('avatar-xs')).toBe(true);
  });
  it('should have class badge', () => {
    const wrapper = shallow(<Avatar badge>Hello world</Avatar>);
    expect(wrapper.hasClass('badge')).toBe(true);
  });
});

