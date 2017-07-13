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

    // let i = this.app.entities.size;
    // while (i--) {
    //
    // }

    for (let entity in this.app.entities) {
      // TODO: Make them move!
      entity.display.position = entity.body.position;
      entity.display.rotation = entity.body.angle;
    }

    this.app.renderer.render(this.app.stage);
  }
}

export default Game;
