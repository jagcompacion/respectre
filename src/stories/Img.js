import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
  Img,
} from '../ui/elements';
import withDocsCustom from './utils/withDocsCustom';
import ImgReadme from '../docs/Img.md';

const types = {
  '': 'default',
  'contain': 'contain',
  'cover': 'cover',
};

const defaultValue = '';

storiesOf('Elements/ Img', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsCustom(ImgReadme))
  .add('default', () => (
    <Img
      src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg"
      height="100"
      width="400"
      style={{ display: 'inline' }}
      type={select('type', types, defaultValue)}
    />
  ));