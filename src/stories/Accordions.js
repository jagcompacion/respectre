import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
  Accordion, AccordionHeader, AccordionBody,
  Menu, MenuItem,
} from '../ui/components';
import { Icon } from '../ui/elements';
import withDocsForm from './utils/withDocsForm';
import AccordionReadme from '../docs/Accordion.md';

const types = {
  checkbox: 'checkbox',
  radio: 'radio',
};

storiesOf('Components/ Accordions', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsForm(AccordionReadme))
  .add('default', () => (
    <div>
      <Accordion>
        <AccordionHeader id="elements" type={select('type', types, 'checkbox')}>
          <Icon icon="icon-arrow-right" className="mr-1" />
          Elements
        </AccordionHeader>
        <AccordionBody>
          <Menu nav>
            <MenuItem>
              <a href="/">
                Element 1
              </a>
            </MenuItem>
            <MenuItem>
              <a href="/">
                Element 2
              </a>
            </MenuItem>
          </Menu>
        </AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader id="layout" type={select('type', types, 'checkbox')}>
          <Icon icon="icon-arrow-right" className="mr-1" />
          Layout
        </AccordionHeader>
        <AccordionBody>
          <Menu nav>
            <MenuItem>
              <a href="/">
                Layout 1
              </a>
            </MenuItem>
            <MenuItem>
              <a href="/">
                Layout 2
              </a>
            </MenuItem>
          </Menu>
        </AccordionBody>
      </Accordion>
    </div>
  ));

