import playground from './lib/playground-base.js' // Base framework
import Matter from 'matter-js'; // Physics
import PIXI from 'pixi.js'; // Rendering

import STATE from './state'; // Game states
import util from './util'; // Utility functions
import setup from './setup'; // Game setup
import Player from './player';

var app = playground({
  preload: setup.preload(this),
  create: setup.create(this),

  ready: function() {
    // After main loader - set state here, access app from state with this.app
    // console.log('ready');
    this.setState(STATE.Game);
    // Persistent state = {}
    // Temporary state = class
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
    // Main app render loop
  }

});
