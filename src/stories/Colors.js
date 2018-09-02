import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Container } from '../ui/layout';

import TextColorReadme from '../docs/TextColor.md';
import BgColorReadme from '../docs/BgColor.md';

const textColors = {
  '': 'default',
  'text-primary': 'text-primary',
  'text-secondary': 'text-secondary',
  'text-dark': 'text-dark',
  'text-gray': 'text-gray',
  'text-light': 'text-light',
  'text-success': 'text-success',
  'text-warning': 'text-warning',
  'text-error': 'text-error',
};

const bgColors = {
  '': 'default',
  'bg-primary': 'bg-primary',
  'bg-secondary': 'bg-secondary',
  'bg-dark': 'bg-dark',
  'bg-gray': 'bg-gray',
  'bg-light': 'bg-light',
  'bg-success': 'bg-success',
  'bg-warning': 'bg-warning',
  'bg-error': 'bg-error',
};

const defaultValue = '';

storiesOf('Utilities/ Colors', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(TextColorReadme))
  .add('text', () => (
    <Container className="p-2">
      <p
        className={classnames([
          select('className', textColors, defaultValue),
          select('className', textColors, defaultValue) === 'text-light' ? 'bg-dark' : '',
        ])}
      >
        This will change if you go to knob and change the className value.
      </p>
    </Container>
  ))
  .addDecorator(withReadme(BgColorReadme))
  .add('background', () => (
    <Container className="p-2">
      <p
        className={classnames([
          select('className', bgColors, defaultValue),
          select('className', bgColors, defaultValue) === 'text-light' ? 'bg-dark' : '',
        ])}
      >
        This will change if you go to knob and change the className value.
      </p>
    </Container>
  ));
