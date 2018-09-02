import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Button } from '../ui/elements';
import { Container } from '../ui/layout';

import TooltipReadme from '../docs/Tooltip.md';

const position = {
  '': 'default',
  'tooltip-right': 'tooltip-right',
  'tooltip-bottom': 'tooltip-bottom',
  'tooltip-left': 'tooltip-left',
};

const defaultValue = '';

const style = {
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

storiesOf('Utilities/ Tooltips', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(TooltipReadme))
  .add('default', () => (
    <Container className="p-2" style={style}>
      <Button
        color="primary"
        className={`tooltip ${select('position', position, defaultValue)}`}
        data-tooltip={`this is ${select('position', position, defaultValue) || 'default'}`}
      >
        {select('position', position, defaultValue) || 'default'}
      </Button>
    </Container>
  ));
