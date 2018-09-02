# Nav

### Usage

```js
import {
  Nav,
  NavItem,
} from 'respectre/components';
```

### Properties

#### Nav

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### NavItem

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| active    | boolean  | false        | -          |

### Roadmap

#### Default

```js
import {
  Nav,
  NavItem,
} from 'respectre/components';

render() {
  return (
    <Nav>
      <NavItem>
        <a href="/">
          Elements
        </a>
      </NavItem>
      <NavItem active={true/false}>
        <a href="/">
          Layout
        </a>
        <Nav>
          <NavItem>
            <a href="/">
              Flexbox grid
            </a>
          </NavItem>
          <NavItem>
            <a href="/">
              Responsive
            </a>
          </NavItem>
          <NavItem>
            <a href="/">
              Navbar
            </a>
          </NavItem>
          <NavItem>
            <a href="/">
              Empty states
            </a>
          </NavItem>
        </Nav>
      </NavItem>
      <NavItem>
        <a href="/">
          Components
        </a>
      </NavItem>
      <NavItem>
        <a href="/">
          UtiNavItemties
        </a>
      </NavItem>
    </Nav>
  );
}
```
