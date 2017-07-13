import Entity from './entity';

/**
* Player.create() creates the player entity in the given map object
* where the key has to be unique, but can be the same as a key that has
* existed before, whereas the property 'id' of the entity
* will always be a unique number.
* TODO: Refine/rewrite the class description
*/
class Player extends Entity {
  static create(map, x, y, w, h, options) {
    let entity = new Player(...arguments); // Reflect.construct(Player, arguments);
    // map.set('player', entity);
    // TODO: Do I need Player.create()?
  }

  constructor(map, x, y, w, h, options) {
    // TODO: Set Player defaults for {bodyOptions: {}, displayOptions: {}}.
    // NOTE: Cannot spread arguments because of default options
    super(map, x, y, w, h, options);
    this.map = map;
    this.add();
  }

  add() {
    // TODO: Other entity classes should use this.id instead of a custom map key
    this.map.set('player', this);
  }

  remove() {
    this.map.delete('player');
  }
}

export default Player;
