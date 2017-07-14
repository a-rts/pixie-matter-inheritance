var utilities = {
  prototypes: () => {
    // The number of items that have ever existed in the map
    Map.prototype.counter = 0;
    // Return the unique counter value and increment it afterwards
    Map.prototype.nextId = function() {
      return this.counter++;
    }
  }
}

export default utilities;
