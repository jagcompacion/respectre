# Video

<!-- STORY -->

### Usage

```js
import { Video } from 'respectre/elements';
```

### Properties

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| type      | string   | -            | -          |


### Roadmap

#### Default

```js
import { Video } from 'respectre/elements';

render() {
  return (
    <Video>
      <iframe
        title="raphsody"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        height="400"
        frameBorder="0"
        allowFullscreen
      />
    </Video>
  );
}
```

#### Types

```js
iimport { Video } from 'respectre/elements';

render() {
  return (
    <Video type="4-3">
      <iframe
        title="raphsody"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        height="400"
        frameBorder="0"
        allowFullscreen
      />
    </Video>
  );
}
```
