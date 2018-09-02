import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Label,
} from '../ui/elements';
import { Container } from '../ui/layout';

storiesOf('Elements/ Labels', module)
  .add('default', () => (
    <Container className="p-2">
      <Label className="mr-1">
        default label
      </Label>
      <Label color="primary" className="mr-1">
        primary label
      </Label>
      <Label color="secondary" className="mr-1">
        secondary label
      </Label>
      <Label color="success" className="mr-1">
        success label
      </Label>
      <Label color="warning" className="mr-1">
        warning label
      </Label>
      <Label color="error" className="mr-1">
        error label
      </Label>
    </Container>
  ))
  .add('rounded', () => (
    <Container className="p-2">
      <Label className="mr-1" rounded>
        default label
      </Label>
      <Label color="primary" className="mr-1" rounded>
        primary label
      </Label>
      <Label color="secondary" className="mr-1" rounded>
        secondary label
      </Label>
      <Label color="success" className="mr-1" rounded>
        success label
      </Label>
      <Label color="warning" className="mr-1" rounded>
        warning label
      </Label>
      <Label color="error" className="mr-1" rounded>
        error label
      </Label>
    </Container>
  ));
