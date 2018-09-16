# Chip

<!-- STORY -->

### Usage

```js
import {
  Popover,
  PopoverContainer,
} from 'respectre/components';
```

### Properties

#### Popover

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| position  | string   | -            | -          |

#### PopoverContainer

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

### Roadmap

#### Default

```js
import {
  Popover,
  PopoverContainer,
} from 'respectre/components';

render() {
  return (
    <Popover position="right">
      <Button color="primary">right popover</Button>
      <PopoverContainer>
        <Card>
          <CardHeader>
            ...
          </CardHeader>
          <CardBody>
            ...
          </CardBody>
          <CardFooter>
            ...
          </CardFooter>
        </Card>
      </PopoverContainer>
    </Popover>
  );
}
```

