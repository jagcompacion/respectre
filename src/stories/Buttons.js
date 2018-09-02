import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { Button, ButtonGroup } from '../ui/elements';
import { Container } from '../ui/layout';

import ButtonReadme from '../docs/Button.md';
import ButtonGroupReadme from '../docs/ButtonGroup.md';

const colors = {
  '': 'default',
  primary: 'primary',
  link: 'link',
  success: 'success',
  error: 'error',
};

const sizes = {
  '': 'default',
  lg: 'lg',
  sm: 'sm',
};

const defaultValue = '';

storiesOf('Elements/ Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ButtonReadme))
  .add('default', () => (
    <Container className="p-2">
      <Button
        color={select('color', colors, defaultValue)}
        size={select('size', sizes, defaultValue)}
        block={boolean('block', false)}
        active={boolean('active', false)}
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
        onClick={action('clicked')}
      >
        Default button
      </Button>
    </Container>
  ))
  .add('clear', () => (
    <Container className="p-2">
      <Button color="clear" />
    </Container>
  ))
  .addDecorator(withReadme(ButtonGroupReadme))
  .add('group', () => (
    <Container className="p-2">
      <ButtonGroup
        block={boolean('block', false)}
      >
        <Button
          color={select('color', colors, defaultValue)}
          size={select('size', sizes, defaultValue)}
          active={boolean('active', false)}
          loading={boolean('loading', false)}
          disabled={boolean('disabled', false)}
          onClick={action('clicked')}
        >
          First button
        </Button>
        <Button
          onClick={action('clicked')}
          color={select('color', colors, defaultValue)}
          size={select('size', sizes, defaultValue)}
        >
          Second button
        </Button>
        <Button
          onClick={action('clicked')}
          color={select('color', colors, defaultValue)}
          size={select('size', sizes, defaultValue)}
        >
          Third button
        </Button>
      </ButtonGroup>
    </Container>
  ));
