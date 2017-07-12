import Entity from './entity';

class Player extends Entity {
  static create(map, x, y, w, h, {alpha=1, isStatic=false} = {}) {
    let entity = Reflect.construct(Player, arguments);
    map.set('player', entity);
  }

  constructor(map, x, y, w, h, {alpha=1, isStatic=false} = {}) {
    super(arguments);
  }
}

export default Player;
