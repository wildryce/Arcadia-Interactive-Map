var tileSize = 1920;
var imageSize = 15360;
var factor = tileSize / imageSize;

L.CRS.MyCRS = L.extend({}, L.CRS.Simple, { transformation: new L.transformation(factor, 0, -factor, tileSize) });
var bounds = [[3840, 0], [imageSize - tileSize, imageSize]];

var map = L.map('map', { crs: L.CRS.MyCRS, zoom: 0, minZoom: 0, maxZoom: 3, zoomSnap: 0, zoomDelta: 0.5, maxBounds: bounds }); //Center: 9425, 7750

var c = new L.Control.Coordinates();
c.addTo(map);

L.tileLayer('./images/map/{z}/{x}/{y}.png', { tileSize: tileSize }).addTo(map);

map.fitBounds(bounds);
map.setView([imageSize / 1.75, imageSize / 2], 0)

map.on("mousemove", function (e) {
    c.setCoordinates(e);
});

