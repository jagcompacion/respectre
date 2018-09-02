import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Container } from '../ui/layout';

import PositionReadme from '../docs/Position.md';

storiesOf('Utilities/ Positions', module)
  .addDecorator(withReadme(PositionReadme))
  .add('default', () => (
    <Container className="p-2">
      <div className="p-2 bg-gray clearfix mb-2">
        class: clearfix
      </div>
      <div className="p-2 bg-gray float-left mb-2">
        class: float-left
      </div>
      <div className="p-2 bg-gray float-right mb-2">
        class: float-right
      </div>
      <div className="clearfix" />
      <div className="p-2 bg-gray mb-2">
        class: relative
      </div>
      <div className="p-2 bg-gray mb-2">
        class: absolute
      </div>
      <div className="p-2 bg-gray mb-2">
        class: fixed
      </div>
      <div className="p-2 bg-gray centered mb-2">
        class: centered
      </div>
      <div className="p-2 bg-gray text-normal mb-2">
        class: text-normal
      </div>
      <div className="p-2 bg-gray mb-2">
        class: m-1
      </div>
      <div className="p-2 bg-gray mb-2">
        class: m-2
      </div>
      <div className="p-2 bg-gray mb-2">
        class: mt-1
      </div>
      <div className="p-2 bg-gray mb-2">
        class: mt-1
      </div>
      <div className="p-2 bg-gray mb-2">
        class: mx-1
      </div>
      <div className="p-2 bg-gray mb-2">
        class: mx-2
      </div>
      <div className="p-2 bg-gray mb-2">
        class: my-1
      </div>
      <div className="p-2 bg-gray mb-2">
        class: my-2
      </div>
      <div className="p-2 bg-gray mb-2">
        class: pt-1
      </div>
      <div className="p-2 bg-gray mb-2">
        class: pt-2
      </div>
      <div className="p-2 bg-gray mb-2">
        class: px-1
      </div>
      <div className="p-2 bg-gray mb-2">
        class: px-2
      </div>
      <div className="p-2 bg-gray mb-2">
        class: py-1
      </div>
      <div className="p-2 bg-gray mb-2">
        class: py-2
      </div>
    </Container>
  ));
