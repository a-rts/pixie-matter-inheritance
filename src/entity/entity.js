let id = 0; // TODO: ID counter global to entities that never decrements

class Entity {
  // TODO: create() should be on top level classes? Or top level classes should do Entity.create() and then change it?
  static create(entities, x,y,w,h,a,s) {
    let entity = new Entity(x,y,w,h,a,s);
    entities.push(entity);
  }

  constructor(x,y,w,h,a,s) {
    // x y w h... common
    // a-lpha... sprite
    // s-tatic... body
    this.id = id++;
  }

  add() {
    // stage and world
  }

  remove() {
    // stage and world
  }

  move() {
    // both
  }

  sprite(texture) {
    // use a utility to generate textures from graphics
    // set anchor
  }

  body() {
    // needs to be a circle even if the sprite texture of a circle is a square image
  }
}

export default Entity;
