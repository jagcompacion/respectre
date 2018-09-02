# Breadcrumb

### Usage

```js
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'respectre/components';
```

### Properties

#### Breadcrumb

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### BreadcrumbItem

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

### Roadmap

#### Default

```js
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'respectre/components';

render() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">
          Home
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/">
          Settings
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/">
          Change avatar
        </a>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
```
