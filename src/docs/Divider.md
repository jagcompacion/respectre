# Divider

<!-- STORY -->

### Usage

```js
import { Divider } from 'respectre/components';
```

### Properties

#### Divider

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| vertical  | boolean  | false        | -          |
| tag       | string   | div          | -          |


### Roadmap

#### Default

```js
import { Divider } from 'respectre/components';

render() {
  return (
    <div>
      <p>...</p>
      <Divider />
      <p>...</p>
    </div>
  );
}
```
#### with text

```js
import { Divider } from 'respectre/components';

render() {
  return (
    <div>
      <p>...</p>
      <Divider data-content="OR" className="text-center" />
      <p>...</p>
    </div>
  );
}
```

#### with text and vertical

```js
import { Divider } from 'respectre/components';
import { Cols, Col } from '../ui/Layouts';

render() {
  return (
    <Cols>
      <Col column>...</Col>
      <Divider vertical data-content="OR" className="text-center" />
      <Col column>...</Col>
    </Cols>
  );
}
```
