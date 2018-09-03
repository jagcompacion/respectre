import React from 'react';
import { shallow } from 'enzyme';
import { Label } from '../../elements';

describe('Label', () => {
  it('should render children', () => {
    const wrapper = shallow(<Label>Hello world</Label>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render default class', () => {
    const wrapper = shallow(<Label>Label</Label>);
    expect(wrapper.hasClass('label')).toBe(true);
  });
  it('should render by color', () => {
    const primary = shallow(<Label color="primary">Label</Label>);
    expect(primary.hasClass('label-primary')).toBe(true);
  });
  it('should render rounded label', () => {
    const wrapper = shallow(<Label rounded>Label</Label>);
    expect(wrapper.hasClass('label-rounded')).toBe(true);
  });
});

