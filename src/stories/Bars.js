import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Bar, BarItem,
} from '../ui/components';
import { Container } from '../ui/layout';

storiesOf('Components/ Bars', module)
  .add('default', () => (
    <Container className="p-2">
      <Bar className="mb-2">
        <BarItem
          value={25}
          min={0}
          max={100}
          tooltip
          data-tooltip={`${25}%`}
        />
      </Bar>
      <Bar size="sm" className="mb-2">
        <BarItem
          value={50}
          min={0}
          max={100}
          tooltip
          data-tooltip={`${50}%`}
        />
      </Bar>
    </Container>
  ))
  .add('multibars', () => (
    <Container className="p-2">
      <Bar className="mb-2">
        <BarItem
          value={25}
          min={0}
          max={100}
          tooltip
          data-tooltip={`${25}%`}
        >
          25%
        </BarItem>
        <BarItem
          value={35}
          min={0}
          max={100}
          tooltip
          data-tooltip={`${35}%`}
          background="#818bd5"
        >
          35%
        </BarItem>
      </Bar>
    </Container>
  ));
