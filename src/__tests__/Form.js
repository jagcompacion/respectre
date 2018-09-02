import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'respectre/elements';

describe('Form', () => {
  it('should render children', () => {
    const wrapper = shallow(<Form>Hello world</Form>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render form-horizontal class', () => {
    const wrapper = shallow(<Form horizontal>Form</Form>);
    expect(wrapper.hasClass('form-horizontal')).toBe(true);
  });
});

