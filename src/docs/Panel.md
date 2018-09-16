# Panel

<!-- STORY -->

### Usage

```js
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelSubtitle,
  PanelNav,
  PanelBody,
  PanelFooter,
} from 'respectre/components';
```

### Properties

#### Panel

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### PanelHeader

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### PanelTitle

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### PanelSubtitle

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |


#### PanelNav

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |


#### PanelBody

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### PanelFooter

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |


### Roadmap

#### Default

```js
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelSubtitle,
  PanelNav,
  PanelBody,
  PanelFooter,
  Avatar,
} from 'respectre/components';

render() {
  return (
    <Panel>
      <PanelHeader className="text-center">
        <Avatar size="lg">
          <img src="../img/avatar-2.png" alt="..." />
        </Avatar>
        <PanelTitle className="h5">
          Bruce Banner
        </PanelTitle>
        <PanelSubtitle>
          THE HULK
        </PanelSubtitle>
      </PanelHeader>
      <PanelNav>
        <!-- tabs, breadcrumbs or pagination -->
      </PanelNav>
      <PanelBody>
        <!-- content -->
      </PanelBody>
      <PanelFooter>
        <!-- button or input -->
      </PanelFooter>
    </Panel>
  );
}
```
