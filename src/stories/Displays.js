import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Container } from '../ui/layout';

import DisplayReadme from '../docs/Display.md';

storiesOf('Utilities/ Displays', module)
  .addDecorator(withReadme(DisplayReadme))
  .add('default', () => (
    <Container className="p-2">
      <div className="p-2 bg-gray d-block mb-2">
        display: block
      </div>
      <div className="mb-2">
        <div className="p-2 bg-gray d-inline">
          display: inline
        </div>
      </div>
      <div className="p-2 bg-gray d-inline-block mb-2">
        display: inline-block
      </div>
      <div className="p-2 bg-gray d-flex mb-2">
        display: flex
      </div>
      <div className="p-2 bg-gray d-inline-flex mb-2">
        display: inline-flex
      </div>
      <div className="p-2 bg-gray d-none mb-2">
        display: none
      </div>
      <div className="p-2 bg-gray d-hide mb-2">
        display: none
      </div>
      <div className="p-2 bg-gray d-visible mb-2">
        visibility: visible
      </div>
      <div className="p-2 bg-gray d-invisible mb-2">
        display: hidden
      </div>
      <div className="p-2 bg-gray text-hide mb-2">
        hide text contents
      </div>
      <div className="p-2 bg-gray text-assistive mb-2">
        assistive text for screen reader
      </div>
    </Container>
  ));
