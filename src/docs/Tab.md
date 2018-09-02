# Tab

### Usage

```js
import {
  Tab,
  TabItem,
} from 'respectre/components';
```

### Properties

#### Tab

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| block     | boolean  | false        | -          |

#### TabItem

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| active    | boolean  | false        | -          |
| action    | boolean  | false        | -          |

### Roadmap

#### Default

```js
import {
  Tab,
  TabItem,
} from 'respectre/components';

render() {
  return (
    <Tab block={true/false}>
      <TabItem>
        <a href="/">
          Music
        </a>
      </TabItem>
      <TabItem>
        <a href="/">
          Playlists
        </a>
      </TabItem>
      <TabItem>
        <a href="/" className="active">
          Radio
        </a>
      </TabItem>
      <TabItem>
        <a href="/">
          Connect
        </a>
      </TabItem>
    </Tab>
  );
}
```
#### with badges

```js
import {
  Tab,
  TabItem,
  Badge,
} from 'respectre/components';

render() {
  return (
    <Tab block={true/false}>
      <TabItem active>
        <Badge tag="a" data-badge="9">
          Music
        </Badge>
      </TabItem>
      <TabItem>
        <Badge tag="a" data-badge="999">
        Playlists
        </Badge>
      </TabItem>
      <TabItem>
        <a href="/">
          Radio
        </a>
      </TabItem>
    </Tab>
  );
}
```

#### with action

```js
import {
  Tab,
  TabItem,
} from 'respectre/components';

import {
  InputGroup,
  Input,
  Button,
} from 'respectre/elements';

render() {
  return (
    <Tab block={true/false}>
      <TabItem active>
        <a href="/">
          Music
        </a>
      </TabItem>
      <TabItem>
        <a href="/">
          Playlists
        </a>
      </TabItem>
      <TabItem>
        <a href="/">
          Radio
        </a>
      </TabItem>
      <TabItem action>
        <InputGroup inline>
          <Input size="sm" placeholder="search" />
          <Button size="sm" color="primary" inputGroup>
            Search
          </Button>
        </InputGroup>
      </TabItem>
    </Tab>
  );
}
```