import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Icon,
  Button,
} from '../ui/elements';
import { Container, Cols, Col } from '../ui/layout';

storiesOf('Elements/ Icons', module)
  .add('navigations', () => (
    <Container className="p-2">
      <Cols>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-arrow-up" />
          </Button>
          <div>
            icon-arrow-up
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-arrow-right" />
          </Button>
          <div>
            icon-arrow-right
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-arrow-down" />
          </Button>
          <div>
            icon-arrow-down
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-arrow-left" />
          </Button>
          <div>
            icon-arrow-left
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-upward" />
          </Button>
          <div>
            icon-upward
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-forward" />
          </Button>
          <div>
            icon-forward
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-downward" />
          </Button>
          <div>
            icon-downward
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-back" />
          </Button>
          <div>
            icon-back
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-caret" />
          </Button>
          <div>
            icon-caret
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-menu" />
          </Button>
          <div>
            icon-menu
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-apps" />
          </Button>
          <div>
            icon-apps
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-more-horiz" />
          </Button>
          <div>
            icon-more-horiz
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-more-vert" />
          </Button>
          <div>
            icon-more-vert
          </div>
        </Col>
      </Cols>
    </Container>
  ))
  .add('actions', () => (
    <Container className="p-2">
      <Cols>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-resize-horiz" />
          </Button>
          <div>
            icon-resize-horiz
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-resize-vert" />
          </Button>
          <div>
            icon-resize-vert
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-plus" />
          </Button>
          <div>
            icon-plus
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-minus" />
          </Button>
          <div>
            icon-minus
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-cross" />
          </Button>
          <div>
            icon-cross
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-check" />
          </Button>
          <div>
            icon-check
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-stop" />
          </Button>
          <div>
            icon-stop
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-shutdown" />
          </Button>
          <div>
            icon-shutdown
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-refresh" />
          </Button>
          <div>
            icon-refresh
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-search" />
          </Button>
          <div>
            icon-search
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-flag" />
          </Button>
          <div>
            icon-flag
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-bookmark" />
          </Button>
          <div>
            icon-bookmark
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-edit" />
          </Button>
          <div>
            icon-edit
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-delete" />
          </Button>
          <div>
            icon-delete
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-share" />
          </Button>
          <div>
            icon-share
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-download" />
          </Button>
          <div>
            icon-download
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-upload" />
          </Button>
          <div>
            icon-upload
          </div>
        </Col>
      </Cols>
    </Container>
  ))
  .add('objects', () => (
    <Container className="p-2">
      <Cols>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-mail" />
          </Button>
          <div>
            icon-mail
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-people" />
          </Button>
          <div>
            icon-people
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-message" />
          </Button>
          <div>
            icon-message
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-photo" />
          </Button>
          <div>
            icon-photo
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-time" />
          </Button>
          <div>
            icon-time
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-location" />
          </Button>
          <div>
            icon-location
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-link" />
          </Button>
          <div>
            icon-link
          </div>
        </Col>
        <Col column size="3">
          <Button color="primary">
            <Icon icon="icon-emoji" />
          </Button>
          <div>
            icon-emoji
          </div>
        </Col>
      </Cols>
    </Container>
  ))
  .add('sizes', () => (
    <Container className="p-2">
      <Cols>
        <Col column size="3">
          <p>
            <Icon icon="icon-mail" />
          </p>
          <div>
            default
          </div>
        </Col>
        <Col column size="3">
          <p>
            <Icon icon="icon-mail" size="2x" />
          </p>
          <div>
            icon-2x (32px)
          </div>
        </Col>
        <Col column size="3">
          <p>
            <Icon icon="icon-mail" size="3x" />
          </p>
          <div>
            icon-3x (48px)
          </div>
        </Col>
        <Col column size="3">
          <p>
            <Icon icon="icon-mail" size="4x" />
          </p>
          <div>
            icon-4x (64px)
          </div>
        </Col>
      </Cols>
    </Container>
  ));
