# ButtonGroup

<!-- STORY -->

### Usage

```js
import { ButtonGroup } from 'respectre/components';
```

### Properties

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| className | string  | -            | -          |
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

#### Block

```js
import { Button, ButtonGroup } from 'respectre/elements';

render() {
  return (
    <ButtonGroup block>
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

#### Active

```js
import { Button, ButtonGroup } from 'respectre/elements';

render() {
  return (
    <ButtonGroup>
      <Button color="lg" active>Button1</Button>
      <Button color="lg">Button2</Button>
      <Button color="lg">Button3</Button>
    </ButtonGroup>
  );
}
```

#### Loading

```js
import { Button, ButtonGroup } from 'respectre/elements';

render() {
  return (
    <ButtonGroup>
      <Button color="lg" loading>Button1</Button>
      <Button color="lg">Button2</Button>
      <Button color="lg">Button3</Button>
    </ButtonGroup>
  );
}
```

#### Disabled

```js
import { Button, ButtonGroup } from 'respectre/elements';

render() {
  return (
    <ButtonGroup>
      <Button color="lg" disabled>Button1</Button>
      <Button color="lg">Button2</Button>
      <Button color="lg">Button3</Button>
    </ButtonGroup>
  );
}
```