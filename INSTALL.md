### [Node Console](https://nodejs.org)

#### Install with NPM

```bash
npm install dracula-console
```

#### Using the theme

```javascript
const dracula = require('dracula-console');

// Banner
console.log();
console.log(
  dracula.purple('Dracula Theme'),
  dracula.fg('for'),
  dracula.green('Node'),
  dracula.fg('Console'),
  `${dracula.fg('(')}${dracula.pink('No Background')}${dracula.fg(')')}`
);

// Samples
console.log(`  [foreground]   ${dracula.fg('How vexingly quick daft zebras jump!')}`);
console.log(`     [comment]   ${dracula.comment('How vexingly quick daft zebras jump!')}`);
console.log(`        [cyan]   ${dracula.cyan('How vexingly quick daft zebras jump!')}`);
console.log(`       [green]   ${dracula.green('How vexingly quick daft zebras jump!')}`);
console.log(`      [orange]   ${dracula.orange('How vexingly quick daft zebras jump!')}`);
console.log(`        [pink]   ${dracula.pink('How vexingly quick daft zebras jump!')}`);
console.log(`      [purple]   ${dracula.purple('How vexingly quick daft zebras jump!')}`);
console.log(`         [red]   ${dracula.red('How vexingly quick daft zebras jump!')}`);
console.log(`      [yellow]   ${dracula.yellow('How vexingly quick daft zebras jump!')}`);

// Banner
console.log();
console.log(
  dracula.purple('Dracula Theme'),
  dracula.fg('for'),
  dracula.green('Node'),
  dracula.fg('Console'),
  `${dracula.fg('(')}${dracula.pink('With Background')}${dracula.fg(')')}`
);

// Config
dracula.set('useBg', true);

// Samples
console.log(`  [foreground]   ${dracula.fg('How vexingly quick daft zebras jump!')}`);
console.log(`     [comment]   ${dracula.comment('How vexingly quick daft zebras jump!')}`);
console.log(`        [cyan]   ${dracula.cyan('How vexingly quick daft zebras jump!')}`);
console.log(`       [green]   ${dracula.green('How vexingly quick daft zebras jump!')}`);
console.log(`      [orange]   ${dracula.orange('How vexingly quick daft zebras jump!')}`);
console.log(`        [pink]   ${dracula.pink('How vexingly quick daft zebras jump!')}`);
console.log(`      [purple]   ${dracula.purple('How vexingly quick daft zebras jump!')}`);
console.log(`         [red]   ${dracula.red('How vexingly quick daft zebras jump!')}`);
console.log(`      [yellow]   ${dracula.yellow('How vexingly quick daft zebras jump!')}`);

// Config
dracula.set('useBg', false);

// Banner
console.log();
console.log(
  dracula.purple('Dracula Theme'),
  dracula.fg('for'),
  dracula.green('Node'),
  dracula.fg('Console'),
  `${dracula.fg('(')}${dracula.pink('With')} ${dracula.cyan('Current / Selected')} ${dracula.pink('Background')}${dracula.fg(')')}`
);

// Config
dracula.set('useBg', true);

// Samples
console.log(`  [foreground]   ${dracula.fg('How vexingly quick daft zebras jump!', 'current')}`);
console.log(`     [comment]   ${dracula.comment('How vexingly quick daft zebras jump!', 'selected')}`);
console.log(`        [cyan]   ${dracula.cyan('How vexingly quick daft zebras jump!', 'current')}`);
console.log(`       [green]   ${dracula.green('How vexingly quick daft zebras jump!', 'selected')}`);
console.log(`      [orange]   ${dracula.orange('How vexingly quick daft zebras jump!', 'current')}`);
console.log(`        [pink]   ${dracula.pink('How vexingly quick daft zebras jump!', 'selected')}`);
console.log(`      [purple]   ${dracula.purple('How vexingly quick daft zebras jump!', 'current')}`);
console.log(`         [red]   ${dracula.red('How vexingly quick daft zebras jump!', 'selected')}`);
console.log(`      [yellow]   ${dracula.yellow('How vexingly quick daft zebras jump!', 'current')}`);
```
