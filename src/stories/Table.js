import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Table } from '../ui/elements';

import withDocsCustom from './utils/withDocsCustom';
import TableReadme from '../docs/Table.md';

storiesOf('Elements/ Table', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsCustom(TableReadme))
  .add('default', () => (
    <Table
      hover={boolean('hover', false)}
      striped={boolean('striped', false)}
    >
      <thead>
        <tr>
          <th>
            name
          </th>
          <th>
            genre
          </th>
          <th>
            release date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="active">
          <td>
            The Shawshank Redemption
          </td>
          <td>
            Crime, Drama
          </td>
          <td>
            14 October 1994
          </td>
        </tr>
        <tr>
          <td>
            The Shawshank Redemption
          </td>
          <td>
            Crime, Drama
          </td>
          <td>
            14 October 1994
          </td>
        </tr>
        <tr>
          <td>
            The Shawshank Redemption
          </td>
          <td>
            Crime, Drama
          </td>
          <td>
            14 October 1994
          </td>
        </tr>
      </tbody>
    </Table>
  ));
