import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import {
  OffCanvas,
  OffCanvasButton,
  OffCanvasContent,
  OffCanvasOverlay,
  OffCanvasSidebar,
} from '../ui/experimentals';
import { Icon } from '../ui/elements';

import NavReadme from '../docs/Nav.md';

storiesOf('Experimentals/ OffCanvas', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(NavReadme))
  .add('default', () => (
    <OffCanvas>
      <OffCanvasButton>
        <Icon icon="icon-menu" />
      </OffCanvasButton>
      <OffCanvasSidebar active={boolean('active', false)}>
        this is sidebar
      </OffCanvasSidebar>
      <OffCanvasOverlay />
      <OffCanvasContent>
        <h4>
          Lorem ipsum
        </h4>
        <p>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis
          quis sodales risus. Etiam euismod ornare consequat.`}
        </p>
        <p>
          {`Climb leg rub face on everything give attitude nap all day for under
           the bed. Chase mice attack feet but rub face on everything hopped up 
           on goofballs.`}
        </p>
      </OffCanvasContent>
    </OffCanvas>
  ));
