import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Breadcrumb, BreadcrumbItem } from '../ui/components';
import { Container } from '../ui/layout';

import BreadcrumbsReadme from '../docs/Breadcrumb.md';

storiesOf('Components/ Breadcrumbs', module)
  .addDecorator(withReadme(BreadcrumbsReadme))
  .add('default', () => (
    <Container className="p-2">
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">
            Home
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">
            Settings
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">
            Change avatar
          </a>
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
  ));
