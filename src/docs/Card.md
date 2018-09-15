# Card

<!-- STORY -->

### Usage

```js
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
} from 'respectre/components';
```

### Properties

#### Card

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### CardImage

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### CardHeader

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### CardTitle

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### CardSubtitle

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### CardBody

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### CardFooter

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

### Roadmap

#### Default

```js
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
} from 'respectre/components';

render() {
  return (
    <Card>
      <CardImage>
        <Img src="../img/image1.jpg" alt="" />
      </CardImage>
      <CardHeader>
        <CardTitle className="h5">
          Microsoft
        </CardTitle>
        <CardSubtitle className="text-gray">
          Software and hardware
        </CardSubtitle>
      </CardHeader>
      <CardBody>
        Empower every person and every organization on the planet to achieve more.
      </CardBody>
      <CardFooter>
        <Button color="primary">
          Do
        </Button>
      </CardFooter>
    </Card>
  );
}
```
