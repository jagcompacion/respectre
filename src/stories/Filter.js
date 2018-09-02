import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import {
  Filter,
  FilterTag,
  FilterNav,
  FilterBody,
  FilterItem,
} from '../ui/experimentals';
import {
  Chip,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
} from '../ui/components';
import { Container } from '../ui/layout';

import TabReadme from '../docs/Tab.md';

storiesOf('Experimentals/ Filter', module)
  .addDecorator(withReadme(TabReadme))
  .add('default', () => (
    <Container className="p-2">
      <Filter>
        <FilterTag id="tag-0" />
        <FilterTag id="tag-1" />
        <FilterTag id="tag-2" />
        <FilterNav>
          <Chip tag="label" for="tag-0">
            All
          </Chip>
          <Chip tag="label" for="tag-1">
            Action
          </Chip>
          <Chip tag="label" for="tag-2">
            Roleplaying
          </Chip>
        </FilterNav>
        <FilterBody className="columns">
          <FilterItem className="column col-4" data-tag="1">
            <Card>
              <CardHeader>
                <CardTitle>
                  Fallout 4
                </CardTitle>
                <CardSubtitle>
                  Roleplaying
                </CardSubtitle>
              </CardHeader>
            </Card>
          </FilterItem>
          <FilterItem className="column col-4" data-tag="2">
            <Card>
              <CardHeader>
                <CardTitle>
                  Halo 5
                </CardTitle>
                <CardSubtitle>
                  Shooter
                </CardSubtitle>
              </CardHeader>
            </Card>
          </FilterItem>
          <FilterItem className="column col-4" data-tag="1">
            <Card>
              <CardHeader>
                <CardTitle>
                  Quantum Break
                </CardTitle>
                <CardSubtitle>
                  Action
                </CardSubtitle>
              </CardHeader>
            </Card>
          </FilterItem>
        </FilterBody>
      </Filter>
    </Container>
  ));
