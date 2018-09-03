import React from 'react';
import { shallow } from 'enzyme';
import { FormIcon } from '../../elements';

describe('FormIcon', () => {
  it('should render form-icon class', () => {
    const wrapper = shallow(<FormIcon />);
    expect(wrapper.hasClass('form-icon')).toBe(true);
  });
});

