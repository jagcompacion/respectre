# Empty State

<!-- STORY -->

### Usage

```js
import {
  Empty,
  EmptyAction,
  EmptyIcon,
  EmptySubtitle,
  EmptyTitle,
} from 'respectre/components';
```

### Properties

#### Empty

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### EmptyAction

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### EmptyIcon

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### EmptyTitle

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### EmptySubtitle

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |


### Roadmap

#### Default

```js
import {
  Empty,
  EmptyAction,
  EmptyIcon,
  EmptySubtitle,
  EmptyTitle,
} from 'respectre/components';

render() {
  return (
    <Empty>
      <EmptyIcon>
        <Icon icon="icon-people" size="3x" />
      </EmptyIcon>
      <EmptyTitle className="h5">
        You have no new messages
      </EmptyTitle>
      <EmptySubtitle>
        Click the button to start a conversation.
      </EmptySubtitle>
      <EmptyAction>
        <Button color="primary" onClick={action('click')}>
          Send a message
        </Button>
      </EmptyAction>
    </Empty>
  );
}
```
