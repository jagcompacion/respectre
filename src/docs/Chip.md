# Chip

<!-- STORY -->

### Usage

```js
import { Chip } from 'respectre/components';
```

### Properties

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |


### Roadmap

#### Default

```js
import { Chip } from 'respectre/components';

render() {
  return (
    <Chip>Crime</Chip>
  );
}
```

#### With button

```js
import { Chip } from 'respectre/components';
import { Button } from 'respectre/elements';

render() {
  return (
    <Chip>
      Biography
      <Button color="clear" onClick={action('clicked')} />
    </Chip>
  );
}
```

#### With avatar

```js
import { Chip, Avatar } from 'respectre/components';
import { Button } from 'respectre/elements';

render() {
  return (
    <Chip>
      <Avatar>
        <img src="../img/avatar1.png" />
      </Avatar>
      Yan Zhu
      <Button color="clear" onClick={action('clicked')} />
    </Chip>
  );
}
```
