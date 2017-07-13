import Entity from './entity';

class Thing extends Entity {
  constructor(map, x, y, w, h, options) {
    super(map, x, y, w, h, options);
    this.map = map;
    this.add();
  }
}

export default Thing;
