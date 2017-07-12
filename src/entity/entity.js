class Entity {
  constructor(map, x, y, w, h, {alpha=1, isStatic=false} = {}) {
    // x y w h... common
    // a-lpha... sprite
    // s-tatic... body
    console.log(arguments[0]); // TODO: not under arguments
    let counter = map.get('counter'); // TODO: this.counter?
    this.id = counter++;
    map.set('counter', counter);
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
