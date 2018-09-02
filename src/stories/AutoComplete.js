import React from 'react';
import 'spectre.css/dist/spectre-exp.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import {
  Autocomplete,
  AutocompleteInput,
} from '../ui/experimentals';
import {
  Chip,
  Avatar,
  Menu,
  MenuItem,
  Tile,
  TileIcon,
  TileContent,
} from '../ui/components';
import {
  Button,
  Input,
  FormIcon,
} from '../ui/elements';
import { Container } from '../ui/layout';

import AutocompleteReadme from '../docs/Autocomplete.md';

storiesOf('Experimentals/ Autocomplete', module)
  .addDecorator(withReadme(AutocompleteReadme))
  .add('default', () => (
    <Container className="p-2">
      <Autocomplete>
        <AutocompleteInput className="is-focused">
          <div className="has-icon-left">
            <Input size="sm" placeholder="Add user here" />
            <FormIcon className="loading" />
          </div>
        </AutocompleteInput>
        <Menu>
          <MenuItem>
            <a href="/">
              <Tile centered>
                <TileIcon>
                  <Avatar size="sm">
                    <img src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="Steve Rogers" />
                  </Avatar>
                </TileIcon>
                <TileContent>
                  <mark>
                    S
                  </mark>
                  teve Roger
                </TileContent>
              </Tile>
            </a>
          </MenuItem>
        </Menu>
      </Autocomplete>
    </Container>
  ))
  .add('multiselect', () => (
    <Container className="p-2">
      <Autocomplete>
        <AutocompleteInput className="is-focused">
          <Chip>
            Thor Odinson
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <div className="has-icon-left">
            <Input size="sm" placeholder="Add user here" value="S" />
            <FormIcon className="loading" />
          </div>
        </AutocompleteInput>
        <Menu>
          <MenuItem>
            <a href="/">
              <Tile centered>
                <TileContent>
                  <mark>
                    S
                  </mark>
                  teve Roger
                </TileContent>
              </Tile>
            </a>
          </MenuItem>
        </Menu>
      </Autocomplete>
    </Container>
  ))
  .add('avatars', () => (
    <Container className="p-2">
      <Autocomplete>
        <AutocompleteInput className="is-focused">
          <Chip>
            <Avatar size="sm">
              <img src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="Thor Odinson" />
            </Avatar>
            Thor Odinson
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <div className="has-icon-left">
            <Input size="sm" placeholder="Add user here" value="S" />
            <FormIcon className="loading" />
          </div>
        </AutocompleteInput>
        <Menu>
          <MenuItem>
            <a href="/">
              <Tile centered>
                <TileIcon>
                  <Avatar size="sm">
                    <img src="https://picturepan2.github.io/spectre/img/avatar-4.png" alt="Steve Rogers" />
                  </Avatar>
                </TileIcon>
                <TileContent>
                  <mark>
                    S
                  </mark>
                  teve Roger
                </TileContent>
              </Tile>
            </a>
          </MenuItem>
        </Menu>
      </Autocomplete>
    </Container>
  ))
  .add('multiline', () => (
    <Container className="p-2">
      <Autocomplete>
        <AutocompleteInput className="is-focused">
          <Chip>
            Thor Odinson
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <Chip>
            Bruce Banner
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <Chip>
            Steve Rogers
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <Chip>
            Tony Stark
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <Chip>
            Natasha
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <Chip>
            The batman
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <div className="has-icon-left">
            <Input size="sm" placeholder="Add user here" value="S" />
            <FormIcon className="loading" />
          </div>
        </AutocompleteInput>
      </Autocomplete>
    </Container>
  ))
  .add('oneline', () => (
    <Container className="p-2">
      <Autocomplete oneline>
        <AutocompleteInput className="is-focused">
          <Chip>
            Thor Odinson
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <Chip>
            Bruce Banner
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <Chip>
            Steve Rogers
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <Chip>
            Tony Stark
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <Chip>
            Natasha
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <Chip>
            The batman
            <Button color="clear" aria-label="Close" role="button" />
          </Chip>
          <div className="has-icon-left">
            <Input size="sm" placeholder="Add user here" value="S" />
            <FormIcon className="loading" />
          </div>
        </AutocompleteInput>
      </Autocomplete>
    </Container>
  ));
