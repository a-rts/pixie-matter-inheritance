import playground from './lib/playground-base.js' // Base framework
import * as Matter from 'matter-js'; // Physics
import * as PIXI from 'pixi.js'; // Rendering

import STATE from './state'; // Game states
import util from './util'; // Utility functions
import setup from './setup'; // Game setup
import Player from './entity/player';

// Temporary game app settings
const config = {
  width: 250,
  height: 125
};

const app = playground({
  STATE: STATE,
  util: util,

  preload: function() {
    this.util.prototypes(); // Create custom prototypes

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
    this.ui = new Map(); // User interface objects
    this.entities = new Map(); // Game objects
    setup.create(this);
  },

  ready: function() {
    // After main loader - set state here, access app from within state with this.app
    // TODO: Add all entity bodies to the world

    // Matter.World.add(this.engine.world, this.entities);

    // for (var [key, entry] of this.entries) {
    //   Matter.World.addBody(this.engine.world, entry.body);
    // }

    // let i = this.entries.size;
    // while (i--) {
    //   Matter.World.addBody(this.engine.world, entry.body);
    // }

    Matter.World.addBody(this.engine.world, this.entities.get('player').body);
    // console.log(this.entities);

    console.log(this.entities.get('player').display);
    this.stage.addChild(this.entities.get('player').display);

    Matter.Engine.run(this.engine);
    this.setState(STATE.Game);
    // Persistent state = {}
    // Temporary state = class
    // console.log(app.entities);
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
