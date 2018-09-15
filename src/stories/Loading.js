import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Loading } from '../ui/components';
import withDocsForm from './utils/withDocsForm';
import LoadingReadme from '../docs/Loading.md';

const sizes = {
  '': 'default',
  lg: 'lg',
};

const defaultValue = '';

storiesOf('Components/ Loadings', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsForm(LoadingReadme))
  .add('default', () => (
    <div>
      <Loading size={select('size', sizes, defaultValue)} />
    </div>
  ));
