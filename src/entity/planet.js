import * as Matter from 'matter-js';
import * as MatterAttractors from 'matter-attractors';
Matter.use('matter-attractors');

import Entity from './entity';

class Planet extends Entity {
  constructor(map, x, y, w, h, options) {
    // TODO: Set Player defaults for {bodyOptions: {}, displayOptions: {}}.
    // NOTE: Cannot spread arguments because of default options
    options.shape = 'circle';
    options.displayOptions = {
      color: 0xaaaaaa,
      lineStyle: [1, 0x333333]
    };
    options.bodyOptions = {
      isStatic: true
    }
    options.bodyOptions.plugin = {
      attractors: [
        // MatterAttractors.Attractors.gravity(bodyA, bodyB)
        function(bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            };
          }
      ]
    };
    super(map, x, y, w, h, options);
    this.map = map;
    this.body.category = 'planet';
    this.add();
  }
}

export default Planet;
