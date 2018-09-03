import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
  Video,
} from '../ui/elements';
import withDocsCustom from './utils/withDocsCustom';
import VideoReadme from '../docs/Video.md';

const types = {
  '': 'default',
  '4-3': '4-3',
  '1-1': '1-1',
};

const defaultValue = '';

storiesOf('Elements/ Video', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsCustom(VideoReadme))
  .add('default', () => (
    <Video type={select('type', types, defaultValue)}>
      <iframe
        title="raphsody"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        height="400"
        frameBorder="0"
        allowFullscreen
      />
    </Video>
  ));
