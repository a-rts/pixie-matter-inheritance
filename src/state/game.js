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


    this.app.entities.forEach(function(entity) {
      entity.move();
      // entity.display.position = entity.body.position;
      // entity.display.rotation = entity.body.angle;
    })

    // console.log(this.app.entities.get('ground').body.position);

    this.app.renderer.render(this.app.stage);
    Matter.Engine.update(this.app.engine);
  }
}

export default Game;
