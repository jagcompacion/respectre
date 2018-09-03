# Respectre

Stateless React Components for spectre.css.

## Getting Started

```
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```

### Adding Spectre.css

```
npm install --save spectre.css
npm install --save respectre
```

Import spectre.css in the ```src/index.js``` file:

```js
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css'; /** optional (for-icons) **/
import 'spectre.css/dist/spectre-exp.css';  /** optional (for-experimentals) **/
```

Import required components within ```src/App.js``` file or your custom component files:

```js
import { Button, ... } from 'respectre/elements';
import { Container, ... } from 'respectre/layout';
import { Avatar, ... } from 'respectre/components';
import { Calendar, ... } from 'respectre/experimentals';
```

Thats it.

## Development

Install dependencies:

```sh
npm install
```

Run documentation at [http://localhost:9001/](http://localhost:9001/)

```sh
npm run storybook
```

Run tests

```sh
npm run test
```