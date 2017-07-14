import * as Matter from 'matter-js'; // Physics

class Utilities {
  constructor(app) {
    this.app = app;
  }

  prototypes() {
    // The number of items that have ever existed in the map
     Map.prototype.counter = 0;
     // Return the unique counter value and increment it afterwards
     Map.prototype.nextId = function() {
       return this.counter++;
     }
  }

  addAll() {
    this.app.entities.forEach((entity) => {
      Matter.World.add(this.app.engine.world, entity.body);
      this.app.stage.addChild(entity.display);
    })
  }
}

export default Utilities;
