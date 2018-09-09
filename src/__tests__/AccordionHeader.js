import React from 'react';
import { shallow } from 'enzyme';
import { AccordionHeader } from '../../components';

describe('AccordionHeader', () => {
  it('should render children', () => {
    const wrapper = shallow(<AccordionHeader id="header1">Hello world</AccordionHeader>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should have class accordion-header', () => {
    const wrapper = shallow(<AccordionHeader id="header1">Hello world</AccordionHeader>);
    expect(wrapper.find('.accordion-header').exists()).toBe(true);
  });
  it('should be checkbox by default', () => {
    const wrapper = shallow(<AccordionHeader id="header1">Hello world</AccordionHeader>);
    expect(wrapper.find('[name="accordion-checkbox"]')).toHaveLength(1);
  });
});

