import React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../../elements';

describe('Table', () => {
  it('should render children', () => {
    const wrapper = shallow(<Table>Hello world</Table>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should render default class', () => {
    const wrapper = shallow(<Table>Table</Table>);
    expect(wrapper.hasClass('table')).toBe(true);
  });
  it('should render striped table', () => {
    const wrapper = shallow(<Table striped>Table</Table>);
    expect(wrapper.hasClass('table-striped')).toBe(true);
  });
  it('should render striped table', () => {
    const wrapper = shallow(<Table hover>Table</Table>);
    expect(wrapper.hasClass('table-hover')).toBe(true);
  });
});

