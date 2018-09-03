# Figure

<!-- STORY -->

### Usage

```js
import { Figure, FigureCaption } from 'respectre/elements';
```

### Properties

#### Figure

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### FigureCaption

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |


### Roadmap

#### Default

```js
import { Img, Figure, FigureCaption } from 'respectre/elements';

render() {
  return (
    <Figure>
      <Img src="../img/image1.png" type="contain" style={{ height: '10rem', width: '100%' }} />
      <FigureCaption>
        macOS Yosemite wallpaper
      </FigureCaption>
    </Figure>
  );
}
```
