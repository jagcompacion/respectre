import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Loading } from '../ui/components';
import { Container } from '../ui/layout';

import LoadingReadme from '../docs/Loading.md';

const sizes = {
  '': 'default',
  lg: 'loading-lg',
};

const defaultValue = '';

storiesOf('Components/ Loadings', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(LoadingReadme))
  .add('default', () => (
    <Container className="p-2">
      <Loading size={select('size', sizes, defaultValue)} />
    </Container>
  ));
