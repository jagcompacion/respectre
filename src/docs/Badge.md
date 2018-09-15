# Badge

<!-- STORY -->

### Usage

```js
import { Badge } from 'respectre/components';
```

### Properties

#### Badge

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| data-badge | string   | -            | -          |


### Roadmap

#### Default

```js
import { Badge } from 'respectre/components';

render() {
  return (
    <Badge data-badge="8">
      Notifications
    </Badge>
  );
}
```

#### Button

```js
import { Button } from 'respectre/elements';

render() {
  return (
    <Button badge data-badge="8">
      Notifications
    </Button>
  );
}
```

#### Avatar

```js
import { Avatar } from 'respectre/components';

render() {
  return (
    <Avatar size="lg" badge data-badge="8">
      <img src="../img/avatar-1.png" />
    </Avatar>
  );
}
```
