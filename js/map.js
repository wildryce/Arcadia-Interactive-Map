var bounds = [[-940, -1526], [734, 1499]];

var map = L.map('map', { crs: L.CRS.Simple, center: [940, 1526], minZoom: -0.78, maxZoom: 1.5, maxBounds: bounds });

var c = new L.Control.Coordinates();

c.addTo(map);

var image = L.imageOverlay('images/ArcadiaMap.jpg', bounds).addTo(map);

map.fitBounds(bounds);

map.on("mousemove", function (e) {
    c.setCoordinates(e);
});



/// Marker Template: 
///     L.marker([0, 0], { icon: var }).addTo(map).bindPopup("");

/**
 * TO DO:
 * - Work on Shadow Icons for ALL icons, to make them a little easier to see (just a drop shadow should do)
 * - Add all other icons to the map
 * - Add a list on the right to enable/disable certain marker groups from the map
 */

// DISRUPTOR ICONS
var disruptorIcon = L.icon({
    iconUrl: 'images/markers/world/Disruptor_Icon.png',
    iconSize: [28, 29],
    iconAnchor: [14, 14.5],
    popupAnchor: [0, -11]
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


// SKILLS ICONS
var skillIcon = L.Icon.extend({
    options: {
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -11]
    }
});

var wrenchIcon = new skillIcon({ iconUrl: 'images/markers/skills/AdjustableWrench_Icon.png'});
var bodyModifierIcon = new skillIcon({ iconUrl: 'images/markers/skills/BodyModifier_Icon.png' });
var electromagnetismIcon = new skillIcon({ iconUrl: 'images/markers/skills/ElectroMagnetism_Icon.png' });
var jumpBoosterIcon = new skillIcon({ iconUrl: 'images/markers/skills/JumpBooster_Icon.png' });
var powerBombIcon = new skillIcon({ iconUrl: 'images/markers/skills/PowerBomb_Icon.png' });
var spaceDisruptorIcon = new skillIcon({ iconUrl: 'images/markers/skills/SpaceDisruptor_Icon.png' });
var stringAndHookIcon = new skillIcon({ iconUrl: 'images/markers/skills/StringAndHook_Icon.png' });


L.marker([-176, -833], { icon: wrenchIcon }).addTo(map).bindPopup("Adjustable Wrench");
L.marker([245, 1110], { icon: bodyModifierIcon }).addTo(map).bindPopup("Body Modifier");
L.marker([-270, -1095], { icon: electromagnetismIcon }).addTo(map).bindPopup("Electro-Magnetism");
L.marker([-770, 1315], { icon: jumpBoosterIcon }).addTo(map).bindPopup("Jump Booster");
L.marker([-407, -5], { icon: powerBombIcon }).addTo(map).bindPopup("Power Bomb");
L.marker([-715, -1465], { icon: spaceDisruptorIcon }).addTo(map).bindPopup("Space Disruptor");
L.marker([-165, 385], { icon: stringAndHookIcon }).addTo(map).bindPopup("String and Hook");

// POWER CELL ICONS


// CHIP ICONS


// SCRAP PART LOCATION ICONS


// CAPSULE FRAGMENT ICONS


// LIQUID COOLANT ICONS


// RUSTED KEY ICONS


// MISC ITEMS ICONS (ELECTRIC KEY, CASSETTE, GOLDCREST WHISTLE)


// BOSS ICONS


// NPC ICONS (MAY BE IMPLEMENTED)