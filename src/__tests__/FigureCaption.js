import React from 'react';
import { shallow } from 'enzyme';
import { FigureCaption } from 'respectre/elements';

describe('FigureCaption', () => {
  it('should render children', () => {
    const wrapper = shallow(<FigureCaption>Hello world</FigureCaption>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render FigureCaption with default class', () => {
    const wrapper = shallow(<FigureCaption>FigureCaption</FigureCaption>);
    expect(wrapper.hasClass('figure-caption')).toBe(true);
  });
});

