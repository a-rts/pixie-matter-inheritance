import Player from './entity/player';

const setup = {
  preload: function(app) {
    //
  },

  create: function(app) {
    let x = app.renderer.width / 4;
    let y = app.renderer.height / 4;
    let player = Player.create(app.entities, x, y, 20, 20);
    // console.log(app.entities);
  }
}

export default setup;
