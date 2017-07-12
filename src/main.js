import playground from './lib/playground-base.js' // Base framework
import * as Matter from 'matter-js'; // Physics
import * as PIXI from 'pixi.js'; // Rendering

import STATE from './state'; // Game states
import util from './util'; // Utility functions
import setup from './setup'; // Game setup
import Player from './entity/player';

// Temporary game settings
const config = {
  width: 250,
  height: 125
};

const game = playground({
  STATE: STATE,
  util: util,

  preload: function() {
    this.engine = Matter.Engine.create();

    PIXI.utils.skipHello();
    this.renderer = PIXI.autoDetectRenderer(config.width, config.height, {
      resolution: window.devicePixelRatio || 1,
      antialias: true,
      backgroundColor: 0x555555
    });
    this.stage = new PIXI.Container();

    document.body.style.margin = 0;
    document.body.appendChild(this.renderer.view);
    // Center the canvas in the window
    Object.assign(this.renderer.view.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    })

    setup.preload(this);
  },

  create: function() { // Loading screen
    this.setState(STATE.Menu);
    this.ui = [] // User interface objects
    this.entities = []; // Game objects
    setup.create(this);
  },

  ready: function() {
    // After main loader - set state here, access game from within state with this.game
    // TODO: Add all entity bodies to the world
    // Matter.World.add(this.engine.world, this.entities);
    Matter.Engine.run(this.engine);
    this.setState(STATE.Game);
    // Persistent state = {}
    // Temporary state = class
    // console.log(game.entities);
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
    // Main game logic loop
  },

  render: function(dt) {
    // Main game render loop
    this.renderer.render(this.stage);
    // requestAnimationFrame(this.render);
  }

});
