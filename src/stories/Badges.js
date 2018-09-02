import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Badge, Avatar,
} from '../ui/components';
import {
  Button,
} from '../ui/elements';
import { Container } from '../ui/layout';

storiesOf('Components/ Badges', module)
  .add('default', () => (
    <Container className="p-2">
      <Badge className="mr-2">
        Notifications
      </Badge>
      <Badge data-badge="8" className="mr-2">
        Notifications
      </Badge>
      <Badge data-badge="88" className="mr-2">
        Notifications
      </Badge>
      <Badge data-badge="888" className="mr-2">
        Notifications
      </Badge>
    </Container>
  ))
  .add('button', () => (
    <Container className="p-2">
      <Button badge className="mr-2">
        Notifications
      </Button>
      <Button badge data-badge="8" className="mr-2">
        Notifications
      </Button>
      <Button badge data-badge="88" className="mr-2">
        Notifications
      </Button>
      <Button badge data-badge="888" className="mr-2">
        Notifications
      </Button>
    </Container>
  ))
  .add('avatar', () => (
    <Container className="p-2">
      <Avatar size="xl" badge className="mr-2">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      </Avatar>
      <Avatar size="lg" badge data-badge="8" className="mr-2">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      </Avatar>
      <Avatar badge data-badge="88" className="mr-2">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      </Avatar>
      <Avatar size="sm" badge data-badge="888" className="mr-2">
        <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      </Avatar>
    </Container>
  ));
