# Button

### Usage

```js
import { ButtonGroup } from 'respectre/components';
```

### Properties

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| className | string  | -            | -          |
| onClick  | func     | -            |            |
| color    | string   | -            | -          |
| size     | string   | -            | -          |
| block    | boolean  | false        | -          |
| active   | boolean  | false        | -          |
| loading  | boolean  | false        | -          |
| disabled | boolean  | false        | -          |

### Roadmap

#### Default

```js
import { Button, ButtonGroup } from 'respectre/elements';

render() {
  return (
    <ButtonGroup>
      <Button onClick={this.handleClick}>Button1</Button>
      <Button onClick={this.handleClick}>Button2</Button>
      <Button onClick={this.handleClick}>Button3</Button>
    </ButtonGroup>
  );
}
```

#### Colors

```js
import { Button, ButtonGroup } from 'respectre/elements';

render() {
  return (
    <ButtonGroup>
      <Button color="primary">Button1</Button>
      <Button color="primary">Button2</Button>
      <Button color="primary">Button3</Button>
    </ButtonGroup>
  );
}
```

#### Size

```js
import { Button, ButtonGroup } from 'respectre/elements';

render() {
  return (
    <ButtonGroup>
      <Button color="lg">Button1</Button>
      <Button color="lg">Button2</Button>
      <Button color="lg">Button3</Button>
    </ButtonGroup>
  );
}
```