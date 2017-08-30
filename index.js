'use strict';

// Load required libraries for interacting with the pi.
const Raspi = require('raspi-io');
const shortCircuit = require('johnny-five');

// Delcare a new object to reference our breadboard.
const board = new shortCircuit.Board({
  io: new Raspi()
});

board.on('ready', () => {
  let button = shortCircuit.Button('18');

  board.repl.inject({
    button: button
  });

  button.on('down', function() {
    console.log('down');
  });

  button.on('hold', function() {
    console.log('hold');
  });

  button.on('up', function() {
    console.log('up');
  });

});
