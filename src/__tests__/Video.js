import React from 'react';
import { shallow } from 'enzyme';
import { Video } from '../../elements';

describe('Video', () => {
  it('should render children', () => {
    const wrapper = shallow(<Video>Hello world</Video>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render default class', () => {
    const wrapper = shallow(<Video>Video</Video>);
    expect(wrapper.hasClass('video-responsive')).toBe(true);
  });
  it('should render by type', () => {
    const fourThirds = shallow(<Video type="4-3">Video</Video>);
    const oneByOne = shallow(<Video type="1-1">Video</Video>);
    expect(fourThirds.hasClass('video-responsive-4-3')).toBe(true);
    expect(oneByOne.hasClass('video-responsive-1-1')).toBe(true);
  });
});

