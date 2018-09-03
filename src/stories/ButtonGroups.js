import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { Button, ButtonGroup } from '../../elements';
import withDocsCustom from './utils/withDocsCustom';

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

storiesOf('Elements/ ButtonGroups', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsCustom(ButtonGroupReadme))
  .add('default', () => (
    <ButtonGroup
      block={boolean('block', false)}
    >
      <Button
        color={select('color', colors, defaultValue)}
        size={select('size', sizes, defaultValue)}
        active={boolean('active', false)}
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
      >
        First button
      </Button>
      <Button
        color={select('color', colors, defaultValue)}
        size={select('size', sizes, defaultValue)}
      >
        Second button
      </Button>
      <Button
        color={select('color', colors, defaultValue)}
        size={select('size', sizes, defaultValue)}
      >
        Third button
      </Button>
    </ButtonGroup>
  ));
