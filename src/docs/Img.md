# Img

<!-- STORY -->

### Usage

```js
import { Img } from 'respectre/elements';
```

### Properties

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| type      | string   | img-responsive | -          |


### Roadmap

#### Default

```js
import { Img } from 'respectre/elements';

render() {
  return (
    <Img src="../img/image1.png" />
  );
}
```

#### Types

```js
import { Img } from 'respectre/elements';

render() {
  return (
    <Img src="../img/image1.png" type="contain" height="100" width="400" />
  );
}
```
