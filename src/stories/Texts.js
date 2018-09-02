import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Container } from '../ui/layout';

import TextReadme from '../docs/Text.md';

storiesOf('Utilities/ Texts', module)
  .addDecorator(withReadme(TextReadme))
  .add('default', () => (
    <Container className="p-2">
      <div className="p-2 bg-gray text-left mb-2">
        class: text-left
      </div>
      <div className="p-2 bg-gray text-center mb-2">
          class: text-center
      </div>
      <div className="p-2 bg-gray text-right mb-2">
        class: text-right
      </div>
      <div className="p-2 bg-gray text-justify mb-2">
        class: text-justify
      </div>
      <div className="p-2 bg-gray text-lowercase mb-2">
        class: text-lowercase
      </div>
      <div className="p-2 bg-gray text-uppercase mb-2">
        class: text-uppercase
      </div>
      <div className="p-2 bg-gray text-capitalize mb-2">
        class: text-capitalize
      </div>
      <div className="p-2 bg-gray text-normal mb-2">
        class: text-normal
      </div>
      <div className="p-2 bg-gray text-bold mb-2">
        class: text-bold
      </div>
      <div className="p-2 bg-gray text-italic mb-2">
        class: text-italic
      </div>
      <div className="p-2 bg-gray text-large mb-2">
        class: text-large
      </div>
      <div className="p-2 bg-gray text-ellipsis mb-2">
        class: text-ellipsis
      </div>
      <div className="p-2 bg-gray text-clip mb-2">
        class: text-ellipsis
      </div>
      <div className="p-2 bg-gray text-break mb-2">
        class: text-ellipsis
      </div>
    </Container>
  ));
