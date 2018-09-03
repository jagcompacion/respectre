# Label

<!-- STORY -->

### Usage

```js
import { Label } from 'respectre/elements';
```

### Properties

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| color     | string   | -            | -          |
| rounded   | boolean  | false        | -          |


### Roadmap

#### Default

```js
import { Label } from 'respectre/elements';

render() {
  return (
    <Label>Crime</Label>
  );
}
```

#### Colors

```js
import { Label } from 'respectre/elements';

render() {
  return (
    <Label color="primary">Crime</Label>
  );
}
```

#### Rounded

```js
import { Label } from 'respectre/elements';

render() {
  return (
    <Label color="primary" rounded>Crime</Label>
  );
}
```