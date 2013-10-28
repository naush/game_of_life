window.onload = function() {
  var width = 10;
  var height = 10;
  var world = World.build(width, height);
  world = World.randomize(world, width, height);
  var tick = function(world, width, height, iteration) {
    setTimeout(function() {
      GUI.print(world, width, height);
      world = Game.next(world, width, height);
      iteration = iteration - 1;
      if (iteration > 0) {
        tick(world, width, height, iteration);
      }
    }, 1000);
  };
  tick(world, width, height, 50);
};
