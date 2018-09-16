import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import withDocsForm from './utils/withDocsForm';
import { Toast } from '../ui/components';
import { Button } from '../ui/elements';
import { Container } from '../ui/layout';

import ToastReadme from '../docs/Toast.md';

const colors = {
  '': 'default',
  primary: 'primary',
  success: 'success',
  error: 'error',
};

const defaultValue = '';

storiesOf('Components/ Toast', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsForm(ToastReadme))
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
