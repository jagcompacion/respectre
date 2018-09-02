import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Avatar,
  AvatarIcon,
  AvatarPresence,
} from '../ui/components';
import { Container } from '../ui/layout';

storiesOf('Components/ Avatars', module)
  .add('default', () => (
    <Container className="p-2">
      <Avatar size="xl" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      </Avatar>
      <Avatar size="lg" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      </Avatar>
      <Avatar className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      </Avatar>
      <Avatar size="sm" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      </Avatar>
      <Avatar size="xs" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      </Avatar>
    </Container>
  ))
  .add('initial value', () => (
    <Container className="p-2">
      <Avatar size="xl" data-initial="JC" className="mr-1" />
      <Avatar size="lg" data-initial="JC" className="mr-1" />
      <Avatar data-initial="JC" className="mr-1" />
      <Avatar size="sm" data-initial="JC" className="mr-1" />
      <Avatar size="xs" data-initial="JC" className="mr-1" />
    </Container>
  ))
  .add('with icon', () => (
    <Container className="p-2">
      <Avatar size="xl" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        <AvatarIcon src="https://picturepan2.github.io/spectre/img/avatar-1.png" />
      </Avatar>
      <Avatar size="lg" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        <AvatarIcon src="https://picturepan2.github.io/spectre/img/avatar-1.png" />
      </Avatar>
      <Avatar className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        <AvatarIcon src="https://picturepan2.github.io/spectre/img/avatar-1.png" />
      </Avatar>
      <Avatar size="sm" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        <AvatarIcon src="https://picturepan2.github.io/spectre/img/avatar-1.png" />
      </Avatar>
      <Avatar size="xs" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        <AvatarIcon src="https://picturepan2.github.io/spectre/img/avatar-1.png" />
      </Avatar>
    </Container>
  ))
  .add('presence', () => (
    <Container className="p-2">
      <Avatar size="xl" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        <AvatarPresence presence="online" />
      </Avatar>
      <Avatar size="lg" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        <AvatarPresence presence="busy" />
      </Avatar>
      <Avatar className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        <AvatarPresence presence="away" />
      </Avatar>
      <Avatar size="sm" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        <AvatarPresence />
      </Avatar>
      <Avatar size="xs" className="mr-1">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        <AvatarPresence presence="online" />
      </Avatar>
    </Container>
  ));
