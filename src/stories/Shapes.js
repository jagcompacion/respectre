import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Container } from '../ui/layout';

import ShapeReadme from '../docs/Shape.md';

const style = {
  height: '4.8rem',
  lineHeight: '1.2rem',
  padding: '1.8rem 0',
  width: '4.8rem',
};

storiesOf('Utilities/ Shapes', module)
  .addDecorator(withReadme(ShapeReadme))
  .add('default', () => (
    <Container className="p-2">
      <div className="p-2 mb-2">
        <div className="s-rounded text-center bg-primary" style={style}>
          s-rounded
        </div>
      </div>
      <div className="p-2 mb-2">
        <div className="s-circle text-center bg-primary" style={style}>
          s-circle
        </div>
      </div>
    </Container>
  ));
