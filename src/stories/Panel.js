import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import withDocsForm from './utils/withDocsForm';
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelSubtitle,
  PanelNav,
  PanelBody,
  PanelFooter,
  Tab,
  TabItem,
  Avatar,
  Tile,
  TileContent,
  TileTitle,
  TileSubtitle,
  TileAction,
} from '../ui/components';
import { Container } from '../ui/layout';
import { Button, Icon } from '../ui/elements';

import PanelReadme from '../docs/Panel.md';

storiesOf('Components/ Panel', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsForm(PanelReadme))
  .add('default', () => (
    <Container className="p-2">
      <Panel>
        <PanelHeader className="text-center">
          <Avatar size="lg">
            <img src="https://picturepan2.github.io/spectre/img/avatar-2.png" alt="..." />
          </Avatar>
          <PanelTitle className="h5 mt-10">
            Bruce Banner
          </PanelTitle>
          <PanelSubtitle>
            THE HULK
          </PanelSubtitle>
        </PanelHeader>
        <PanelNav>
          <Tab block>
            <TabItem active>
              <a href="/">
                Profile
              </a>
            </TabItem>
            <TabItem>
              <a href="/">
                Files
              </a>
            </TabItem>
            <TabItem>
              <a href="/">
                Tasks
              </a>
            </TabItem>
          </Tab>
        </PanelNav>
        <PanelBody>
          <Tile centered className="my-2">
            <TileContent>
              <TileTitle className="text-bold">
                E-mail
              </TileTitle>
              <TileSubtitle>
                bruce.banner@hulk.com
              </TileSubtitle>
            </TileContent>
            <TileAction>
              <Button color="link" size="lg" action className="tooltip tooltip-left" data-tooltip="Edit E-mail">
                <Icon icon="icon-edit" />
              </Button>
            </TileAction>
          </Tile>
          <Tile centered className="my-2">
            <TileContent>
              <TileTitle className="text-bold">
                Skype
              </TileTitle>
              <TileSubtitle>
                bruce.banner
              </TileSubtitle>
            </TileContent>
            <TileAction>
              <Button color="link" size="lg" action className="tooltip tooltip-left" data-tooltip="Edit E-mail">
                <Icon icon="icon-edit" />
              </Button>
            </TileAction>
          </Tile>
          <Tile centered className="my-2">
            <TileContent>
              <TileTitle className="text-bold">
                Location
              </TileTitle>
              <TileSubtitle>
                Dayton, Ohio
              </TileSubtitle>
            </TileContent>
            <TileAction>
              <Button color="link" size="lg" action className="tooltip tooltip-left" data-tooltip="Edit E-mail">
                <Icon icon="icon-edit" />
              </Button>
            </TileAction>
          </Tile>
        </PanelBody>
        <PanelFooter>
          <Button color="primary" block>
            Save
          </Button>
        </PanelFooter>
      </Panel>
    </Container>
  ));
