# Tiles

<!-- STORY -->

### Usage

```js
import {
  Tile,
  TileIcon,
  TileContent,
  TileTitle,
  TileSubtitle,
  TileAction,
} from 'respectre/components';
```

### Properties

#### Tile

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| centered  | boolean  | false        | -          |

#### TileIcon

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### TileContent

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

#### TileTitle

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| tag       | string   | div          | -          |

#### TileSubtitle

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |
| tag       | string   | div          | -          |

#### TileAction

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   | -            | -          |

### Roadmap

#### Default

```js
import {
  Tile,
  TileIcon,
  TileContent,
  TileTitle,
  TileSubtitle,
  TileAction,
  Avatar,
} from 'respectre/components';

render() {
  return (
    <Tile>
      <TileIcon>
        <Avatar size="lg">
          <img src="../img/avatar-3.png" alt="Avatar" />
        </Avatar>
      </TileIcon>
      <TileContent>
        <TileTitle tag="p">
          The Avengers
        </TileTitle>
        <TileSubtitle className="text-gray" tag="p">
          ...
        </TileSubtitle>
      </TileContent>
      <TileAction>
        <Button color="primary">
          Join
        </Button>
      </TileAction>
    </Tile>
  );
}
```
#### button on content

```js
import {
  Tile,
  TileIcon,
  TileContent,
  TileTitle,
  TileSubtitle,
  TileAction,
  Avatar,
} from 'respectre/components';

render() {
  return (
    <Tile>
      <TileIcon>
        <Avatar size="lg">
          <img src="../img/avatar-3.png" alt="Avatar" />
        </Avatar>
      </TileIcon>
      <TileContent>
        <TileTitle tag="p">
          The Avengers
        </TileTitle>
        <TileSubtitle className="text-gray" tag="p">
          ...
        </TileSubtitle>
        <p>
          <Button size="sm" color="primary">
            Join
          </Button>
          <Button size="sm">
            Contact
          </Button>
        </p>
      </TileContent>
    </Tile>
  );
}
```

#### vertically aligned center

```js
import {
  Tile,
  TileIcon,
  TileContent,
  TileTitle,
  TileSubtitle,
  TileAction,
  Icon,
} from 'respectre/components';

const exampleIcon = {
  background: '#5755d9',
  height: '2rem',
  width: '2rem',
  color: '#fff',
  alignContent: 'space-around',
  alignItems: 'center',
  borderRadius: '.1rem',
  display: 'flex',
  fontSize: '1.2rem',
};

render() {
  return (
    <Tile centered>
      <TileIcon>
        <div style={exampleIcon}>
          <Icon icon="icon-mail" centered />
        </div>
      </TileIcon>
      <TileContent>
        <TileTitle>
          spectre-docs.pdf
        </TileTitle>
        <TileSubtitle className="text-gray">
          14MB · Public · 1 Jan, 2017
        </TileSubtitle>
      </TileContent>
      <TileAction>
        <Button color="link">
          <Icon icon="icon-more-vert" />
        </Button>
      </TileAction>
    </Tile>
  );
}
```