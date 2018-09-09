import React from 'react';
import { shallow } from 'enzyme';
import { AvatarIcon } from '../../components';

describe('AvatarIcon', () => {
  it('should render children', () => {
    const wrapper = shallow(<AvatarIcon>Hello world</AvatarIcon>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should have class avatar-icon', () => {
    const wrapper = shallow(<AvatarIcon>Hello world</AvatarIcon>);
    expect(wrapper.hasClass('avatar-icon')).toBe(true);
  });
});

