# Tooltip

### Usage

```js
className="tooltip tooltip-primary"
data-tooltip="This is the message of tooltip"
```

### Roadmap

#### Default

```js
import { Button } from 'respectre/elements';

render() {
  return (
    <Button
      color="primary"
      className="tooltip"
      data-tooltip="This tooltip will show in the right"
    >
      This will always show on the top
    </Button>
  );
}
```

#### Positions

```js
import { Button } from 'respectre/elements';

render() {
  return (
    <Button
      color="primary"
      className="tooltip tooltip-right"
      data-tooltip="This tooltip will show in the right"
    >
      This will show on the right
    </Button>
  );
}
```