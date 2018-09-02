import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Divider } from '../ui/components';
import { Container, Cols, Col } from '../ui/layout';

import DividerReadme from '../docs/Divider.md';

storiesOf('Components/ Dividers', module)
  .addDecorator(withReadme(DividerReadme))
  .add('default', () => (
    <Container className="p-2">
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </p>
      <Divider />
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </p>
    </Container>
  ))
  .add('with text', () => (
    <Container className="p-2">
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </p>
      <Divider data-content="OR" className="text-center" />
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </p>
    </Container>
  ))
  .add('vertical', () => (
    <Container className="p-2">
      <Cols>
        <Col column>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
          dictum in vehicula sit amet, feugiat tempus tellus.`}
        </Col>
        <Divider vertical data-content="OR" className="text-center" />
        <Col column>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
          dictum in vehicula sit amet, feugiat tempus tellus.`}
        </Col>
      </Cols>
    </Container>
  ));
