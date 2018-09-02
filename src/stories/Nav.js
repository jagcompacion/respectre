import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import {
  Nav,
  NavItem,
} from '../ui/components';
import { Container } from '../ui/layout';

import NavReadme from '../docs/Nav.md';

storiesOf('Components/ Nav', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(NavReadme))
  .add('default', () => (
    <Container className="p-2">
      <Nav>
        <NavItem>
          <a href="/">
            Elements
          </a>
        </NavItem>
        <NavItem active={boolean('active', true)}>
          <a href="/">
            Layout
          </a>
          <Nav>
            <NavItem>
              <a href="/">
                Flexbox grid
              </a>
            </NavItem>
            <NavItem>
              <a href="/">
                Responsive
              </a>
            </NavItem>
            <NavItem>
              <a href="/">
                Navbar
              </a>
            </NavItem>
            <NavItem>
              <a href="/">
                Empty states
              </a>
            </NavItem>
          </Nav>
        </NavItem>
        <NavItem>
          <a href="/">
            Components
          </a>
        </NavItem>
        <NavItem>
          <a href="/">
            UtiNavItemties
          </a>
        </NavItem>
      </Nav>
    </Container>
  ));
