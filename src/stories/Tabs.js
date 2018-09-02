import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Tab, TabItem, Badge } from '../ui/components';
import { InputGroup, Input, Button } from '../ui/elements';
import { Container } from '../ui/layout';

import TabReadme from '../docs/Tab.md';

storiesOf('Components/ Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(TabReadme))
  .add('default', () => (
    <Container className="p-2">
      <Tab block={boolean('block', true)}>
        <TabItem active>
          <a href="/">
            Music
          </a>
        </TabItem>
        <TabItem>
          <a href="/">
            Playlists
          </a>
        </TabItem>
        <TabItem>
          <a href="/">
            Radio
          </a>
        </TabItem>
        <TabItem>
          <a href="/">
            Connect
          </a>
        </TabItem>
      </Tab>
    </Container>
  ))
  .add('with badges', () => (
    <Container className="p-2">
      <Tab block={boolean('block', true)}>
        <TabItem active>
          <Badge tag="a" data-badge="9">
            Music
          </Badge>
        </TabItem>
        <TabItem>
          <Badge tag="a" data-badge="999">
          Playlists
          </Badge>
        </TabItem>
        <TabItem>
          <a href="/">
            Radio
          </a>
        </TabItem>
      </Tab>
    </Container>
  ))
  .add('with action', () => (
    <Container className="p-2">
      <Tab block={boolean('block', false)}>
        <TabItem active>
          <a href="/">
            Music
          </a>
        </TabItem>
        <TabItem>
          <a href="/">
            Playlists
          </a>
        </TabItem>
        <TabItem>
          <a href="/">
            Radio
          </a>
        </TabItem>
        <TabItem action>
          <InputGroup inline>
            <Input size="sm" placeholder="search" />
            <Button size="sm" color="primary" inputGroup>
              Search
            </Button>
          </InputGroup>
        </TabItem>
      </Tab>
    </Container>
  ));
