# Table

<!-- STORY -->

### Usage

```js
import { Table } from 'respectre/elements';
```

### Properties

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| hover     | boolean  | false        | -          |
| striped   | boolean  | false        | -          |

### Roadmap

#### Default

```js
import { Table } from 'respectre/elements';

render() {
  return (
    <Table>
      <tbody>
        <tr className="active">
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        ...
      </tbody>
    </Table>
  );
}
```

#### Hover

```js
import { Table } from 'respectre/elements';

render() {
  return (
    <Table hover>
      <tbody>
        <tr className="active">
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        ...
      </tbody>
    </Table>
  );
}
```

#### Striped

```js
import { Table } from 'respectre/elements';

render() {
  return (
    <Table striped>
      <tbody>
        <tr className="active">
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        ...
      </tbody>
    </Table>
  );
}
```
