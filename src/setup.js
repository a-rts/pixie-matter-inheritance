import Player from './entity/player';

const setup = {
  preload: function(game) {
    //
  },

  create: function(game) {
    let player = Player.create(
      game.entities,
      game.renderer.width / 2,
      game.renderer.height / 2,
      20, 20
    );
  }
}

export default setup;
