import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { Navbar, NavbarSection, NavbarBrand } from '../ui/components';
import { Button, InputGroup, Input } from '../ui/elements';

storiesOf('Components/ Navbar', module)
  .add('default', () => (
    <Navbar className="p-2">
      <NavbarSection>
        <NavbarBrand href="https://google.com" className="mr-2">
          Spectre.css
        </NavbarBrand>
        <Button color="link" tag="a" href="https://google.com">
          Docs
        </Button>
        <Button color="link" tag="a" href="https://google.com">
          Github
        </Button>
      </NavbarSection>
      <NavbarSection>
        <InputGroup inline>
          <Input type="search" />
          <Button inputGroup color="primary">
            Search
          </Button>
        </InputGroup>
      </NavbarSection>
    </Navbar>
  ));
