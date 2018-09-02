import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import {
  Card, CardImage, CardHeader,
  CardTitle, CardSubtitle, CardBody,
  CardFooter,
} from '../ui/components';
import { Img, Button, ButtonGroup } from '../ui/elements';
import { Container } from '../ui/layout';

import CardReadme from '../docs/Card.md';

storiesOf('Components/ Cards', module)
  .addDecorator(withReadme(CardReadme))
  .add('default', () => (
    <Container className="p-2">
      <Card>
        <CardImage>
          <Img src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" alt="" />
        </CardImage>
        <CardHeader>
          <CardTitle className="h5">
            Microsoft
          </CardTitle>
          <CardSubtitle className="text-gray">
            Software and hardware
          </CardSubtitle>
        </CardHeader>
        <CardBody>
          Empower every person and every organization on the planet to achieve more.
        </CardBody>
        <CardFooter>
          <Button color="primary">
            Do
          </Button>
        </CardFooter>
      </Card>
    </Container>
  ))
  .add('header first', () => (
    <Container className="p-2">
      <Card>
        <CardHeader>
          <CardTitle className="h5">
            Apple
          </CardTitle>
          <CardSubtitle className="text-gray">
            Hardware and software
          </CardSubtitle>
        </CardHeader>
        <CardImage>
          <Img src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" alt="" />
        </CardImage>
        <CardBody>
          To make a contribution to the world by making tools for the mind that advance humankind.
        </CardBody>
        <CardFooter>
          <ButtonGroup block>
            <Button active>
              Buy
            </Button>
            <Button>
              Sell
            </Button>
            <Button>
              Wishlist
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Container>
  ));
