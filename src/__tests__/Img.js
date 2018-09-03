import React from 'react';
import { shallow } from 'enzyme';
import { Img } from '../../elements';

describe('Img', () => {
  it('should render default class', () => {
    const wrapper = shallow(<Img />);
    expect(wrapper.hasClass('img-responsive')).toBe(true);
  });
  it('should render class by type', () => {
    const contain = shallow(<Img type="contain" />);
    const cover = shallow(<Img type="cover" />);
    expect(contain.hasClass('img-fit-contain')).toBe(true);
    expect(cover.hasClass('img-fit-cover')).toBe(true);
  });
});

