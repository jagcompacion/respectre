# Bar

<!-- STORY -->

### Usage

```js
import { Bar } from 'respectre/components';
```

### Properties

#### Bar

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| size      | string   | -            | -          |

#### BarItem

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| value      | number   | -            | -          |
| min      | number   | -            | -          |
| max      | number   | -            | -          |
| tooltip  | boolean   | -            | -          |
| data-tooltip  | string   | -            | -          |



### Roadmap

#### Default

```js
import { Bar } from 'respectre/components';

render() {
  return (
    <Bar>
      <BarItem
        value={50}
        min={0}
        max={100}
        tooltip
        data-tooltip="50%"
      />
    </Bar>
  );
}
```

#### Sizes

```js
import { Bar } from 'respectre/components';

render() {
  return (
    <Bar size="sm/lg">
      <BarItem
        value={50}
        min={0}
        max={100}
        tooltip
        data-tooltip="50%"
      />
    </Bar>
  );
}
```

#### Multibar

```js
import { Bar } from 'respectre/components';

render() {
  return (
    <Bar>
      <BarItem
        value={25}
        min={0}
        max={100}
        tooltip
        data-tooltip="25%"
      >
        25%
      </BarItem>
      <BarItem
        value={35}
        min={0}
        max={100}
        tooltip
        data-tooltip="35%"
        background="#818bd5"
      >
        35%
      </BarItem>
    </Bar>
  );
}
```
