var World = {
  build: function(width, height) {
    var world = new Array(width);
    for (var column = 0; column < width; column = column +1) {
      world[column] = new Array(height);
      for (var row = 0; row < height; row = row + 1) {
        world[column][row] = 0;
      }
    }
    return world;
  },

  randomize: function(world, width, height) {
    var seed = [0, 0, 0, 0, 1];
    for (var column = 0; column < width; column = column +1) {
      for (var row = 0; row < height; row = row + 1) {
        world[column][row] = seed[Math.floor(Math.random() * seed.length)];
      }
    }
    return world;
  }
};
