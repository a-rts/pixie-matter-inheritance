import playground from './lib/playground-base.js' // Base framework
import * as Matter from 'matter-js'; // Physics
import * as PIXI from 'pixi.js'; // Rendering

import STATE from './state'; // Game states
import setup from './setup'; // Game setup
import Utilities from './utilities'; // Utility functions
import Player from './entity/player';
import Thing from './entity/thing';

// Temporary game app settings
const config = {
  width: 250,
  height: 125
};

const app = playground({
  STATE: STATE, // Playground gives states a reference to the app in this.app

  preload: function() {
    this.config = config; // Add the config to the app
    setup.preload(this); // Run the preloading function of setup
  },

  create: function() { // Loading screen
    this.setState(STATE.Loading); // Load assets and resources
    setup.create(this); // Create the game
  },

  ready: function() {
    this.setState(STATE.Game);
  },

  createstate: function() {
    // console.log('create state');
  },

  enterstate: function() {
    // console.log('enter state');
  },

  leavestate: function() {
    // console.log('leave state');
  },

  resize: function() {
    // console.log('Screen resized');
  },

  step: function(dt) {
    // Main app logic loop
  },

  render: function(dt) {
    this.renderer.render(this.stage);
  }

});
