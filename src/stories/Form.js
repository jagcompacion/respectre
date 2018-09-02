import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  FormGroup, FormLabel, Input,
  FormIcon, Form, InputGroup,
  InputGroupAddon, Button, InputHint,
} from '../ui/elements';
import { Container, Cols, Col } from '../ui/layout';

storiesOf('Elements/ Form', module)
  .add('default', () => (
    <Container className="p-2">
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
    </Container>
  ))
  .add('textarea', () => (
    <Container className="p-2">
      <FormGroup>
        <FormLabel htmlFor="message">
        Message
        </FormLabel>
        <Input type="textarea" id="message" placeholder="This is a placeholder" />
      </FormGroup>
    </Container>
  ))
  .add('select', () => (
    <Container className="p-2">
      <FormGroup>
        <FormLabel htmlFor="select">
        Select
        </FormLabel>
        <Input id="select" type="select">
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
      </FormGroup>
      <br />
      <FormGroup>
        <FormLabel htmlFor="select">
        Select multiple
        </FormLabel>
        <Input id="select" type="select" multiple>
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
      </FormGroup>
    </Container>
  ))
  .add('radio', () => (
    <Container className="p-2">
      <FormGroup>
        <FormLabel htmlFor="gender">
          Gender
        </FormLabel>
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
      </FormGroup>
    </Container>
  ))
  .add('checkbox', () => (
    <Container className="p-2">
      <FormGroup>
        <FormLabel htmlFor="gender">
          Gender
        </FormLabel>
        <FormLabel type="checkbox">
          <Input type="checkbox" checked />
          <FormIcon />
          Male
        </FormLabel>
        <FormLabel type="checkbox">
          <Input type="checkbox" />
          <FormIcon />
          Female
        </FormLabel>
      </FormGroup>
    </Container>
  ))
  .add('switch', () => (
    <Container className="p-2">
      <FormGroup>
        <FormLabel htmlFor="gender">
          Gender
        </FormLabel>
        <FormLabel type="switch">
          <Input type="checkbox" checked />
          <FormIcon />
          Male
        </FormLabel>
        <FormLabel type="switch">
          <Input type="checkbox" id="gender" />
          <FormIcon />
          Female
        </FormLabel>
      </FormGroup>
    </Container>
  ))
  .add('inline', () => (
    <Container className="p-2">
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
      <FormGroup>
        <FormLabel type="checkbox" inline>
          <Input type="checkbox" name="gender" checked />
          <FormIcon />
          Male
        </FormLabel>
        <FormLabel type="checkbox" inline>
          <Input type="checkbox" name="gender" />
          <FormIcon />
          Female
        </FormLabel>
      </FormGroup>
      <FormGroup>
        <FormLabel type="switch" inline>
          <Input type="checkbox" name="gender" checked />
          <FormIcon />
          Male
        </FormLabel>
        <FormLabel type="switch" inline>
          <Input type="checkbox" name="gender" />
          <FormIcon />
          Female
        </FormLabel>
      </FormGroup>
    </Container>
  ))
  .add('horizontal', () => (
    <Container className="p-2">
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
    </Container>
  ))
  .add('sizes', () => (
    <Container className="p-2">
      <Cols>
        <Col column size="4" className="p-2">
          <FormLabel size="sm">
            FormLabel
          </FormLabel>
        </Col>
        <Col column size="4" className="p-2">
          <Input size="sm" placeholder="Name" />
        </Col>
        <Col column size="4" className="p-2">
          <Input type="select" size="sm">
            <option>
              Choose an option
            </option>
          </Input>
        </Col>
        <Col column size="4" className="p-2">
          <FormLabel size="lg">
            FormLabel
          </FormLabel>
        </Col>
        <Col column size="4" className="p-2">
          <Input size="lg" placeholder="Name" />
        </Col>
        <Col column size="4" className="p-2">
          <Input type="select" size="lg">
            <option>
              Choose an option
            </option>
          </Input>
        </Col>
      </Cols>
    </Container>
  ))
  .add('icons', () => (
    <Container className="p-2">
      <Cols>
        <Col column size="4" className="p-2">
          <div className="has-icon-left">
            <Input size="sm" placeholder="Name" />
            <FormIcon icon="icon-arrow-right" />
          </div>
        </Col>
        <Col column size="4" className="p-2">
          <div className="has-icon-left">
            <Input placeholder="Name" />
            <FormIcon icon="icon-arrow-right" />
          </div>
        </Col>
        <Col column size="4" className="p-2">
          <div className="has-icon-left">
            <Input size="lg" placeholder="Name" />
            <FormIcon icon="icon-arrow-right" />
          </div>
        </Col>
        <Col column size="4" className="p-2">
          <div className="has-icon-right">
            <Input size="sm" placeholder="Name" />
            <FormIcon icon="icon-check" />
          </div>
        </Col>
        <Col column size="4" className="p-2">
          <div className="has-icon-right">
            <Input placeholder="Name" />
            <FormIcon icon="icon-check" />
          </div>
        </Col>
        <Col column size="4" className="p-2">
          <div className="has-icon-right">
            <Input size="lg" placeholder="Name" />
            <FormIcon icon="icon-check" />
          </div>
        </Col>
        <Col column size="4" className="p-2">
          <div className="has-icon-right">
            <Input size="sm" placeholder="Name" />
            <FormIcon className="loading" />
          </div>
        </Col>
        <Col column size="4" className="p-2">
          <div className="has-icon-right">
            <Input placeholder="Name" />
            <FormIcon className="loading" />
          </div>
        </Col>
        <Col column size="4" className="p-2">
          <div className="has-icon-right">
            <Input size="lg" placeholder="Name" />
            <FormIcon className="loading" />
          </div>
        </Col>
      </Cols>
    </Container>
  ))
  .add('input types', () => (
    <Container className="p-2">
      <Form horizontal>
        <FormGroup>
          <Col size="3" sm="12">
            <FormLabel htmlFor="email">
              Email
            </FormLabel>
          </Col>
          <Col size="9" sm="12">
            <Input id="email" type="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col size="3" sm="12">
            <FormLabel htmlFor="url">
              Url
            </FormLabel>
          </Col>
          <Col size="9" sm="12">
            <Input type="url" id="url" placeholder="Url" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col size="3" sm="12">
            <FormLabel htmlFor="search">
              Search
            </FormLabel>
          </Col>
          <Col size="9" sm="12">
            <Input type="search" id="search" placeholder="Search" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col size="3" sm="12">
            <FormLabel htmlFor="tel">
              Tel
            </FormLabel>
          </Col>
          <Col size="9" sm="12">
            <Input type="tel" id="tel" placeholder="Tel" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col size="3" sm="12">
            <FormLabel htmlFor="password">
              Password
            </FormLabel>
          </Col>
          <Col size="9" sm="12">
            <Input type="password" id="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col size="3" sm="12">
            <FormLabel htmlFor="number">
              Number
            </FormLabel>
          </Col>
          <Col size="9" sm="12">
            <Input type="number" id="number" placeholder="Number" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col size="3" sm="12">
            <FormLabel htmlFor="date">
              Date
            </FormLabel>
          </Col>
          <Col size="9" sm="12">
            <Input type="date" id="date" placeholder="Date" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col size="3" sm="12">
            <FormLabel htmlFor="color">
              Color
            </FormLabel>
          </Col>
          <Col size="9" sm="12">
            <Input type="color" id="color" value="#5755d9" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col size="3" sm="12">
            <FormLabel htmlFor="file">
              File
            </FormLabel>
          </Col>
          <Col size="9" sm="12">
            <Input type="file" id="file" />
          </Col>
        </FormGroup>
      </Form>
    </Container>
  ))
  .add('input groups', () => (
    <Container className="p-2">
      <Cols>
        <Col column size="6" sm="12" className="p-2">
          <InputGroup>
            <Input size="sm" placeholder="Username" />
            <Input type="select" size="sm">
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
          </InputGroup>
        </Col>
        <Col column size="6" sm="12" className="p-2">
          <InputGroup>
            <InputGroupAddon size="sm">
              slack.com/
            </InputGroupAddon>
            <Input size="sm" placeholder="site name" />
            <Button size="sm" inputGroup color="primary">
              Submit
            </Button>
          </InputGroup>
        </Col>
        <Col column size="6" sm="12" className="p-2">
          <InputGroup>
            <Input placeholder="Username" />
            <Input type="select">
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
          </InputGroup>
        </Col>
        <Col column size="6" sm="12" className="p-2">
          <InputGroup>
            <InputGroupAddon>
              slack.com/
            </InputGroupAddon>
            <Input placeholder="site name" />
            <Button inputGroup color="primary">
              Submit
            </Button>
          </InputGroup>
        </Col>
        <Col column size="6" sm="12" className="p-2">
          <InputGroup>
            <Input placeholder="Username" size="lg" />
            <Input type="select" size="lg">
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
          </InputGroup>
        </Col>
        <Col column size="6" sm="12" className="p-2">
          <InputGroup>
            <InputGroupAddon size="lg">
              slack.com/
            </InputGroupAddon>
            <Input placeholder="site name" size="lg" />
            <Button inputGroup color="primary" size="lg">
              Submit
            </Button>
          </InputGroup>
        </Col>
        <Col column size="6" sm="12" className="p-2">
          <InputGroup>
            <FormLabel type="switch">
              <Input type="checkbox" />
              <FormIcon />
            </FormLabel>
            <Input placeholder="name" />
          </InputGroup>
        </Col>
        <Col column size="6" sm="12" className="p-2">
          <InputGroup>
            <FormLabel type="checkbox">
              <Input type="checkbox" />
              <FormIcon />
            </FormLabel>
            <Input placeholder="name" />
          </InputGroup>
        </Col>
      </Cols>
    </Container>
  ))
  .add('validations', () => (
    <Container className="p-2">
      <FormGroup>
        <FormLabel htmlFor="name">
          Name
        </FormLabel>
        <Input id="name" success placeholder="Name" />
        <InputHint>
          The name is valid
        </InputHint>
      </FormGroup>
      <FormGroup error>
        <FormLabel htmlFor="password">
          Password
        </FormLabel>
        <Input id="password" placeholder="Password" />
        <InputHint>
          The password is invalid
        </InputHint>
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="select">
        Select
        </FormLabel>
        <Input id="select" type="select" error>
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
        <InputHint>
          The option is invalid
        </InputHint>
      </FormGroup>
      <FormGroup success>
        <FormLabel htmlFor="select">
        Select
        </FormLabel>
        <Input id="select" type="select">
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
        <InputHint>
          The option is valid
        </InputHint>
      </FormGroup>
      <FormGroup error>
        <FormLabel htmlFor="gender">
          Gender
        </FormLabel>
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
      </FormGroup>
      <FormGroup error>
        <FormLabel type="switch">
          <Input type="checkbox" checked />
          <FormIcon />
          Send me emails with news and tips
        </FormLabel>
      </FormGroup>
      <FormGroup error>
        <FormLabel type="checkbox">
          <Input type="checkbox" checked />
          <FormIcon />
          Im not a robot
        </FormLabel>
      </FormGroup>
    </Container>
  ))
  .add('disabled', () => (
    <Container className="p-2">
      <FormGroup>
        <FormLabel htmlFor="name">
          Name
        </FormLabel>
        <Input id="name" placeholder="Name" disabled />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="gender">
          Gender
        </FormLabel>
        <FormLabel type="radio">
          <Input type="radio" name="gender" checked disabled />
          <FormIcon />
          Male
        </FormLabel>
        <FormLabel type="radio">
          <Input type="radio" name="gender" disabled />
          <FormIcon />
          Female
        </FormLabel>
      </FormGroup>
      <FormGroup>
        <FormLabel type="switch">
          <Input type="checkbox" disabled />
          <FormIcon />
          Send me emails with news and tips
        </FormLabel>
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="message">
          Message
        </FormLabel>
        <Input type="textarea" id="message" placeholder="Textarea" rows="3" disabled />
      </FormGroup>
      <FormGroup>
        <FormLabel type="checkbox">
          <Input type="checkbox" disabled />
          <FormIcon />
          Remember me
        </FormLabel>
      </FormGroup>
    </Container>
  ));
