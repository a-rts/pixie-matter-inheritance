import * as DAT from 'dat.gui/build/dat.gui.js'; // BUG: Specify the entry point because of Webpack https://stackoverflow.com/questions/43524166/webpack-npm-use-build-version-of-installed-module-instead-of-re-building-from

class GUI {
  constructor(app) {
    this.app = app;
    this.dat = new DAT.GUI();
    this.dat.domElement.parentNode.style.zIndex = 1;
  }

  player() {
    let player = this.app.entities.get('player');
    console.log('For dat.gui:', player.body);
    this.dat.add(player.body, 'angle', 0, 6, 0.1);
    this.dat.add(player.body, 'angularSpeed');
    this.dat.add(player.body, 'angularVelocity');
  }
}

export default GUI;
