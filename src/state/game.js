import * as Matter from 'matter-js';

const Game = { // Persistent
  create: function() {
    // Enter the game state for the first time
    // TODO: Load game save data before adding everything
    this.app.world.addAll();
  },

  enter: function() {
    // TODO: Resume game

    this.player = this.app.entities.get('player');

    // TODO: Matter.Even code is repetitive, create a utility function?

    Matter.Events.on(this.app.engine, 'collisionEnd', (event) => {
      let pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair.bodyA === this.player.sensors.ground) {
          this.player.body.grounded = false;
        }
      }
    });

    Matter.Events.on(this.app.engine, 'collisionActive', (event) => {
      let pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair.bodyA === this.player.sensors.ground) {
          this.player.body.grounded = true;
        }
      }
    });

    Matter.Events.on(this.app.engine, 'collisionStart', (event) => {
      let pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair.bodyA === this.player.sensors.ground && pair.bodyB.category == 'character') {
          console.log('Ground sensor collided with a character!');
        }
      }
    });
  },

  leave: function() {
    // Pause game
  },

  step: function(dt) {
    let force,
        mass = this.player.body.mass;
    Matter.Body.setAngle(this.player.body, 0);
    // if (this.player.body.grounded) Matter.Body.setAngle(this.player.body, 0);
    if (this.app.keyboard.keys.a) {
      this.player.body.grounded ? force = -0.002 * mass : force = -0.001 * mass;
      // let force = -0.002 * mass;
      Matter.Body.applyForce(this.player.body, this.player.body.position, {x: force, y: 0});
    } else if (this.app.keyboard.keys.d) {
      this.player.body.grounded ? force = 0.002 * mass : force = 0.001 * mass;
      // let force = 0.002 * mass;
      Matter.Body.applyForce(this.player.body, this.player.body.position, {x: force, y: 0});
    }
  },

  render: function(dt) {
    console.log('Game render step');

    Matter.Engine.update(this.app.engine);

    if (!this.app.config.debug.matterRenderer) {
      this.app.world.moveAll();
    }
  },

  keydown: function(event) {
    // if (this.app.keyboard.keys.space && player.grounded) {
    if (this.app.keyboard.keys.space && this.player.body.grounded) {
      let force = -0.03 * this.player.body.mass;
      // TODO: Increase air friction or disable left/right movement while not grounded
      Matter.Body.applyForce(this.player.body, this.player.body.position, {x: 0, y: force});
    }
  }
}

export default Game;
