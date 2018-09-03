import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../../elements';

describe('Icon', () => {
  it('should render form-icon class', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper.hasClass('icon')).toBe(true);
  });
  it('should render sizes', () => {
    const large = shallow(<Icon size="lg" />);
    const small = shallow(<Icon size="sm" />);
    expect(large.hasClass('icon-lg')).toBe(true);
    expect(small.hasClass('icon-sm')).toBe(true);
  });
  it('should render centered icon', () => {
    const wrapper = shallow(<Icon centered />);
    expect(wrapper.hasClass('centered')).toBe(true);
  });
});

