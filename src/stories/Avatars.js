import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import {
  Avatar,
  AvatarIcon,
  AvatarPresence,
} from '../ui/components';
import withDocsCustom from './utils/withDocsCustom';
import AvatarReadme from '../docs/Avatar.md';

const sizes = {
  xl: 'xl',
  lg: 'lg',
  '': '',
  sm: 'sm',
  xs: 'xs',
};

const presences = {
  online: 'online',
  busy: 'busy',
  away: 'away',
  offline: 'offline',
};

storiesOf('Components/ Avatars', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsCustom(AvatarReadme))
  .add('default', () => (
    <Avatar
      size={select('size', sizes, '')}
      data-initial={boolean('data-initial', false) ? 'JC' : ''}
    >
      {!boolean('data-initial', false) && <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." /> }
      {boolean('with icon', false) && <AvatarIcon src="https://picturepan2.github.io/spectre/img/avatar-1.png" />}
      {boolean('with presence', false) && <AvatarPresence presence={select('presence', presences, 'online')} />}
    </Avatar>
  ));
