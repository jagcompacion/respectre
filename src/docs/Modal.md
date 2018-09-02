# Modal

### Usage

```js
import {
  Modal,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from 'respectre/components';
```

### Properties

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| show      | boolean  | false        | -          |
| size      | string   | -            | -          |


### Roadmap

#### Default

```js
import {
  Modal,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from 'respectre/components';
import { Button } from 'respectre/elements';

toggle() {
  this.setState({ isShow: !this.state.isShow });
}

render() {
  return (
    <Modal show={this.state.isShow}>
      <ModalOverlay toggle={this.toggle} />
      <ModalContainer>
        <ModalHeader>
          <Button
            color="clear"
            className="float-right"
            onClick={this.toggle}
          />
          <ModalTitle className="h5">
            Modal title
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          ...
        </ModalBody>
        <ModalFooter>
          <Button color="primary">
            Share
          </Button>
          {' '}
          <Button color="link" onClick={this.toggle}>
            Close
          </Button>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
}
```

#### Sizes

```js
import {
  Modal,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from 'respectre/components';
import { Button } from 'respectre/elements';

render() {
  return (
    <Modal size="lg">
      ...
    </Modal>
  );
}
```