import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
  Input,
  FormLabel,
  FormIcon,
  Form,
} from '../ui/elements';
import withDocsForm from './utils/withDocsForm';
import InputReadme from '../docs/Input.md';

const sizes = {
  '': 'default',
  lg: 'lg',
  sm: 'sm',
};

const defaultValue = '';

storiesOf('Elements/ Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsForm(InputReadme))
  .add('default', () => (
    <Input type="text" placeholder="This is text input" />
  ))
  .add('textarea', () => (
    <Input type="textarea" rows="3" placeholder="This is textarea" />
  ))
  .add('select', () => (
    <Input
      type="select"
      multiple={boolean('multiple', false)}
    >
      <option>
        Choose an option
      </option>
      <option>
        Slack
      </option>
      <option>
        Skype
      </option>
      <option>
        Hipchat
      </option>
    </Input>
  ))
  .add('radio', () => (
    <Form>
      <FormLabel type="radio">
        <Input type="radio" name="gender" checked />
        <FormIcon />
        Male
      </FormLabel>
      <FormLabel type="radio">
        <Input type="radio" name="gender" />
        <FormIcon />
        Female
      </FormLabel>
    </Form>
  ))
  .add('checkbox', () => (
    <Form>
      <FormLabel type="checkbox">
        <Input type="checkbox" name="gender" checked />
        <FormIcon />
        Male
      </FormLabel>
      <FormLabel type="checkbox">
        <Input type="checkbox" name="gender" />
        <FormIcon />
        Female
      </FormLabel>
    </Form>
  ))
  .add('switch', () => (
    <Form>
      <FormLabel type="switch">
        <Input type="checkbox" checked />
        <FormIcon />
        Yes
      </FormLabel>
      <FormLabel type="switch">
        <Input type="checkbox" />
        <FormIcon />
        No
      </FormLabel>
    </Form>
  ))
  .add('sizes', () => (
    <Input size={select('size', sizes, defaultValue)} placeholder="Sizes" />
  ));