window.onload = function() {
  var width = 10;
  var height = 15;
  var interval = 200;
  var period = 100;

  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var index = 0; index < vars.length; index = index + 1) {
    var pair = vars[index].split('=');
    var param = decodeURIComponent(pair[0]);
    if (param == 'width') {
      width = decodeURIComponent(pair[1]);
    } else if (param == 'height') {
      height = decodeURIComponent(pair[1]);
    } else if (param == 'interval') {
      interval = decodeURIComponent(pair[1]);
    } else if (param == 'period') {
      period = decodeURIComponent(pair[1]);
    }
  }

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
    }, interval);
  };
  tick(world, width, height, period);
};
