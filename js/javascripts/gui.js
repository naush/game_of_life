var GUI = {
  print: function(world, width, height) {
    var tbody = '<tbody>';
    for (var column = 0; column < width; column = column +1) {
      var line = '<tr>';
      for (var row = 0; row < height; row = row + 1) {
        if (world[column][row] == 1) {
          line = line + '<td class="live"></td>';
        } else {
          line = line + '<td class="dead"></td>';
        }
      }
      tbody = tbody + line + '</tr>';
    }
    var table = document.getElementById("world");
    table.innerHTML = tbody + '</tbody>';
  }
};
