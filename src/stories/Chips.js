import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Chip, Avatar } from '../ui/components';
import { Button } from '../ui/elements';
import { Container } from '../ui/layout';
import withDocsCustom from './utils/withDocsCustom';

import ChipReadme from '../docs/Chip.md';

storiesOf('Components/ Chips', module)
  .addDecorator(withDocsCustom(ChipReadme))
  .add('default', () => (
    <div>
      <Chip>
        Crime
      </Chip>
      <Chip>
        Drama
      </Chip>
    </div>
  ))
  .add('with button', () => (
    <div>
      <Chip>
        Biography
        <Button color="clear" onClick={action('clicked')} />
      </Chip>
      <Chip>
        Mistery
        <Button color="clear" onClick={action('clicked')} />
      </Chip>
    </div>
  ))
  .add('with avatar', () => (
    <div>
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
    </div>
  ));
