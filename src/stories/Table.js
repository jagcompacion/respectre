import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { Table } from '../ui/elements';
import { Container } from '../ui/layout';

storiesOf('Elements/ Table', module)
  .add('default', () => (
    <Container className="p-2">
      <Table>
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
    </Container>
  ))
  .add('striped', () => (
    <Container className="p-2">
      <Table striped>
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
    </Container>
  ))
  .add('hovered', () => (
    <Container className="p-2">
      <Table hover>
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
    </Container>
  ));
