# Button

### Usage

```js
import { Button } from 'respectre/elements';
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
import { Button } from 'respectre/elements';

render() {
  return (
    <Button onClick={this.handleClick}>Send mail</Button>
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