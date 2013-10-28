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
  },

  glider: function(world, x, y) {
    world[x][y] = 1;
    world[x + 1][y - 2] = 1;
    world[x + 1][y] = 1;
    world[x + 2][y - 1] = 1;
    world[x + 2][y] = 1;
    return world;
  },

  spaceship: function(world, x, y) {
    world[x][y] = 1;
    world[x][y + 2] = 1;
    world[x + 1][y + 3] = 1;
    world[x + 2][y + 3] = 1;
    world[x + 3][y] = 1;
    world[x + 3][y + 3] = 1;
    world[x + 4][y + 1] = 1;
    world[x + 4][y + 2] = 1;
    world[x + 4][y + 3] = 1;
    return world;
  }
};
