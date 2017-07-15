import * as dat from 'dat.gui/build/dat.gui.js'; // BUG: Specify the entry point because of Webpack https://stackoverflow.com/questions/43524166/webpack-npm-use-build-version-of-installed-module-instead-of-re-building-from

class GUI {
  constructor(app) {
    // TODO: Add a value to config for enabling and disabling the data GUI
    this.app = app;
    this.presets = this.getPresets(); // TODO: Use dat.gui presets for the actual game configuration?
    this.dat = new dat.GUI({});
    //   load: this.presets.dat,
    //   preset: 'Default'
    // });
    this.dat.domElement.parentNode.style.zIndex = 1; // Bring forward dat.gui
  }

  config() {
    // TODO: Loop through all configuration options to add them to dat.gui
    let config = this.app.config;
    let folder = this.dat.addFolder('Configuration');
    // this.dat.remember(config);
    // folder.add(config, '...');
    // folder.open();
  }

  debug() {
    let debug = this.app.config.debug;
    let folder = this.dat.addFolder('Debug (save and reload)');
    this.dat.remember(debug);
    folder.add(debug, 'matterRenderer');
    folder.add(debug, 'matterWireframes');
    folder.open();
  }

  player() {
    let player = this.app.entities.get('player');
    let folder = this.dat.addFolder('Player');
    folder.add(player.body, 'angle', 0, 6, 0.1);
    folder.open();
  }

  getPresets() {
    let presets = {}; // Both dat.gui.js and game UI presets
    presets.dat = {
      "preset": "Default",
      "closed": false,
      "remembered": {
        "Default": {
          "0": {}
        },
        "Debug": {
          "0": {
            "bodies": true,
            "wireframes": true
          }
        }
      },
      "folders": {
        "Debug": {
          "preset": "Debug",
          "closed": false,
          "folders": {}
        },
        "Player": {
          "preset": "Default",
          "closed": false,
          "folders": {}
        }
      }
    }
    return presets;
  }
}

export default GUI;
