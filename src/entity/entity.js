import * as Matter from 'matter-js';
import * as PIXI from 'pixi.js';

class Entity {
  constructor(map, x, y, w, h, options = {}) {
    // TODO: Split optional arguments into renderOptions/spriteOptions and bodyOptions?
    // displayOptions shape/polygon/vertices, etc.
    // alpha... sprite
    // static... body

    this.map = map;
    this.id = map.nextId();
    this.createBody(x, y, w, h);
    this.createDisplay(x, y, w, h, options.displayOptions);
  }

  add() {
    this.map.set(this.id, this);
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
    this.display.position = this.body.position;
    this.display.rotation = this.body.angle;
  }

  stop() {
    // stop body
  }

  createDisplay(x, y, w, h, {image = false, shape = false, color = false} = {}) {
    // use a utility to generate textures from graphics
    // set anchor

    if (image) {
      var texture = PIXI.Texture.fromImage(image);
    }

    if (shape) {
      let graphics = new PIXI.Graphics();
      graphics.lineStyle(1, 0xeeeeee);
      graphics.beginFill(color);
      switch (shape) {
        case 'rect':
          graphics.drawRect(x, y, w, h);
        break;
        case 'circle':
          //
        break;
        case 'ellipse':
          //
        break;
        case 'polygon':
          //
        break;
      }
      var texture = graphics.generateCanvasTexture(1, window.devicePixelRatio);
    }

    var sprite = new PIXI.Sprite(texture);
    sprite.anchor.set(0.5);
    sprite.position.set(x, y);

    this.display = sprite;
  }

  createBody(x, y, w, h, options = {}) {
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    this.body.angle = 0.03; // TODO: for testing
  }
}

export default Entity;
