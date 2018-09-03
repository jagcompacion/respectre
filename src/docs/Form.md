# Form

<!-- STORY -->

### Usage

```js
import { Form } from 'respectre/elements';
```

### Properties

#### Form

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| horizontal | boolean | false        | -          |

#### FormGroup

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### FormLabel

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| htmlFor   | string   | -            | -          |
| inline    | boolean  | -            | -          |
| sizes     | string   | -            | -          |

#### FormIcon

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| icon      | string   | -            | -          |

### Roadmap

#### Default

```js
import {
  Form,
  FormGroup,
  FormLabel,
  Input,
} from 'respectre/elements';

render() {
  return (
    <Form>
      <FormGroup>
        <FormLabel htmlFor="name">
          Name
        </FormLabel>
        <Input id="name" />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">
          Email
        </FormLabel>
        <Input id="email" type="email" />
      </FormGroup>
    </Form>
  );
}
```

#### Horizontal

```js
import {
  FormGroup,
  FormLabel,
  Input,
  FormIcon,
  Form,
} from 'respectre/elements';
import { Col } from 'respectre/layout';

render() {
  <Form horizontal>
    <FormGroup>
      <Col size="3" sm="12">
        <FormLabel htmlFor="name">
          Name
        </FormLabel>
      </Col>
      <Col size="9" sm="12">
        <Input id="name" placeholder="Name" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col size="3" sm="12">
        <FormLabel htmlFor="email">
          Email
        </FormLabel>
      </Col>
      <Col size="9" sm="12">
        <Input type="email" id="email" placeholder="Email" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col size="3" sm="12">
        <FormLabel>
          Gender
        </FormLabel>
      </Col>
      <Col size="9" sm="12">
        <FormLabel type="radio">
          <Input type="radio" name="gender" />
          <FormIcon />
          Male
        </FormLabel>
        <FormLabel type="radio">
          <Input type="radio" name="gender" checked />
          <FormIcon />
          Female
        </FormLabel>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col size="3" sm="12">
        <FormLabel>
          Source
        </FormLabel>
      </Col>
      <Col size="9" sm="12">
        <Input type="select" multiple>
          <option>
            Slack
          </option>
          <option>
            Skype
          </option>
          <option>
            Hipchat
          </option>
        </Input>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col size="9" sm="12" offset="left">
        <FormLabel type="switch">
          <Input type="checkbox" />
          <FormIcon />
          Send me emails with news and tips
        </FormLabel>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col size="3" sm="12">
        <FormLabel htmlFor="message">
          Message
        </FormLabel>
      </Col>
      <Col size="9" sm="12">
        <Input type="textarea" id="message" placeholder="Textarea" rows="3" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col size="9" sm="12" offset="left">
        <FormLabel type="checkbox">
          <Input type="checkbox" />
          <FormIcon />
          Remember me
        </FormLabel>
      </Col>
    </FormGroup>
  </Form>
}
```

#### Default

```js
import {
  Form,
  FormGroup,
  FormLabel,
  FormIcon,
  Input,
} from 'respectre/elements';

render() {
  return (
    <Form>
      <FormGroup>
        <FormLabel type="radio" inline>
          <Input type="radio" name="gender" checked />
          <FormIcon />
          Male
        </FormLabel>
        <FormLabel type="radio" inline>
          <Input type="radio" name="gender" />
          <FormIcon />
          Female
        </FormLabel>
      </FormGroup>
    </Form>
  );
}
```