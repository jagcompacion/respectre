# Step

<!-- STORY -->

### Usage

```js
import {
  Step,
  StepItem,
} from 'respectre/components';
```

### Properties

#### Step

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### StepItem

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| active    | boolean  | false        | -          |

### Roadmap

#### Default

```js
import {
  Step,
  StepItem,
} from 'respectre/components';

render() {
  return (
    <Step>
      <StepItem>
        <a href="/" className="tooltip" data-tooltip="Step 1">
          Step 1
        </a>
      </StepItem>
      <StepItem>
        <a href="/" className="tooltip" data-tooltip="Step 2">
          Step 2
        </a>
      </StepItem>
      <StepItem active>
        <a href="/" className="tooltip" data-tooltip="Step 3">
          Step 3
        </a>
      </StepItem>
      <StepItem>
        <a href="/" className="tooltip" data-tooltip="Step 4">
          Step 4
        </a>
      </StepItem>
    </Step>
  );
}
```
