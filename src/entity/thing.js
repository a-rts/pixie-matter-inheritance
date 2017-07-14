import Entity from './entity';

class Thing extends Entity {
  constructor(map, x, y, w, h, options) {
    // TODO: Set Player defaults for {bodyOptions: {}, displayOptions: {}}.
    // NOTE: Cannot spread arguments because of default options
    options.bodyOptions = {
      isStatic: true
    }
    super(map, x, y, w, h, options);
    this.map = map;
    this.add();
  }
}

export default Thing;
