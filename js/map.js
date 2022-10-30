var bounds = [[-940, -1526], [734, 1499]];

var map = L.map('map', { crs: L.CRS.Simple, center: [940, 1526], minZoom: -1, maxZoom: 2, maxBounds: bounds });

var c = new L.Control.Coordinates();

c.addTo(map);

var image = L.imageOverlay('images/ArcadiaMap.jpg', bounds).addTo(map);

map.fitBounds(bounds);

map.on("mousemove", function (e) {
    c.setCoordinates(e);
});


/// DISRUPTOR ICONS
var disruptorIcon = L.icon({
    iconUrl: 'images/markers/world/Disruptor_Icon.png',
    iconSize: [30, 31],
    iconAnchor: [15, 15.5],
    popupAnchor: [0, -12]
});

L.marker([-137, -444], { icon: disruptorIcon }).addTo(map).bindPopup("Abandoned Wastes Disruptor");
L.marker([120, -200], { icon: disruptorIcon }).addTo(map).bindPopup("Last Bunker Disruptor");
L.marker([-600, -750], { icon: disruptorIcon }).addTo(map).bindPopup("Sunken Wastes Disruptor");
L.marker([-677, -95], { icon: disruptorIcon }).addTo(map).bindPopup("Forgotten Ruins Disruptor");
L.marker([-532, 845], { icon: disruptorIcon }).addTo(map).bindPopup("Water Ducts Disruptor");
L.marker([-219, 1030], { icon: disruptorIcon }).addTo(map).bindPopup("Pinion's Expanse Disruptor");
L.marker([169, 630], { icon: disruptorIcon }).addTo(map).bindPopup("Factory Facility Disruptor");
L.marker([470, 800], { icon: disruptorIcon }).addTo(map).bindPopup("Blazing Furnace Disruptor");
L.marker([18, 180], { icon: disruptorIcon }).addTo(map).bindPopup("Central Core Disruptor");
L.marker([-285, -450], { icon: disruptorIcon }).addTo(map).bindPopup("Incinerator Burner Disruptor");
L.marker([-409, 250], { icon: disruptorIcon }).addTo(map).bindPopup("Former Core Disruptor");
