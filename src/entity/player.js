import * as Matter from 'matter-js';

import Entity from './entity';

class Player extends Entity {
  constructor(map, x, y, w, h, options) {
    // TODO: Set Player defaults for {bodyOptions: {}, displayOptions: {}}.
    // NOTE: Cannot spread arguments because of default options
    super(map, x, y, w, h, options);
    this.map = map;
    this.createPlayer();
    this.body.category = 'player';
    this.add();
  }

  createPlayer() {
    // Sensors are returned as an array and also added to this.sensors
    let sensors = this.createSensors();
    this.body = Matter.Body.create({
      parts: [this.body, ...sensors]
    });
  }

  createSensors() {
    this.sensors = {};
    let r, y;
    r = 2
    y = this.y + this.h / 2 + r;
    let sensors = [];
    let groundSensor = Matter.Bodies.circle(this.x, y, r, {
      isSensor: true,
      density: 0,
      friction: 0.3
    });
    sensors.push(groundSensor);
    this.sensors.ground = groundSensor;
    return sensors;
  }
}

export default Player;
