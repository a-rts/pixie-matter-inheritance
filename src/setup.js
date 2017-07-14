import * as Matter from 'matter-js'; // Physics
import * as PIXI from 'pixi.js'; // Rendering

import World from './world';
import Player from './entity/player';
import Thing from './entity/thing';

const setup = {
  preload: function(app) {
    // Use Utilities
    app.util.prototypes(); // Create custom prototypes
    // Create the top level game world class
    app.world = new World(app);
    // Create the physics engine
    app.engine = Matter.Engine.create();

    // Create the 2D renderer
    PIXI.utils.skipHello();
    app.renderer = PIXI.autoDetectRenderer(app.config.width, app.config.height, {
      resolution: window.devicePixelRatio,
      antialias: true,
      backgroundColor: 0x555555
    });
    app.stage = new PIXI.Container();

    // Add the renderer to the page and adjust its CSS properties
    document.body.style.margin = 0;
    document.body.appendChild(app.renderer.view);
    // Center the renderer.view canvas element in the window
    Object.assign(app.renderer.view.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    })

    // Create game data objects
    app.ui = new Map(); // User interface objects
    app.entities = new Map(); // Game objects
  },

  create: function(app) {
    let x, y, w, h;

    x = app.renderer.width / 4;
    y = app.renderer.height / 4;
    w = 20;
    h = 20;
    let player = new Player(app.entities, x, y, w, h, {
      key: 'player',
      displayOptions: {
        shape: 'rect',
        color: 0x1099bb,
        lineStyle: [1, 0x333333]
      }
    });

    // TODO: Fix resolution, the renderer dimensions are wrong!
    // x = app.renderer.width / 2;
    // y = app.renderer.height;
    x = 50;
    y = app.renderer.height / 2;
    w = app.renderer.width - 20;
    h = 40;
    let ground = new Thing(app.entities, x, y, w, h, {
      key: 'ground',
      displayOptions: {
        shape: 'rect',
        color: 0xaaaaaa,
        lineStyle: [1, 0x333333]
      }
    });
  }
}

export default setup;
