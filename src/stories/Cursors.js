import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Container, Cols, Col } from '../ui/layout';

import CursorReadme from '../docs/Cursor.md';

storiesOf('Utilities/ Cursors', module)
  .addDecorator(withReadme(CursorReadme))
  .add('default', () => (
    <Container className="p-2">
      <Cols>
        <Col column size="4" className="pb-2">
          <div className="p-2 bg-gray c-hand">
            c-hand
          </div>
        </Col>
        <Col column size="4" className="pb-2">
          <div className="p-2 bg-gray c-move">
            c-move
          </div>
        </Col>
        <Col column size="4" className="pb-2">
          <div className="p-2 bg-gray c-zoom-in">
            c-zoom-in
          </div>
        </Col>
        <Col column size="4" className="pb-2">
          <div className="p-2 bg-gray c-zoom-out">
            c-zoom-out
          </div>
        </Col>
        <Col column size="4" className="pb-2">
          <div className="p-2 bg-gray c-not-allowed">
            c-not-allowed
          </div>
        </Col>
        <Col column size="4" className="pb-2">
          <div className="p-2 bg-gray c-auto">
            c-auto
          </div>
        </Col>
      </Cols>
    </Container>
  ));
