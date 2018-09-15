import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { Divider } from '../ui/components';
import { Cols, Col } from '../ui/layout';
import withDocsForm from './utils/withDocsForm';
import DividerReadme from '../docs/Divider.md';

const classes = {
  'text-center': 'text-center',
  'text-right': 'text-right',
  'text-left': 'text-left',
};

storiesOf('Components/ Dividers', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsForm(DividerReadme))
  .add('default', () => (
    <div>
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </p>
      <Divider
        className={select('class', classes, 'text-center')}
        data-content={boolean('with text', false) ? 'OR' : ''}
      />
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </p>
    </div>
  ))
  .add('vertical', () => (
    <div>
      <Cols>
        <Col column>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
          dictum in vehicula sit amet, feugiat tempus tellus.`}
        </Col>
        <Divider
          vertical
          className={select('class', classes, 'text-center')}
          data-content={boolean('with text', false) ? 'OR' : ''}
        />
        <Col column>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
          dictum in vehicula sit amet, feugiat tempus tellus.`}
        </Col>
      </Cols>
    </div>
  ));
