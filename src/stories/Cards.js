import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Card, CardImage, CardHeader,
  CardTitle, CardSubtitle, CardBody,
  CardFooter,
} from '../ui/components';
import { Img, Button } from '../ui/elements';
import withDocsForm from './utils/withDocsForm';
import CardReadme from '../docs/Card.md';

storiesOf('Components/ Cards', module)
  .addDecorator(withDocsForm(CardReadme))
  .add('default', () => (
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
  ));
