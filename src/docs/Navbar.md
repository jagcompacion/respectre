# Navbar

<!-- STORY -->

### Usage

```js
import {
  Navbar,
  NavbarSection,
  NavbarBrand,
} from 'respectre/components';
```

### Properties

#### Navbar

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### NavbarSection

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### NavbarBrand

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| href      | string  | -        | -          |

### Roadmap

#### Default

```js
import { Navbar, NavbarSection, NavbarBrand } from 'respectre/components';
import { Button, InputGroup, Input } from 'respectre/components';

render() {
  return (
    <Navbar className="p-2">
      <NavbarSection>
        <NavbarBrand href="https://google.com" className="mr-2">
          Spectre.css
        </NavbarBrand>
        <Button color="link" tag="a" href="https://google.com">
          Docs
        </Button>
        <Button color="link" tag="a" href="https://google.com">
          Github
        </Button>
      </NavbarSection>
      <NavbarSection>
        <InputGroup inline>
          <Input type="search" />
          <Button inputGroup color="primary">
            Search
          </Button>
        </InputGroup>
      </NavbarSection>
    </Navbar>
  );
}
```
