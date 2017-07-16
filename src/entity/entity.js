import * as Matter from 'matter-js';
import * as PIXI from 'pixi.js';

class Entity {
  constructor(map, x, y, w, h, options = {}) {
    this.map = map;
    this.id = map.nextId(); // TODO: Use this.body.id instead?
    options.key ? this.key = options.key : this.key = this.id;
    this.shape = options.shape;

    this.createBody(x, y, w, h, options.bodyOptions);
    this.createDisplay(x, y, w, h, options.displayOptions);
  }

  add() {
    this.map.set(this.key || this.id, this);
  }

  remove() {
    this.map.delete(this.key || this.id);
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

  createDisplay(x, y, w, h, {image = false, color = false, lineStyle = false} = {}) {
    if (this.shape) {
      if (lineStyle) {
        w -= lineStyle[0];
        h -= lineStyle[0];
      }

      let graphics = new PIXI.Graphics();
      graphics.lineStyle(...lineStyle);
      graphics.beginFill(color);

      switch (this.shape) {
        case 'rect':
          graphics.drawRect(x, y, w, h);
        break;

        case 'circle':
          graphics.drawCircle(x, y, w / 2);
        break;

        case 'ellipse':
          throw 'TODO';
        break;

        case 'polygon':
          throw 'TODO';
        break;
      }
      // TODO: Optional graphics line to see rotation

      var texture = graphics.generateCanvasTexture(2, window.devicePixelRatio);
    }

    if (image) {
      var texture = PIXI.Texture.fromImage(image);
    }

    var sprite = new PIXI.Sprite(texture);
    sprite.anchor.set(0.5);
    sprite.position.set(x, y);

    this.display = sprite;
  }

  createBody(x, y, w, h, options = {}) {
    // TODO: Shape from vertices
    switch (this.shape) {
      case 'rect':
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        break;

      case 'circle':
        this.body = Matter.Bodies.circle(x, y, w / 2);
        break;

      case 'ellipse':
        throw 'TODO';
        break;

      case 'polygon':
        throw 'TODO';
        break;
    }
  }
}

export default Entity;
