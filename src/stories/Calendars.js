import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import {
  Calendar,
  CalendarNav,
  CalendarContainer,
  CalendarHeader,
  CalendarDate,
  DateItem,
  CalendarBody,
} from '../ui/experimentals';
import { Container } from '../ui/layout';
import { Button, Icon } from '../ui/elements';

import ChipReadme from '../docs/Chip.md';

storiesOf('Experimentals/ Calendar', module)
  .addDecorator(withReadme(ChipReadme))
  .add('default', () => (
    <Container className="p-2">
      <Calendar>
        <CalendarNav>
          <Button color="link" action size="lg">
            <Icon icon="icon-arrow-left" />
          </Button>
          <div>
            March 2017
          </div>
          <Button color="link" action size="lg">
            <Icon icon="icon-arrow-right" />
          </Button>
        </CalendarNav>
        <CalendarContainer>
          <CalendarHeader>
            <CalendarDate>
              Sun
            </CalendarDate>
            <CalendarDate>
              Mon
            </CalendarDate>
            <CalendarDate>
              Tue
            </CalendarDate>
            <CalendarDate>
              Wed
            </CalendarDate>
            <CalendarDate>
              Thu
            </CalendarDate>
            <CalendarDate>
              Fri
            </CalendarDate>
            <CalendarDate>
              Sat
            </CalendarDate>
          </CalendarHeader>
          <CalendarBody>
            <CalendarDate month="prev">
              <DateItem>
                26
              </DateItem>
            </CalendarDate>
            <CalendarDate month="prev">
              <DateItem>
                27
              </DateItem>
            </CalendarDate>
            <CalendarDate month="prev">
              <DateItem>
                28
              </DateItem>
            </CalendarDate>
            <CalendarDate>
              <DateItem>
                1
              </DateItem>
            </CalendarDate>
            <CalendarDate>
              <DateItem>
                2
              </DateItem>
            </CalendarDate>
            <CalendarDate>
              <DateItem>
                3
              </DateItem>
            </CalendarDate>
            <CalendarDate>
              <DateItem>
                4
              </DateItem>
            </CalendarDate>
            <CalendarDate className="tooltip" data-tooltip="You have an appointment">
              <DateItem className="badge">
                5
              </DateItem>
            </CalendarDate>
            <CalendarDate>
              <DateItem>
                6
              </DateItem>
            </CalendarDate>
            <CalendarDate>
              <DateItem>
                7
              </DateItem>
            </CalendarDate>
            <CalendarDate range process="start">
              <DateItem>
                8
              </DateItem>
            </CalendarDate>
            <CalendarDate range>
              <DateItem>
                9
              </DateItem>
            </CalendarDate>
            <CalendarDate range>
              <DateItem>
                10
              </DateItem>
            </CalendarDate>
            <CalendarDate range process="end">
              <DateItem>
                11
              </DateItem>
            </CalendarDate>
            <CalendarDate>
              <DateItem>
                12
              </DateItem>
            </CalendarDate>
            <CalendarDate>
              <DateItem>
                13
              </DateItem>
            </CalendarDate>
            <CalendarDate>
              <DateItem>
                14
              </DateItem>
            </CalendarDate>
            <CalendarDate>
              <DateItem>
                15
              </DateItem>
            </CalendarDate>
            <CalendarDate month="next">
              <DateItem>
                16
              </DateItem>
            </CalendarDate>
            <CalendarDate month="next">
              <DateItem>
                17
              </DateItem>
            </CalendarDate>
            <CalendarDate month="next">
              <DateItem>
                18
              </DateItem>
            </CalendarDate>
          </CalendarBody>
        </CalendarContainer>
      </Calendar>
    </Container>
  ));
