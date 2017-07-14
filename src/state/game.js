import * as Matter from 'matter-js';

const Game = { // Persistent
  create: function() {
    // Enter the game state for the first time
    // TODO: Load game save data before adding everything
    this.app.world.addAll();
  },

  enter: function() {
    // Resume game
  },

  leave: function() {
    // Pause game
  },

  step: function(dt) {
    // console.log(this.app); // use engine world?
  },

  render: function(dt) {
    console.log('Game render step');

    this.app.world.moveAll();

    this.app.renderer.render(this.app.stage);
    Matter.Engine.update(this.app.engine);
  }
}

export default Game;
