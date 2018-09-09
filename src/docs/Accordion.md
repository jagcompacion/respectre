# Accordion

<!-- STORY -->

### Usage

```js
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '../ui/components';
```

### Accordion

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| className | string  | -            | -          |

### AccordionHeader

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| className | string  | -            | -          |
| type     | string  | checkbox      | -          |

### AccordionBody

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| className | string  | -            | -          |


### Roadmap

#### Default

```js
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Menu,
  MenuItem,
} from '../ui/components';
import {
  Icon
} from '../ui/elements';

render() {
  return (
    <div>
      <Accordion>
        <AccordionHeader id="elements" type="checkbox/radio">
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
        ...
      <Accordion>
    </div>
  );
}
```

#### Colors

```js
import { Button } from 'respectre/elements';

render() {
  return (
    <Button color="primary">
      Send mail
    </Button>
  );
}
```

#### Size

```js
import { Button } from 'respectre/elements';

render() {
  return (
    <Button size="lg">
      Send mail
    </Button>
  );
}
```

#### Clear

```js
import { Button } from 'respectre/elements';

render() {
  return (
    <Button color="clear" />
  );
}
```