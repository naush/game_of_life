var Game = {
  liveNeighborsCount: function(world, column, row) {
    var count = 0;
    var width = world.length - 1;
    var height = world[0].length - 1;
    var minColumn = column - 1 < 0 ? 0 : column - 1;
    var maxColumn = column + 1 > width ? width : column + 1;
    var minRow = row - 1 < 0 ? 0 : row - 1;
    var maxRow = row + 1 > height ? height : row + 1;

    for (var x = minColumn; x <= maxColumn; x = x + 1) {
      for (var y = minRow; y <= maxRow; y = y + 1) {
        if (world[x][y] == 1 && !(x == column && y == row)) {
          count = count + 1
        }
      }
    }

    return count;
  },

  next: function(world, width, height) {
    var newWorld = World.build(width, height);
    for (var column = 0; column < width; column = column +1) {
      for (var row = 0; row < height; row = row + 1) {
        var count = this.liveNeighborsCount(world, column, row);
        if (world[column][row] == 0) {
          if (count == 3) {
            newWorld[column][row] = 1;
          } else {
            newWorld[column][row] = 0;
          }
        } else {
          if (count == 2 || count == 3) {
            newWorld[column][row] = 1;
          } else {
            newWorld[column][row] = 0;
          }
        }
      }
    }
    return newWorld;
  }
};
