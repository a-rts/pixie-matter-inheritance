import Entity from './entity';

class Character extends Entity {
  constructor(map, x, y, w, h, options) {
    // TODO: Set Character defaults for {bodyOptions: {}, displayOptions: {}}.
    // NOTE: Cannot spread arguments because of default options
    super(map, x, y, w, h, options);
    this.map = map;
    this.add();
  }
}

export default Character;
