# Pagination

<!-- STORY -->

### Usage

```js
import {
  Pagination,
  PageItem,
  PageItemSubtitle,
  PageItemTitle,
} from 'respectre/components';
```

### Properties

#### Pagination

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### PageItem

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| active    | boolean  | false        | -          |
| disabled  | boolean  | false        | -          |
| type      | string   | -            | -          |

#### PageItemTitle

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### PageItemSubtitle

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

### Roadmap

#### Default

```js
import {
  Pagination,
  PageItem,
} from 'respectre/components';

render() {
  return (
    <Pagination>
      <PaginationItem>
        <a href="/">
          Elements
        </a>
      </PaginationItem>
      <PaginationItem active={true/false}>
        <a href="/">
          Layout
        </a>
      </PaginationItem>
      <PaginationItem>
        <a href="/">
          UtiPaginationItemties
        </a>
      </PaginationItem>
    </Pagination>
  );
}
```

#### Previous / Next

```js
import {
  Pagination,
  PageItem,
  PageItemSubtitle,
  PageItemTitle,
} from 'respectre/components';

render() {
  return (
    <Pagination>
      <PageItem type="prev">
        <a href="/">
          <PageItemSubtitle>
            Previous
          </PageItemSubtitle>
          <PageItemTitle className="h5">
            Getting started
          </PageItemTitle>
        </a>
      </PageItem>
      <PageItem type="next">
        <a href="/">
          <PageItemSubtitle>
            Next
          </PageItemSubtitle>
          <PageItemTitle className="h5">
            Layout
          </PageItemTitle>
        </a>
      </PageItem>
    </Pagination>
  );
}
```
