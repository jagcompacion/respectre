import React from 'react';
import { shallow } from 'enzyme';
import { AccordionBody } from '../../components';

describe('AccordionBody', () => {
  it('should render children', () => {
    const wrapper = shallow(<AccordionBody>Hello world</AccordionBody>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should have class accordion-body', () => {
    const wrapper = shallow(<AccordionBody>Hello world</AccordionBody>);
    expect(wrapper.hasClass('accordion-body')).toBe(true);
  });
});

