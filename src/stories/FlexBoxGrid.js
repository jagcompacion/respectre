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

storiesOf('Layout/ Flexbox Grid', module)
  .add('default', () => (
    <Container className="p-2">
      <Cols className="pb-2">
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
        <Col column>
          <Block />
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="12">
          <Block>
            col-12 (100%)
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="9">
          <Block>
            col-9 (75%)
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="6">
          <Block>
            col-6 (50%)
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="3">
          <Block>
            col-3 (25%)
          </Block>
        </Col>
      </Cols>
    </Container>
  ))
  .add('gapless', () => (
    <Container className="p-2">
      <Cols className="pb-2" gapless>
        <Col column size="3">
          <Block>
            col-3
          </Block>
        </Col>
        <Col column size="9">
          <Block>
            col-9
          </Block>
        </Col>
      </Cols>
    </Container>
  ))
  .add('oneline', () => (
    <Container className="p-2">
      <Cols className="pb-2" oneline>
        <Col column size="9">
          <Block>
            col-9
          </Block>
        </Col>
        <Col column size="9">
          <Block>
            col-9
          </Block>
        </Col>
      </Cols>
    </Container>
  ))
  .add('grid offset', () => (
    <Container className="p-2">
      <Cols className="pb-2">
        <Col column size="2">
          <Block>
            col-2
          </Block>
        </Col>
        <Col column size="4" offset="center">
          <Block>
            col-4 col-mx-auto
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="2">
          <Block>
            col-2
          </Block>
        </Col>
        <Col column size="4" offset="left">
          <Block>
            col-4 col-ml-auto
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="4" offset="left">
          <Block>
            col-4 col-ml-auto
          </Block>
        </Col>
        <Col column size="2">
          <Block>
            col-2
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="4" offset="center">
          <Block>
            col-4 col-mx-auto
          </Block>
        </Col>
        <Col column size="2">
          <Block>
            col-2
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="4" offset="right">
          <Block>
            col-4 col-mr-auto
          </Block>
        </Col>
        <Col column size="2">
          <Block>
            col-2
          </Block>
        </Col>
      </Cols>
      <Cols className="pb-2">
        <Col column size="4" offset="center">
          <Block>
            col-4 col-mx-auto
          </Block>
        </Col>
      </Cols>
    </Container>
  ))
  .add('grid nesting', () => (
    <Container className="p-2">
      <Cols className="pb-2">
        <Col column size="6">
          <Block>
            col-6
          </Block>
          <Cols className="pt-2">
            <Col column size="6">
              <Block>
                col-6
              </Block>
            </Col>
            <Col column size="6">
              <Block>
                col-6
              </Block>
            </Col>
          </Cols>
        </Col>
        <Col column size="6">
          <Block>
            col-6
          </Block>
        </Col>
      </Cols>
    </Container>
  ));
