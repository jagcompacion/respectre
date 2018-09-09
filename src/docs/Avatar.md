# Avatar

<!-- STORY -->

### Usage

```js
import {
  Avatar,
  AvatarIcon,
  AvatarPresence,
} from '../ui/components';
```

### Avatar

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| className | string  | -            | -          |
| size     | string  | -            | -          |

### AvatarIcon

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| className | string  | -            | -          |
| type     | string  | checkbox      | -          |

### AvatarPresence

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| className | string  | -            | -          |
| presence | string  | offline        | -          |


### Roadmap

#### Default

```js
import { Avatar } from '../ui/components';

render() {
  return (
    <Avatar>
      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
    </Avatar>
  );
}
```

#### Sizes

```js
import { Avatar } from '../ui/components';

render() {
  return (
    <Avatar size="xl/lg/sm/xs">
      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
    </Avatar>
  );
}
```

#### Data initial

```js
import { Avatar } from '../ui/components';

render() {
  return (
    <Avatar data-initial="JC">
      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
    </Avatar>
  );
}
```

#### Size

```js
import { Avatar } from '../ui/components';

render() {
  return (
    <Avatar size="xl/lg/sm/xs">
      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
    </Avatar>
  );
}
```

#### With icon

```js
import {
  Avatar,
  AvatarIcon,
} from '../ui/components';

render() {
  return (
    <Avatar>
      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      <AvatarIcon src="https://picturepan2.github.io/spectre/img/avatar-1.png" />
    </Avatar>
  );
}
```

#### Presense

```js
import {
  Avatar,
  AvatarIcon,
} from '../ui/components';

render() {
  return (
    <Avatar>
      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..." />
      <AvatarPresence presence="online/busy/away/offline" />
    </Avatar>
  );
}
```