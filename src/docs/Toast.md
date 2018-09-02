# Toast

### Usage

```js
import { Toast } from 'respectre/components';
```

### Properties

#### Toast

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| color     | string   | -            | -          |


### Roadmap

#### Default

```js
import { Toast } from 'respectre/components';
import { Button } from 'respectre/elements';

render() {
  return (
    <Toast color="primary">
      <Button color="clear" className="float-right" />
      <h6>
        Toast Title
      </h6>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Toast>
  );
}
```
#### with color

```js
import { Toast } from 'respectre/components';
import { Button } from 'respectre/elements';

render() {
  return (
    <Toast color="error">
      <Button color="clear" className="float-right" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Toast>
  );
}
```
