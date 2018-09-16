import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import withDocsForm from './utils/withDocsForm';
import {
  Modal,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from '../ui/components';
import { Button } from '../ui/elements';
import { Container } from '../ui/layout';

import ModalReadme from '../docs/Modal.md';

const sizes = {
  '': 'default',
  lg: 'lg',
  sm: 'sm',
};

const defaultValue = '';

storiesOf('Components/ Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsForm(ModalReadme))
  .add('default', () => (
    <Container className="p-2">
      <Modal
        show={boolean('show', true)}
        size={select('size', sizes, defaultValue)}
      >
        <ModalOverlay />
        <ModalContainer>
          <ModalHeader toggle={e => e}>
            <Button
              color="clear"
              className="float-right"
            />
            <ModalTitle className="h5">
              Modal title
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>
              This is the content inside the modal.
            </p>
            <h4>
              Lorem ipsum
            </h4>
            <p>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
              risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis 
              quis sodales risus. Etiam euismod ornare consequat.`}
            </p>
            <p>
              {`Climb leg rub face on everything give attitude nap all day for 
              under the bed. Chase mice attack feet but rub face on everything 
              hopped up on goofballs.`}
            </p>
            <h4>
              Candy ipsum
            </h4>
            <p>
              {`Efficiently unleash cross-media information without cross-media 
              value. Quickly maximize timely deliverables for real-time schemas. 
              Dramatically maintain clicks-and-mortar.`}
            </p>
            <p>
              {`Climb leg rub face on everything give attitude nap all day for 
              under the bed. Chase mice attack feet but rub face on everything 
              hopped up on goofballs.`}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">
              Share
            </Button>
            {' '}
            <Button color="link">
              Close
            </Button>
          </ModalFooter>
        </ModalContainer>
      </Modal>
    </Container>
  ));
