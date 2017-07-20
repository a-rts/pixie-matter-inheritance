import * as Matter from 'matter-js'; // Physics
import * as PIXI from 'pixi.js'; // Rendering

import GUI from './gui';
import World from './world';


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
    // TODO: Create function for the entire app
  },

  createRenderer(app) {
    // PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST; // Pixelated (also disable antialias)
    app.pixi = new PIXI.Application(window.innerWidth, window.innerHeight, {
      forceCanvas: app.config.debug.forceCanvas,
      backgroundColor: 0x555555,
      autoResize: true,
      antialias: true,
      roundPixels: true // Pixel interpolation
    });
    // Resize the view/camera to fit the whole viewport
    // app.pixi.renderer.resize(window.innerWidth, window.innerHeight);
    app.canvas = app.pixi.renderer.view;
    // Add the canvas element to the body of the DOM
    document.body.appendChild(app.pixi.renderer.view);
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
          wireframes: app.config.debug.matterWireframes,
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
    // TODO: Keep as app.renderer when Pixi is on app.pixi.renderer?
    // Could use both renderers for debuggin in future and swap them at any time
    Matter.Render.run(app.renderer);
  }
}

export default setup;
