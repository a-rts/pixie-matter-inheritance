import playground from './lib/playground-base.js' // Base framework
import * as Matter from 'matter-js'; // Physics
import * as PIXI from 'pixi.js'; // Rendering

import STATE from './state'; // Game states
import util from './util'; // Utility functions
import setup from './setup'; // Game setup
import Player from './entity/player';
import Thing from './entity/thing';

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
      resolution: window.devicePixelRatio,
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
    this.setState(STATE.Loading);
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

    // TODO: Move game entities to STATE.Game
    // Matter.World.addBody(this.engine.world, this.entities.get('player').body);
    // this.entities.forEach(function() {
    //   //
    // });

    // TODO: Util function
    let self = this;
    this.entities.forEach(function(entity) {
      Matter.World.add(self.engine.world, entity.body);
      self.stage.addChild(entity.display);
    })

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
