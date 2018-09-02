import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Cols,
  Col,
  Container,
} from '../ui/layout';

const Block = ({ children }) => ( // eslint-disable-line
  <div style={{ padding: '.4rem', background: '#5755d9', color: '#fff' }}>
    {children}
  </div>
);

const Block1 = ({ children }) => ( // eslint-disable-line
  <div style={{ padding: '.4rem', background: '#de5200', color: '#fff' }}>
    {children}
  </div>
);

storiesOf('Layout/ Responsive', module)
  .add('default', () => (
    <Container>
      <Cols className="pb-2">
        <Col column size="6" sm="2">
          <Block>
            col-6 col-sm-2
          </Block>
        </Col>
        <Col column size="6" sm="10">
          <Block>
            col-6 col-sm-10
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="6" md="10">
          <Block>
            col-6 col-md-10
          </Block>
        </Col>
        <Col column size="6" md="2">
          <Block>
            col-6 col-md-2
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="6" lg="2">
          <Block>
            col-6 col-lg-2
          </Block>
        </Col>
        <Col column size="6" lg="10">
          <Block>
            col-6 col-lg-10
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="10">
          <Block>
            col-6
          </Block>
        </Col>
        <Col column size="2">
          <Block>
            col-6
          </Block>
        </Col>
      </Cols>
    </Container>
  ))
  .add('responsive container', () => (
    <div>
      <Container size="xl" className="pt-2">
        <Cols>
          <Col column size="12">
            <Block>
              grid-xl
            </Block>
          </Col>
        </Cols>
      </Container>
      <Container size="lg" className="pt-2">
        <Cols>
          <Col column size="12">
            <Block>
              grid-lg
            </Block>
          </Col>
        </Cols>
      </Container>
      <Container size="md" className="pt-2">
        <Cols>
          <Col column size="12">
            <Block>
              grid-md
            </Block>
          </Col>
        </Cols>
      </Container>
      <Container size="sm" className="pt-2">
        <Cols>
          <Col column size="12">
            <Block>
              grid-md
            </Block>
          </Col>
        </Cols>
      </Container>
      <Container size="xs" className="pt-2">
        <Cols>
          <Col column size="12">
            <Block>
              grid-md
            </Block>
          </Col>
        </Cols>
      </Container>
    </div>
  ))
  .add('responsive visibility', () => (
    <Container size="xl" className="pt-2">
      <Cols>
        <Col column size="12" className="hide-xl mb-2">
          <Block>
            hide-xl
          </Block>
        </Col>
        <Col column size="12" className="hide-lg mb-2">
          <Block>
            hide-lg
          </Block>
        </Col>
        <Col column size="12" className="hide-md mb-2">
          <Block>
            hide-md
          </Block>
        </Col>
        <Col column size="12" className="hide-sm mb-2">
          <Block>
            hide-sm
          </Block>
        </Col>
        <Col column size="12" className="hide-xs mb-2">
          <Block>
            hide-xs
          </Block>
        </Col>
      </Cols>
      <Cols>
        <Col column size="12" className="show-xl mb-2">
          <Block1>
            show-xl
          </Block1>
        </Col>
        <Col column size="12" className="show-lg mb-2">
          <Block1>
            show-lg
          </Block1>
        </Col>
        <Col column size="12" className="show-md mb-2">
          <Block1>
            show-md
          </Block1>
        </Col>
        <Col column size="12" className="show-sm mb-2">
          <Block1>
            show-sm
          </Block1>
        </Col>
        <Col column size="12" className="show-xs mb-2">
          <Block1>
            show-xs
          </Block1>
        </Col>
      </Cols>
    </Container>
  ));
