import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Toast } from '../ui/components';
import { Button } from '../ui/elements';
import { Container } from '../ui/layout';

import TabReadme from '../docs/Tab.md';

const colors = {
  '': 'default',
  primary: 'primary',
  success: 'success',
  error: 'error',
};

const defaultValue = '';

storiesOf('Components/ Toast', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(TabReadme))
  .add('default', () => (
    <Container className="p-2">
      <Toast color={select('color', colors, defaultValue)}>
        <Button color="clear" className="float-right" />
        <h6>
          Toast Title
        </h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Toast>
    </Container>
  ))
  .add('with no title', () => (
    <Container className="p-2">
      <Toast color={select('color', colors, defaultValue)}>
        <Button color="clear" className="float-right" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Toast>
    </Container>
  ));
