import * as Matter from 'matter-js';

const Game = { // Persistent
  create: function() {
    // First enter
  },

  enter: function() {
    //
  },

  leave: function() {
    //
  },

  step: function(dt) {
    // console.log(this.app); // use engine world
  },

  render: function(dt) {
    console.log('Game render step');

    Matter.Engine.update(this.app.engine);

    this.app.entities.forEach(function(entity) {
      entity.move();
    })

    this.app.renderer.render(this.app.stage);
  }
}

export default Game;
