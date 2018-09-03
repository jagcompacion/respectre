# Input

<!-- STORY -->

### Usage

```js
import { Input } from 'respectre/elements';
```

### Properties

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| type      | string   | -            | -          |


### Roadmap

#### Default

```js
import { Input } from 'respectre/elements';

render() {
  return (
    <Input />
  );
}
```

#### Textarea

```js
import { Input } from 'respectre/elements';

render() {
  return (
    <Input type="textarea" rows="3" placeholder="This is textarea" />
  );
}
```

#### Select

```js
import { Input } from 'respectre/elements';

render() {
  return (
    <Input
      type="select"
      multiple={true/false}
    >
      <option>Choose an option</option>
      <option>Slack</option>
      <option>Skype</option>
      <option>Hipchat</option>
    </Input>
  );
}
```

### Radio

```js
import { Input, FormLabel, FormIcon } from 'respectre/elements';

render() {
  return (
    <FormLabel type="radio">
      <Input type="radio" name="gender" checked />
      <FormIcon />
      Male
    </FormLabel>
  );
}
```

### Checkbox

```js
import { Input, FormLabel, FormIcon } from 'respectre/elements';

render() {
  return (
    <FormLabel type="checkbox">
      <Input type="checkbox" checked />
      <FormIcon />
      Always on top
    </FormLabel>
  );
}
```

### Switch

```js
import { Input, FormLabel, FormIcon } from 'respectre/elements';

render() {
  return (
    <FormLabel type="switch">
      <Input type="checkbox" checked />
      <FormIcon />
      Always on top
    </FormLabel>
  );
}
```

### Sizes

```js
import { Input } from 'respectre/elements';

render() {
  return (
    <Input type="text" size="lg" />
  );
}
```