import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import withDocsForm from './utils/withDocsForm';
import { Step, StepItem } from '../ui/components';
import { Container } from '../ui/layout';

import StepReadme from '../docs/Step.md';

storiesOf('Components/ Steps', module)
  .addDecorator(withDocsForm(StepReadme))
  .add('default', () => (
    <Container className="p-2">
      <Step>
        <StepItem>
          <a href="/" className="tooltip" data-tooltip="Step 1">
            Step 1
          </a>
        </StepItem>
        <StepItem>
          <a href="/" className="tooltip" data-tooltip="Step 2">
            Step 2
          </a>
        </StepItem>
        <StepItem active>
          <a href="/" className="tooltip" data-tooltip="Step 3">
            Step 3
          </a>
        </StepItem>
        <StepItem>
          <a href="/" className="tooltip" data-tooltip="Step 4">
            Step 4
          </a>
        </StepItem>
      </Step>
    </Container>
  ));
