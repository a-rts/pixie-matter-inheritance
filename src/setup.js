import Player from './entity/player';
import Thing from './entity/thing';

const setup = {
  preload: function(app) {
    //
  },

  create: function(app) {
    let x, y, w, h;

    x = app.renderer.width / 4;
    y = app.renderer.height / 4;
    w = 20;
    h = 20;
    let player = new Player(app.entities, x, y, w, h, {
      displayOptions: {
        shape: 'rect',
        color: 0x1099bb
      }
    });

    // x = app.renderer.width / 2;
    // y = app.renderer.height;
    x = 50;
    y = 50;
    w = app.renderer.width - 20;
    h = 40;
    let ground = new Thing(app.entities, x, y, w, h);
  }
}

export default setup;
