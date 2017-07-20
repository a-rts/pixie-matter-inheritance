import * as Matter from 'matter-js';

import Player from '../entity/player';
import Character from '../entity/character';
import Thing from '../entity/thing';

const Game = { // Persistent
  create: function() {
    // Enter the game state for the first time
    // TODO: Load game save data before adding everything

    let x, y, w, h;

    // Player
    x = this.app.canvas.width / 2;
    y = this.app.canvas.height / 2;
    w = 40;
    h = 40;
    let player = new Player(this.app.entities, x, y, w, h, {
      key: 'player',
      shape: 'rect',
      displayOptions: {
        color: 0x007fff,
        lineStyle: [2, 0xeeeeee]
      }
    });
    this.app.gui.player(); // Add player variables to the data GUI

    // Ground
    x = this.app.canvas.width / 2;
    y = this.app.canvas.height;
    w = this.app.canvas.width;
    h = 80;
    let ground = new Thing(this.app.entities, x, y, w, h, {
      key: 'ground',
      shape: 'rect',
      displayOptions: {
        color: 0x4f7942,
        lineStyle: [1, 0x333333]
      }
    });

    // Character
    x = this.app.canvas.width / 2 - 20;
    y = this.app.canvas.height / 2 - 80;
    w = 40;
    h = 40;
    let character = new Character(this.app.entities, x, y, w, h, {
      shape: 'circle',
      displayOptions: {
        color: 0xbd2031,
        lineStyle: [2, 0xeeeeee]
      }
    });

    this.app.world.addAll();
  },

  enter: function() {
    // TODO: Resume game

     let player = this.app.entities.get('player');

    // TODO: Matter.Even code is repetitive, create a utility function?

    Matter.Events.on(this.app.engine, 'collisionEnd', (event) => {
      let pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair.bodyA === player.sensors.ground) {
          player.body.grounded = false;
        }
      }
    });

    Matter.Events.on(this.app.engine, 'collisionActive', (event) => {
      let pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair.bodyA === player.sensors.ground) {
          player.body.grounded = true;
        }
      }
    });

    Matter.Events.on(this.app.engine, 'collisionStart', (event) => {
      let pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair.bodyA === player.sensors.ground && pair.bodyB.category == 'character') {
          console.log('Ground sensor collided with a character!');
        }
      }
    });
  },

  leave: function() {
    // Pause game
  },

  step: function(dt) {
    let player = this.app.entities.get('player');

    let force,
        mass = player.body.mass;
    Matter.Body.setAngle(player.body, 0);
    // if (player.body.grounded) Matter.Body.setAngle(player.body, 0);
    if (this.app.keyboard.keys.a) {
      player.body.grounded ? force = -0.002 * mass : force = -0.001 * mass;
      // let force = -0.002 * mass;
      Matter.Body.applyForce(player.body, player.body.position, {x: force, y: 0});
    } else if (this.app.keyboard.keys.d) {
      player.body.grounded ? force = 0.002 * mass : force = 0.001 * mass;
      // let force = 0.002 * mass;
      Matter.Body.applyForce(player.body, player.body.position, {x: force, y: 0});
    }
  },

  render: function(dt) {
    console.log('Game render step');

    let player = this.app.entities.get('player');
    Matter.Engine.update(this.app.engine);

    if (!this.app.config.debug.matterRenderer) {
      let stage = this.app.pixi.stage;
      let renderer = this.app.pixi.renderer;
      stage.pivot.x = player.display.position.x;
      stage.pivot.y = player.display.position.y;
      stage.position.x = renderer.width / 2;
      stage.position.y = (renderer.height / 4) * 3;
      this.app.world.moveAll();
      this.app
    }
  },

  keydown: function(event) {
    let player = this.app.entities.get('player');
    // if (this.app.keyboard.keys.space && player.grounded) {
    if (this.app.keyboard.keys.space && player.body.grounded) {
      let force = -0.03 * player.body.mass;
      // TODO: Increase air friction or disable left/right movement while not grounded
      Matter.Body.applyForce(player.body, player.body.position, {x: 0, y: force});
    }
  }
}

export default Game;
