import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { Chip, Avatar } from '../ui/components';
import { Button } from '../ui/elements';
import { Container } from '../ui/layout';

import ChipReadme from '../docs/Chip.md';

storiesOf('Components/ Chips', module)
  .addDecorator(withReadme(ChipReadme))
  .add('default', () => (
    <Container className="p-2">
      <Chip>
        Crime
      </Chip>
      <Chip>
        Drama
      </Chip>
    </Container>
  ))
  .add('with button', () => (
    <Container className="p-2">
      <Chip>
        Biography
        <Button color="clear" onClick={action('clicked')} />
      </Chip>
      <Chip>
        Mistery
        <Button color="clear" onClick={action('clicked')} />
      </Chip>
    </Container>
  ))
  .add('with avatar', () => (
    <Container className="p-2">
      <Chip>
        <Avatar>
          <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
        </Avatar>
        Yan Zhu
        <Button color="clear" onClick={action('clicked')} />
      </Chip>
      <Chip>
        <Avatar data-initial="TS" />
        Tony Stark
        <Button color="clear" onClick={action('clicked')} />
      </Chip>
    </Container>
  ));
