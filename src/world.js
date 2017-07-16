import * as Matter from 'matter-js'; // Physics

class World {
  constructor(app) {
    this.app = app;
  }

  addAll() {
    this.app.entities.forEach((entity) => {
      Matter.World.add(this.app.engine.world, entity.body);
      if (!this.app.config.debug.matterRenderer) {
        this.app.pixi.stage.addChild(entity.display);
      }
    })
  }

  moveAll() {
    this.app.entities.forEach(function(entity) {
      entity.move();
    })
  }
}

export default World;
