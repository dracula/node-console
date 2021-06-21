### [Node Console](https://nodejs.org)

#### Install Using NPM

```
npm install dracula-console
```

#### Using Theme

```
const dracula = require('dracular-console');

console.log(
  dracula.purple('Dracula Theme'),
  dracula.fg('for'),
  dracula.green('Node'),
  dracula.fg('Console')
);
```
