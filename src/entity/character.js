import Entity from './entity';

class Character extends Entity {
  constructor(map, x, y, w, h, options) {
    // TODO: Set Character defaults for {bodyOptions: {}, displayOptions: {}}.
    // NOTE: Cannot spread arguments because of default options
    // TODO: If bodyOptions not defined, define as object ad add defaults
    options.bodyOptions = {
      mass: 10
    };
    super(map, x, y, w, h, options);
    this.map = map;
    this.body.category = 'character';
    this.add();
  }
}

export default Character;
