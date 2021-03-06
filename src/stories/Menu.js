import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import withDocsForm from './utils/withDocsForm';
import {
  Menu, MenuItem, Divider,
  MenuBadge,
} from '../ui/components';
import {
  Label, FormLabel, Input,
  FormIcon,
} from '../ui/elements';
import { Container } from '../ui/layout';

import MenuReadme from '../docs/Menu.md';

storiesOf('Components/ Menu', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsForm(MenuReadme))
  .add('default', () => (
    <Container className="p-2">
      <Menu
        nav={boolean('nav', false)}
      >
        <Divider data-content="LINKS" />
        <MenuItem>
          <a href="/">
            Slack
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/">
            Hipchat
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/">
            Skype
          </a>
        </MenuItem>
      </Menu>
    </Container>
  ))
  .add('with badge', () => (
    <Container className="p-2">
      <Menu
        nav={boolean('nav', false)}
      >
        <MenuItem>
          <MenuBadge>
            <Label color="primary">
              2
            </Label>
          </MenuBadge>
          <a href="/" className="active">
            My profile
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/">
            Settings
          </a>
        </MenuItem>
        <Divider />
        <MenuItem>
          <a href="/">
            Logout
          </a>
        </MenuItem>
      </Menu>
    </Container>
  ))
  .add('with checkboxes', () => (
    <Container className="p-2">
      <Menu
        nav={boolean('nav', false)}
      >
        <MenuItem>
          <FormLabel type="switch">
            <Input type="checkbox" />
            <FormIcon />
            Show notifications
          </FormLabel>
        </MenuItem>
        <MenuItem>
          <FormLabel type="checkbox">
            <Input type="checkbox" />
            <FormIcon />
            Remove filters
          </FormLabel>
        </MenuItem>
        <MenuItem>
          <FormLabel type="radio">
            <Input type="radio" name="gender" />
            <FormIcon />
            Male
          </FormLabel>
          <FormLabel type="radio">
            <Input type="radio" name="gender" />
            <FormIcon />
            Female
          </FormLabel>
        </MenuItem>
      </Menu>
    </Container>
  ));
