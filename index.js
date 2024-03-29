/*
-- SOMEAPI WRAPPER for NPM --
_____________________________
This is the SomeAPI wrapper for npm, designed for Someapi, a website with a huge arsenal of APIs for Discord bots as well as other purposes.

*/

// Imports
const axios = require('axios');
var colors = require('colors');

// COLORS -> setting theme
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// Discord and image manipulation APIs
async function invert(avatar) {
  if (!avatar) {
    console.log("  > someapi input warning: please provide an avatar!".warn);
    process.exit();
  }
  try {
    return `https://someapi.xyz/invert?avatar=${avatar}`
  } catch (err) {
    console.log(`  > someapi internal err:\n${err.stack}`.error);
  }
};

async function wanted(avatar) {
  if (!avatar) {
    console.log("  > someapi input warning: please provide an avatar!".warn);
    process.exit();
  }
  try {
    return `https://someapi.xyz/wanted?avatar=${avatar}`
  } catch (err) {
    console.log(`  > someapi internal err:\n${err.stack}`.error);
  }
};

async function greyscale(avatar) {
  if (!avatar) {
    console.log("  > someapi input warning: please provide an avatar!".warn);
    process.exit();
  }
  try {
    return `https://someapi.xyz/greyscale?avatar=${avatar}`
  } catch (err) {
    console.log(`  > someapi internal err:\n${err.stack}`.error);
  }
};

async function alert(avatar) {
  if (!avatar) {
    console.log("  > someapi input warning: please provide an avatar!".warn);
    process.exit();
  }
  try {
    return `https://someapi.xyz/alert?avatar=${avatar}`
  } catch (err) {
    console.log(`  > someapi internal err:\n${err.stack}`.error);
  }
};

async function god(text) {
  if (!text) {
    console.log("  > someapi input warning: please provide some text!".warn);
    process.exit();
  }
  try {
    return `https://someapi.xyz/god?text=${text}`
  } catch (err) {
    console.log(`  > someapi internal err:\n${err.stack}`.error);
  }
};

// JSON APIs
async function dogfacts() {
  try {
    const promise = axios.get('https://someapi.dragonroyale.repl.co/json/dogs');
    const dataPromise = promise.then((response) => response.data.fact);
    return dataPromise;
  } catch (err) {
    console.log(`  > someapi internal err:\n${err.stack}`.error);
  }
};

async function mockify(text) {
  if (!text) {
    console.log("  > someapi input warning: please provide some text!".warn);
    process.exit();
  }
  try {
    const promise = axios.get(`https://someapi.dragonroyale.repl.co/mocktext?text=` + text);
    const dataPromise = promise.then((response) => response.data.text);
    return dataPromise;
  } catch (err) {
    console.log(`  > someapi internal err:\n${err.stack}`.warn);
  }
};

// Exporting all functions for wrapper
module.exports = { invert, wanted, greyscale, alert, dogfacts, mockify, god }