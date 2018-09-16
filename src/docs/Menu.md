# Menu

<!-- STORY -->

### Usage

```js
import {
  Menu,
  MenuItem,
  MenuBadge,
  Divider,
} from 'respectre/components';
```

### Properties

#### Menu

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| nav       | boolean  | false        | -          |

#### MenuItem

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### MenuBadge

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |


### Roadmap

#### Default

```js
import {
  Menu,
  MenuItem,
  Divider,
} from 'respectre/components';

render() {
  return (
    <Menu>
      <Divider data-content="LINKS" />
      <MenuItem>
        <a href="/">
          Slack
        </a>
      </MenuItem>
      <MenuItem>
        <a href="/">
          Hipchat
        </a>
      </MenuItem>
      <MenuItem>
        <a href="/">
          Skype
        </a>
      </MenuItem>
    </Menu>
  );
}
```

#### Nav menu

```js
import {
  Menu,
  MenuItem,
  Divider,
} from 'respectre/components';

render() {
  return (
    <Menu nav>
      <Divider data-content="LINKS" />
      <MenuItem>
        <a href="/">
          Slack
        </a>
      </MenuItem>
      <MenuItem>
        <a href="/">
          Hipchat
        </a>
      </MenuItem>
      <MenuItem>
        <a href="/">
          Skype
        </a>
      </MenuItem>
    </Menu>
  );
}
```

#### With badge

```js
import {
  Menu,
  MenuItem,
  MenuBadge,
  Divider,
} from 'respectre/components';
import { Label } from 'respectre/elements';

render() {
  return (
    <Menu>
      <MenuItem>
        <MenuBadge>
          <Label color="primary">
            2
          </Label>
        </MenuBadge>
        <a href="/" className="active">
          My profile
        </a>
      </MenuItem>
      <MenuItem>
        <a href="/">
          Settings
        </a>
      </MenuItem>
      <Divider />
      <MenuItem>
        <a href="/">
          Logout
        </a>
      </MenuItem>
    </Menu>
  );
}
```

#### With checkboxes

```js
import {
  Menu,
  MenuItem,
} from 'respectre/components';
import {
  FormLabel,
  Input,
  FormIcon,
} from 'respectre/elements';

render() {
  return (
    <Menu>
      <MenuItem>
        <FormLabel type="switch">
          <Input type="checkbox" />
          <FormIcon />
          Show notifications
        </FormLabel>
      </MenuItem>
      <MenuItem>
        <FormLabel type="checkbox">
          <Input type="checkbox" />
          <FormIcon />
          Remove filters
        </FormLabel>
      </MenuItem>
      <MenuItem>
        <FormLabel type="radio">
          <Input type="radio" name="gender" />
          <FormIcon />
          Male
        </FormLabel>
        <FormLabel type="radio">
          <Input type="radio" name="gender" />
          <FormIcon />
          Female
        </FormLabel>
      </MenuItem>
    </Menu>
  );
}
```