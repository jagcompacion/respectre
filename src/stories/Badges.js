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
import withDocsCustom from './utils/withDocsCustom';
import BadgeReadme from '../docs/Badge.md';

storiesOf('Components/ Badges', module)
  .addDecorator(withDocsCustom(BadgeReadme))
  .add('default', () => (
    <div>
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
    </div>
  ))
  .add('button', () => (
    <div>
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
    </div>
  ))
  .add('avatar', () => (
    <div>
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
    </div>
  ));
