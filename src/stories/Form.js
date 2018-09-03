import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  FormGroup, FormLabel, Input,
  FormIcon, Form,
} from '../ui/elements';
import { Col } from '../ui/layout';
import withDocsForm from './utils/withDocsForm';
import FormReadme from '../docs/Form.md';

storiesOf('Elements/ Form', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsForm(FormReadme))
  .add('default', () => (
    <Form>
      <FormGroup>
        <FormLabel htmlFor="name">
          Name
        </FormLabel>
        <Input id="name" />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">
          Email
        </FormLabel>
        <Input id="email" type="email" />
      </FormGroup>
    </Form>
  ))
  .add('horizontal', () => (
    <Form horizontal>
      <FormGroup>
        <Col size="3" sm="12">
          <FormLabel htmlFor="name">
            Name
          </FormLabel>
        </Col>
        <Col size="9" sm="12">
          <Input id="name" placeholder="Name" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col size="3" sm="12">
          <FormLabel htmlFor="email">
            Email
          </FormLabel>
        </Col>
        <Col size="9" sm="12">
          <Input type="email" id="email" placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col size="3" sm="12">
          <FormLabel>
            Gender
          </FormLabel>
        </Col>
        <Col size="9" sm="12">
          <FormLabel type="radio">
            <Input type="radio" name="gender" />
            <FormIcon />
            Male
          </FormLabel>
          <FormLabel type="radio">
            <Input type="radio" name="gender" checked />
            <FormIcon />
            Female
          </FormLabel>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col size="3" sm="12">
          <FormLabel>
            Source
          </FormLabel>
        </Col>
        <Col size="9" sm="12">
          <Input type="select" multiple>
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
        </Col>
      </FormGroup>
      <FormGroup>
        <Col size="9" sm="12" offset="left">
          <FormLabel type="switch">
            <Input type="checkbox" />
            <FormIcon />
            Send me emails with news and tips
          </FormLabel>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col size="3" sm="12">
          <FormLabel htmlFor="message">
            Message
          </FormLabel>
        </Col>
        <Col size="9" sm="12">
          <Input type="textarea" id="message" placeholder="Textarea" rows="3" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col size="9" sm="12" offset="left">
          <FormLabel type="checkbox">
            <Input type="checkbox" />
            <FormIcon />
            Remember me
          </FormLabel>
        </Col>
      </FormGroup>
    </Form>
  ))
  .add('inline', () => (
    <Form>
      <FormGroup>
        <FormLabel type="radio" inline>
          <Input type="radio" name="gender" checked />
          <FormIcon />
          Male
        </FormLabel>
        <FormLabel type="radio" inline>
          <Input type="radio" name="gender" />
          <FormIcon />
          Female
        </FormLabel>
      </FormGroup>
    </Form>
  ));
