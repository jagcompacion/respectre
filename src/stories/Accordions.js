import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Accordion, AccordionHeader, AccordionBody,
  Menu, MenuItem,
} from '../ui/components';
import { Container } from '../ui/layout';
import { Icon } from '../ui/elements';

storiesOf('Components/ Accordions', module)
  .add('checkbox', () => (
    <Container className="p-2">
      <Accordion>
        <AccordionHeader id="elements" type="checkbox">
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
        <AccordionHeader id="layout" type="checkbox">
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
    </Container>
  ))
  .add('radio', () => (
    <Container className="p-2">
      <Accordion>
        <AccordionHeader id="elements" type="radio">
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
        <AccordionHeader id="layout" type="radio">
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
    </Container>
  ));
