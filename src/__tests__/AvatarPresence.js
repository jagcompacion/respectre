import React from 'react';
import { shallow } from 'enzyme';
import { AvatarPresence } from '../../components';

describe('AvatarPresence', () => {
  it('should render children', () => {
    const wrapper = shallow(<AvatarPresence>Hello world</AvatarPresence>);
    expect(wrapper.text()).toBe('Hello world');
  });
  it('should have class avatar-presence', () => {
    const wrapper = shallow(<AvatarPresence>Hello world</AvatarPresence>);
    expect(wrapper.hasClass('avatar-presence')).toBe(true);
  });
  it('should render with presences', () => {
    const online = shallow(<AvatarPresence presence="online">Onliner</AvatarPresence>);
    const busy = shallow(<AvatarPresence presence="busy">Busy</AvatarPresence>);
    const away = shallow(<AvatarPresence presence="away">Away</AvatarPresence>);
    const offline = shallow(<AvatarPresence presence="offline">Offline</AvatarPresence>);
    expect(online.hasClass('online')).toBe(true);
    expect(busy.hasClass('busy')).toBe(true);
    expect(away.hasClass('away')).toBe(true);
    expect(offline.hasClass('offline')).toBe(true);
  });
});

