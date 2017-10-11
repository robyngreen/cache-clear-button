'use strict';

// Load required libraries for interacting with the pi.
const Raspi = require('raspi-io');
const shortCircuit = require('johnny-five');
const sys = require('sys');
const exec = require('child_process');


// Delcare a new object to reference our breadboard.
const board = new shortCircuit.Board({
  io: new Raspi()
});

board.on('ready', () => {
  let button = shortCircuit.Button('2');

  board.repl.inject({
    button: button
  });

  button.on('down', function() {
    console.log('down');
    exec('drush status', (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return;
      }

      // the *entire* stdout and stderr (buffered)
      console.log(`${stdout}`);
      console.log(`${stderr}`);
    });
  });

  button.on('hold', function() {
    console.log('hold');
  });

  button.on('up', function() {
    console.log('up');
  });

});
