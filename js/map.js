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

L.marker([-159, -1177], { icon: disruptorIcon }).addTo(map).bindPopup("Abandoned Wastes Disruptor"); //Room Above Electro-Magnetism
L.marker([-137, -444], { icon: disruptorIcon }).addTo(map).bindPopup("Abandoned Wastes Disruptor#2"); //Above Train

L.marker([120, -200], { icon: disruptorIcon }).addTo(map).bindPopup("Last Bunker Disruptor"); //Electric Platforming Area
L.marker([506, -1075], { icon: disruptorIcon }).addTo(map).bindPopup("Last Bunker Disruptor #2"); //Bell Tower

L.marker([-600, -750], { icon: disruptorIcon }).addTo(map).bindPopup("Sunken Wastes Disruptor"); //Area above right-most FR->SW Transition Room

L.marker([-677, -95], { icon: disruptorIcon }).addTo(map).bindPopup("Forgotten Ruins Disruptor"); //In small area that requires Space Disruptor

L.marker([-532, 845], { icon: disruptorIcon }).addTo(map).bindPopup("Water Ducts Disruptor"); //Couple rooms right of the train room

L.marker([-219, 1030], { icon: disruptorIcon }).addTo(map).bindPopup("Pinion's Expanse Disruptor"); //Before Clock Repair

L.marker([169, 630], { icon: disruptorIcon }).addTo(map).bindPopup("Factory Facility Disruptor"); //Left Level 02
L.marker([173, 1040], { icon: disruptorIcon }).addTo(map).bindPopup("Factory Facility Disruptor #2"); //Right Level 02

L.marker([470, 800], { icon: disruptorIcon }).addTo(map).bindPopup("Blazing Furnace Disruptor"); //Grapple Room

L.marker([18, 180], { icon: disruptorIcon }).addTo(map).bindPopup("Central Core Disruptor"); //Top Right Transition from Mainframe Vault

L.marker([-285, -450], { icon: disruptorIcon }).addTo(map).bindPopup("Incinerator Burner Disruptor"); //Upper IB, Room before Vertical Ascent

L.marker([-409, 250], { icon: disruptorIcon }).addTo(map).bindPopup("Former Core Disruptor"); //Top Right of Former Core room



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
var heatTreatmentIcon = new skillIcon({ iconUrl: 'images/markers/skills/HeatTreatment_Icon.png' });
var sealantTreatmentIcon = new skillIcon({ iconUrl: 'images/markers/skills/SealantTreatment_Icon.png' });
var bulbletIcon = new skillIcon({ iconUrl: 'images/markers/skills/Bulblet_Icon.png' });


L.marker([-176, -833], { icon: wrenchIcon }).addTo(map).bindPopup("Adjustable Wrench");
L.marker([245, 1110], { icon: bodyModifierIcon }).addTo(map).bindPopup("Body Modifier");
L.marker([-270, -1095], { icon: electromagnetismIcon }).addTo(map).bindPopup("Electro-Magnetism");
L.marker([-770, 1315], { icon: jumpBoosterIcon }).addTo(map).bindPopup("Jump Booster");
L.marker([-407, -5], { icon: powerBombIcon }).addTo(map).bindPopup("Power Bomb");
L.marker([-715, -1465], { icon: spaceDisruptorIcon }).addTo(map).bindPopup("Space Disruptor");
L.marker([-165, 385], { icon: stringAndHookIcon }).addTo(map).bindPopup("String and Hook");

L.marker([-95, 130], { icon: heatTreatmentIcon }).addTo(map).bindPopup("Heat Treatment");
L.marker([-95, 160], { icon: sealantTreatmentIcon }).addTo(map).bindPopup("Sealant Treatment");
L.marker([-65, 35], { icon: bulbletIcon }).addTo(map).bindPopup("Bulblet");


// POWER CELL ICONS
var powerCellIcon = L.icon({
    iconUrl: 'images/markers/collectibles/PowerCell_Icon.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -11]
});

L.marker([-395, -1145], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Sunken Wastes: Mysterious Egg

L.marker([-765, -678], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Forgotten Ruins: Space Disruptor Platforming Room
L.marker([-675, -567], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Forgotten Ruins: Across from train
L.marker([-780, 210], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Forgotten Ruins: Under Magnetic Footing Chip

L.marker([-700, 275], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Water Ducts: Lower WD -> FR Transition Room 
L.marker([-625, 1170], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Water Ducts: Electric Water Platforming Room
L.marker([-485, 1326], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell (Inside Elder Room)"); //Water Ducts: Snailbot Burrow, In Elders Room at the top

L.marker([85, -592], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Last Bunker: Falling Transition Room LB -> AW
L.marker([273, -191], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Last Bunker: Grapple Platforming Room
L.marker([470, -675], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //last Bunker: Hidden Grapple Room (Requires Power Bomb)

L.marker([-65, -330], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Central Core: Electromagnetism Vetical Platforming Room (Above Echo)
L.marker([-165, -300], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Central Core: Long Grapple Transition Room CC -> IB
L.marker([-285, 325], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Central Core: After Car Battery Boss (Accessed from the right, platforming area)
L.marker([30, 370], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Central Core: Electric Rings Room

L.marker([-353, -390], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Incinerator Burner: Behind One-way door
L.marker([-465, -477], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Incinerator Burner: Fire Enemy Pogo room

L.marker([272, 377], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Factory Facility: Awarded after defeating Surveillance Bot boss
L.marker([194, 820], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Factory Facility: Behind One-way door (progressional door)
L.marker([30, 1277], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Factory Facility: Vertical Transition Room between FF -> PE
L.marker([113, 1025], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Factory Facility: Grapple between Sawblades
L.marker([295, 690], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Factory Facility: Bottom left room of vertical platform room to RS

L.marker([380, 585], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Ruined Surface: Right-most before FF Transition, On top of wall

L.marker([357, 1376], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Blazing Furnace: Bottom Left of first room

L.marker([-273, 1056], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Pinion's Expanse: Awarded from Mischevious



// CHIP ICONS


// SCRAP PART LOCATION ICONS


// CAPSULE FRAGMENT ICONS


// LIQUID COOLANT ICONS


// RUSTED KEY ICONS


// MISC ITEMS ICONS (ELECTRIC KEY, CASSETTE, GOLDCREST WHISTLE)


// BOSS ICONS


// NPC ICONS (MAY BE IMPLEMENTED)