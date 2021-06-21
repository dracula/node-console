const chalk = require('chalk');

const options = {
  useBg: false,
}

const bgStates = {
  background: '#282a36',
  current: '#44475a',
  selected: '#44475a',
}

function set(option, value) {
  if (Object.keys(options).includes(option)) {
    options[option] = value;
  }
}

function stylize(text, fgColor, bgState = 'background') {
  let f = chalk.hex(fgColor);
  if (options.useBg === true) {
    const bgColor = Object.keys(bgStates).includes(bgState) ? bgStates[bgState] : bgState.background;
    f = f.bgHex(bgColor);
  }

  return f(text);
}

function foreground(text, bgState = 'background') {
  return stylize(text, '#f8f8f2', bgState);
}
const fg = foreground;

function comment(text, bgState = 'background') {
  return stylize(text, '#6272a4', bgState);
}

function cyan(text, bgState = 'background') {
  return stylize(text, '#8be9fd', bgState);
}

function green(text, bgState = 'background') {
  return stylize(text, '#50fa7b', bgState);
}

function orange(text, bgState = 'background') {
  return stylize(text, '#ffb86c', bgState);
}

function pink(text, bgState = 'background') {
  return stylize(text, '#ff79c6', bgState);
}

function purple(text, bgState = 'background') {
  return stylize(text, '#bd93f9', bgState);
}

function red(text, bgState = 'background') {
  return stylize(text, '#ff5555', bgState);
}

function yellow(text, bgState = 'background') {
  return stylize(text, '#f1fa8c', bgState);
}

module.exports = {
  set,
  foreground,
  fg,
  comment,
  cyan,
  green,
  orange,
  pink,
  purple,
  red,
  yellow,
};
