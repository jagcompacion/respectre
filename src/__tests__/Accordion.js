import React from 'react';
import { shallow } from 'enzyme';
import { Accordion } from '../../components';

describe('Accordion', () => {
  it('should render children', () => {
    const wrapper = shallow(<Accordion>Hello world</Accordion>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should have class accordion', () => {
    const wrapper = shallow(<Accordion>Hello world</Accordion>);
    expect(wrapper.hasClass('accordion')).toBe(true);
  });
});

