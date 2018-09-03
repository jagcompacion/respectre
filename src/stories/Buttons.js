import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { Button } from '../../elements';
import withDocsCustom from './utils/withDocsCustom';
import ButtonReadme from '../docs/Button.md';

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
  .addDecorator(withDocsCustom(ButtonReadme))
  .add('default', () => (
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
  ))
  .add('clear', () => (
    <Button color="clear" />
  ));
