import * as Matter from 'matter-js'; // Physics
import * as PIXI from 'pixi.js'; // Rendering

// import GUI from './gui';
import World from './world';
import Player from './entity/player';
import Character from './entity/character';
import Thing from './entity/thing';

const setup = {
  preload: function(app) {
    // Use Utilities
    app.util.prototypes(); // Create custom prototypes
    // Create the top level game world class
    app.world = new World(app);
    // Create the physics engine
    app.engine = Matter.Engine.create();

    // Create the 2D renderer with pixi.js
    PIXI.utils.skipHello();
    // PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST; // Pixelated (also disable antialias)
    app.renderer = PIXI.autoDetectRenderer(app.config.width, app.config.height, {
      backgroundColor: 0x555555,
      autoResize: true,
      antialias: true,
      roundPixels: true // Pixel interpolation
    });
    // Resize the view/camera to fit the whole viewport
    app.renderer.resize(window.innerWidth, window.innerHeight);
    // Remove margin and padding on the html body
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    // Center the renderer.view canvas element in the window
    Object.assign(app.renderer.view.style, {
      position: 'absolute',
      display: 'block'
    })
    // Add the canvas element to the body of the DOM
    document.body.appendChild(app.renderer.view);

    app.stage = new PIXI.Container();

    // Create game data objects
    app.ui = new Map(); // User interface objects
    app.entities = new Map(); // Game objects
  },

  create: function(app) {
    let x, y, w, h;

    // Player
    x = app.renderer.width / 2;
    console.log(app.stage);
    console.log(app.renderer.width);
    console.log(app.renderer.height);
    y = app.renderer.height / 4;
    w = 40;
    h = 40;
    let player = new Player(app.entities, x, y, w, h, {
      key: 'player',
      displayOptions: {
        shape: 'rect',
        color: 0x1099bb,
        lineStyle: [2, 0xeeeeee]
      }
    });

    // Ground
    // TODO: Fix renderer resolution, the renderer dimensions are wrong!
    // x = app.renderer.width / 2;
    // y = app.renderer.height;
    x = 50;
    y = app.renderer.height / 2;
    w = app.renderer.width;
    h = 40;
    let ground = new Thing(app.entities, x, y, w, h, {
      key: 'ground',
      displayOptions: {
        shape: 'rect',
        color: 0xaaaaaa,
        lineStyle: [1, 0x333333]
      }
    });

    // Character
    x = app.renderer.width / 4 - 10;
    y = app.renderer.height / 4 - 30;
    w = 40;
    h = 40;
    let character = new Character(app.entities, x, y, w, h, {
      displayOptions: {
        color: 0xa52a2a,
        lineStyle: [1, 0x333333]
      }
    });

    // let shape = new PIXI.Graphics();
    // shape.
  }
}

export default setup;
