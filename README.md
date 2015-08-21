# Leaflet.RandomProvider

Leaflet plugin for loading tiles from random providers.

####Map demo: http://feesta.github.io/Leaflet.RandomProvider

```
var urls = ['//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            '//{s}.tile.osm.org/{z}/{x}/{y}.png',
            '//{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
            '//{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'];
  
document.addEventListener("DOMContentLoaded", function(event) {
    var map_container = document.createElement('div');
    document.body.appendChild(map_container);
    
    var map = L.map(map_container);
    L.TileLayer.random(urls).addTo(map);
});
```

The list of providers I used: http://pastebin.com/ZEiLqGcH
I'd like to expand this but also limit to ones with near-global coverage.
