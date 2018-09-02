import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import {
  Empty, EmptyAction, EmptyIcon,
  EmptySubtitle, EmptyTitle,
} from '../ui/components';
import { Button, Icon } from '../ui/elements';
import { Container } from '../ui/layout';

import EmptyStateReadme from '../docs/EmptyState.md';

storiesOf('Components/ Empty State', module)
  .addDecorator(withReadme(EmptyStateReadme))
  .add('default', () => (
    <Container className="p-2">
      <Empty>
        <EmptyIcon>
          <Icon icon="icon-people" size="3x" />
        </EmptyIcon>
        <EmptyTitle className="h5">
          You have no new messages
        </EmptyTitle>
        <EmptySubtitle>
          Click the button to start a conversation.
        </EmptySubtitle>
        <EmptyAction>
          <Button color="primary" onClick={action('click')}>
            Send a message
          </Button>
        </EmptyAction>
      </Empty>
    </Container>
  ));
