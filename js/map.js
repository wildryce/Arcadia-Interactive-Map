var bounds = [[-940, -1526], [734, 1499]];

var map = L.map('map', { crs: L.CRS.Simple, center: [940, 1526], minZoom: -1, maxZoom: 2, maxBounds: bounds });

var c = new L.Control.Coordinates();

c.addTo(map);


var image = L.imageOverlay('images/ArcadiaMap.jpg', bounds).addTo(map);

map.fitBounds(bounds);

map.on("mousemove", function (e) {
    c.setCoordinates(e);
});
