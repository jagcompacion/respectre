# Divider

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
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </p>
      <Divider />
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </p>
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
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </p>
      <Divider data-content="OR" className="text-center" />
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </p>
    </div>
  );
}
```

#### with text

```js
import { Divider } from 'respectre/components';
import { Cols, Col } from '../ui/Layouts';

render() {
  return (
    <Cols>
      <Col>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </Col>
      <Divider vertical data-content="OR" className="text-center" />
      <Col>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, 
        dictum in vehicula sit amet, feugiat tempus tellus.`}
      </Col>
    </Cols>
  );
}
```
