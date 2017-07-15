import * as Matter from 'matter-js'; // Physics
import * as PIXI from 'pixi.js'; // Rendering

import GUI from './gui';
import World from './world';
import Player from './entity/player';
import Character from './entity/character';
import Thing from './entity/thing';

const setup = {
  preload: function(app) {
    // Use Utilities
    app.util.prototypes(); // Create custom prototypes
    // Create the GUI instance
    app.gui = new GUI(app);
    // app.gui.config(); // TODO: No normal configuration options currently
    app.gui.debug();
    // Create the top level game world class
    app.world = new World(app);
    // Create the physics engine
    app.engine = Matter.Engine.create();

    PIXI.utils.skipHello();
    if (app.config.debug.matterRenderer) {
      // Create Matter renderer for debugging with physics wireframes
      this.createRendererMatter(app);
    } else {
      // Create a PIXI renderer
      this.createRenderer(app);
    };
    // Remove margin and padding on the html body
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    // Center the canvas element in the window
    Object.assign(app.canvas.style, {
      position: 'absolute',
      display: 'block'
    });
    // Create game data objects
    app.ui = new Map(); // User interface objects
    app.entities = new Map(); // Game objects
  },

  create: function(app) {
    let x, y, w, h;

    // Player
    x = app.canvas.width / 2;
    y = app.canvas.height / 2;
    w = 40;
    h = 40;
    let player = new Player(app.entities, x, y, w, h, {
      key: 'player',
      shape: 'rect',
      displayOptions: {
        color: 0x1099bb,
        lineStyle: [2, 0xeeeeee]
      }
    });
    console.log(player);
    app.gui.player(); // Add player variables to the data GUI

    // Ground
    x = app.canvas.width / 2;
    y = app.canvas.height;
    w = app.canvas.width;
    h = 80;
    let ground = new Thing(app.entities, x, y, w, h, {
      key: 'ground',
      shape: 'rect',
      displayOptions: {
        color: 0xaaaaaa,
        lineStyle: [1, 0x333333]
      }
    });

    // Character
    x = app.canvas.width / 2 - 20;
    y = app.canvas.height / 2 - 80;
    w = 40;
    h = 40;
    let character = new Character(app.entities, x, y, w, h, {
      shape: 'circle',
      displayOptions: {
        color: 0xa52a2a,
        lineStyle: [2, 0x333333]
      }
    });
  },

  createRenderer(app) {
    // PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST; // Pixelated (also disable antialias)
    app.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
      backgroundColor: 0x555555,
      autoResize: true,
      antialias: true,
      roundPixels: true // Pixel interpolation
    });
    // Resize the view/camera to fit the whole viewport
    app.renderer.resize(window.innerWidth, window.innerHeight);
    app.canvas = app.renderer.view;
    // Add the canvas element to the body of the DOM
    document.body.appendChild(app.renderer.view);

    app.stage = new PIXI.Container();
  },

  createRendererMatter(app) {
    app.renderer = Matter.Render.create({
      element: document.body,
      engine: app.engine,
      options: {
          width: window.innerWidth,
          height: window.innerHeight,
          pixelRatio: 1, //window.devicePixelRatio,
          background: '#fafafa',
          wireframeBackground: '#222',
          hasBounds: false,
          enabled: true,
          wireframes: app.config.debug.wireframes,
          showSleeping: true,
          showDebug: false,
          showBroadphase: false,
          showBounds: false,
          showVelocity: false,
          showCollisions: false,
          showSeparations: false,
          showAxes: false,
          showPositions: false,
          showAngleIndicator: false,
          showIds: false,
          showShadows: false,
          showVertexNumbers: false,
          showConvexHulls: false,
          showInternalEdges: false,
          showMousePosition: false
      }
    });
    app.canvas = app.renderer.canvas;
    Matter.Render.run(app.renderer)
  }
}

export default setup;
