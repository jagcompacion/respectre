import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import {
  Popover,
  PopoverContainer,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
} from '../ui/components';
import { Container } from '../ui/layout';
import { Button } from '../ui/elements';

import PopoverReadme from '../docs/Popover.md';

const positions = {
  '': 'default',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

const defaultValue = '';

const style = {
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

storiesOf('Components/ Popovers', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(PopoverReadme))
  .add('default', () => (
    <Container className="p-2" style={style}>
      <Popover position={select('position', positions, defaultValue)}>
        <Button color="primary">
          Popover
        </Button>
        <PopoverContainer>
          <Card>
            <CardHeader>
              <CardTitle className="h5">
                Apple
              </CardTitle>
              <CardSubtitle className="text-gray">
                Software and hardware
              </CardSubtitle>
            </CardHeader>
            <CardBody>
              {`To make a contribution to the world by making tools for
              the mind that advance humankind.`}
            </CardBody>
            <CardFooter>
              <Button color="primary">
                Buy
              </Button>
            </CardFooter>
          </Card>
        </PopoverContainer>
      </Popover>
    </Container>
  ));
