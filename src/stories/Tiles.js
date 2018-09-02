import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import {
  Tile, TileIcon, TileContent,
  TileTitle, TileSubtitle, TileAction,
  Avatar,
} from '../ui/components';
import { Button, Icon } from '../ui/elements';
import { Container } from '../ui/layout';

import TileReadme from '../docs/Tiles.md';

const exampleIcon = {
  background: '#5755d9',
  height: '2rem',
  width: '2rem',
  color: '#fff',
  alignContent: 'space-around',
  alignItems: 'center',
  borderRadius: '.1rem',
  display: 'flex',
  fontSize: '1.2rem',
};

storiesOf('Components/ Tiles', module)
  .addDecorator(withReadme(TileReadme))
  .add('default', () => (
    <Container className="p-2">
      <Tile>
        <TileIcon>
          <Avatar size="lg">
            <img src="https://picturepan2.github.io/spectre/img/avatar-3.png" alt="Avatar" />
          </Avatar>
        </TileIcon>
        <TileContent>
          <TileTitle tag="p">
            The Avengers
          </TileTitle>
          <TileSubtitle className="text-gray" tag="p">
            {`Earth's Mightiest Heroes joined forces to take on threats
            that were too big for any one hero to tackle...`}
          </TileSubtitle>
        </TileContent>
        <TileAction>
          <Button color="primary">
            Join
          </Button>
        </TileAction>
      </Tile>
    </Container>
  ))
  .add('buttons in content', () => (
    <Container className="p-2">
      <Tile>
        <TileIcon>
          <Avatar size="lg">
            <img src="https://picturepan2.github.io/spectre/img/avatar-3.png" alt="Avatar" />
          </Avatar>
        </TileIcon>
        <TileContent>
          <TileTitle tag="p">
            The Avengers
          </TileTitle>
          <TileSubtitle className="text-gray" tag="p">
            {`Earth's Mightiest Heroes joined forces to take on threats
            that were too big for any one hero to tackle...`}
          </TileSubtitle>
          <p>
            <Button size="sm" color="primary">
              Join
            </Button>
            {' '}
            <Button size="sm">
              Contact
            </Button>
          </p>
        </TileContent>
      </Tile>
    </Container>
  ))
  .add('vertically aligned center', () => (
    <Container className="p-2">
      <Tile centered>
        <TileIcon>
          <div style={exampleIcon}>
            <Icon icon="icon-mail" centered />
          </div>
        </TileIcon>
        <TileContent>
          <TileTitle>
            spectre-docs.pdf
          </TileTitle>
          <TileSubtitle className="text-gray">
            14MB · Public · 1 Jan, 2017
          </TileSubtitle>
        </TileContent>
        <TileAction>
          <Button color="link">
            <Icon icon="icon-more-vert" />
          </Button>
        </TileAction>
      </Tile>
    </Container>
  ));
