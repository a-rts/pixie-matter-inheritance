import * as Matter from 'matter-js';
import * as PIXI from 'pixi.js';

class Entity {
  constructor(map, x, y, w, h, options) {
    // TODO: Split optional arguments into renderOptions/spriteOptions and bodyOptions?
    // displayOptions shape/polygon/vertices, etc.
    // alpha... sprite
    // static... body

    this.map = map;
    this.id = map.nextId();
    this.createBody(x, y, w, h);
    this.createDisplay(x, y, w, h);
  }

  add() {
    this.map.add(this.id, this);
  }

  remove() {
    this.map.delete(this.id);
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

  createDisplay(x, y, w, h, options) {
    // use a utility to generate textures from graphics
    // set anchor
    let graphics = new PIXI.Graphics()
    graphics.lineStyle(1, 0xeeeeee);
    graphics.beginFill(0x1099bb);
    graphics.drawRect(x, y, w, h);
    graphics.pivot.x = w / 2;
    graphics.pivot.y = h / 2;
    
    this.display = graphics;
  }

  createBody(x, y, w, h, options = {}) {
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
  }
}

export default Entity;
