class Entity {
  static create(array,x,y,w,h,a,s) { // TODO: objects are passed by reference?
    let entity = new Entity(array,x,y,w,h,a,s);
    array.push(entity);
  }

  constructor() {
    // x y w h... common
    // a-lpha... sprite
    // s-tatic... body
    entities.push(this);
    this.id = entities.length;
  }

  add() {
    // stage and world
  }

  remove() {
    // stage and world
  }

  show() {
    // sprite and/or body
  }

  hide() {
    // sprite and/or body
    // if body is hidden, sprite is static?
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
