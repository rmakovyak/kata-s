function simulateStep(mapData) {
  for (x = 0; x < mapData.length; x++) {
    for(y = 0; y < mapData[x].length; y++) {
      let neighbours = 0
      if (mapData[x-1] && mapData[x-1][y-1])
        neighbours++;
      if (mapData[x-1] && mapData[x-1][y])
        neighbours++;
      if (mapData[x-1] && mapData[x-1][y+1])
        neighbours++;
      if (mapData[x] && mapData[x][y-1])
        neighbours++;
      if (mapData[x] && mapData[x][y+1])
        neighbours++;
      if (mapData[x+1] && mapData[x+1][y-1])
        neighbours++;
      if (mapData[x+1] && mapData[x+1][y])
        neighbours++;
      if (mapData[x+1] && mapData[x+1][y+1])
        neighbours++;
      
      if (neighbours == 2 || neighbours == 3) {
        mapData[x][y] = 1 
      } else {
        mapData[x][y] = 0
      }
    }
  }
}

function generateData() {
  var data = new Array()
  for (i = 0; i < 100; i++) {
    data.push(new Array)
    for(j = 0; j < 100; j++) {
      data[i].push(0)
    }
  }
  return data;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function clean() {
  var map = document.getElementById("map")
  map.parentNode.removeChild(map)
}

function renderMap(mapData) {
  clean()
  var map = document.createElement('div')
  map.id = 'map'
  document.body.appendChild(map)
  map = document.getElementById("map")

  for (i = 0; i < mapData.length; i++) {
    var rowNode = document.createElement("div")
    rowNode.className = "row"
    var row = map.appendChild(rowNode)

    for(j = 0; j < mapData[i].length; j++) {
      var cellNode = document.createElement("div")
      cellNode.className = mapData[i][j] ? "cell alive" : "cell"
      row.appendChild(cellNode)    
    }
  
  }
}

var mapData = generateData()
mapData[10][10] = 1;
mapData[10][11] = 1;
mapData[11][11] = 1;

setInterval(function(){
  renderMap(mapData)
  simulateStep(mapData) 
}, 1)
