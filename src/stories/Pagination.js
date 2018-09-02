import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import {
  Pagination,
  PageItem,
  PageItemSubtitle,
  PageItemTitle,
} from '../ui/components';
import { Container } from '../ui/layout';

import PaginationReadme from '../docs/Pagination.md';

const types = {
  prev: 'prev',
  next: 'next',
};

storiesOf('Components/ Pagination', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(PaginationReadme))
  .add('default', () => (
    <Container className="p-2">
      <Pagination>
        <PageItem disabled={boolean('disabled', true)}>
          <a href="/" tabIndex="-1">
            Previous
          </a>
        </PageItem>
        <PageItem active={boolean('active', true)}>
          <a href="/">
            1
          </a>
        </PageItem>
        <PageItem>
          <a href="/">
            2
          </a>
        </PageItem>
        <PageItem>
          <a href="/">
            3
          </a>
        </PageItem>
        <PageItem>
          <span>
            ...
          </span>
        </PageItem>
        <PageItem>
          <a href="/">
            12
          </a>
        </PageItem>
        <PageItem>
          <a href="/">
            Next
          </a>
        </PageItem>
      </Pagination>
    </Container>
  ))
  .add('previous/next', () => (
    <Container className="p-2">
      <Pagination>
        <PageItem type={select('type left', types, 'prev')}>
          <a href="/">
            <PageItemSubtitle>
              Previous
            </PageItemSubtitle>
            <PageItemTitle className="h5">
              Getting started
            </PageItemTitle>
          </a>
        </PageItem>
        <PageItem type={select('type right', types, 'next')}>
          <a href="/">
            <PageItemSubtitle>
              Next
            </PageItemSubtitle>
            <PageItemTitle className="h5">
              Layout
            </PageItemTitle>
          </a>
        </PageItem>
      </Pagination>
    </Container>
  ));
