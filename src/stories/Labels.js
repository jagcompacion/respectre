import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
  Label,
} from '../ui/elements';
import withDocsCustom from './utils/withDocsCustom';
import LabelReadme from '../docs/Label.md';

const colors = {
  '': 'default',
  primary: 'primary',
  warning: 'warning',
  success: 'success',
  error: 'error',
};

const defaultValue = '';

storiesOf('Elements/ Labels', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsCustom(LabelReadme))
  .add('default', () => (
    <Label
      color={select('color', colors, defaultValue)}
      rounded={boolean('rounded', false)}
    >
      This is a label
    </Label>
  ));
