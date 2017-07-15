import playground from './lib/playground-base.js' // Base framework

import utilities from './utilities';
import STATE from './state'; // Game states
import setup from './setup'; // Game setup

// Temporary game app settings
const config = {
  // width: 800,
  // height: 500,
  debug: {
    bodies: false, // Use the Matter renderer instead of Pixi renderer
    wireframes: true // Show only wireframes in the Matter renderer
  }
};

const app = playground({
  STATE: STATE, // Playground gives states a reference to the app in this.app
  util: utilities,

  preload: function() {
    this.config = config; // Add the config to the app
    setup.preload(this); // Set up libraries and game data objects
  },

  create: function() { // Show loading screen
    this.setState(STATE.Loading); // Load assets and resources
    setup.create(this); // Create game entities
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
    // this.renderer.render(this.stage); // TODO: is this needed?
  },

  mousemove: function(data) {
    // console.log(data);
  }

});
