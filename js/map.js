var bounds = [[-465, -645], [335, 635]];

var map = L.map('map', { crs: L.CRS.Simple, minZoom: 0.28, maxZoom: 3.5, maxBounds: bounds });

var c = new L.Control.Coordinates();

c.addTo(map);

//var image = L.imageOverlay('images/EmptyArcadiaMap.png', bounds).addTo(map);

L.tileLayer('images/map/{z}/{x}/{y}.png', {minZoom: 0.28, maxZoom: 3.5, attribution: 'My Tiles'}).addTo(map);

map.fitBounds(bounds);

map.on("mousemove", function (e) {
    c.setCoordinates(e);
});

//1280, 800

/// Marker Template: 
///     L.marker([0, 0], { icon: var }).addTo(map).bindPopup("");

/**
 * TO DO:
 * - Work on Shadow Icons for ALL icons, to make them a little easier to see (just a drop shadow should do)
 * - Add all other icons to the map
 * - Add a list on the right to enable/disable certain marker groups chromfrom the map
 */

// DISRUPTOR ICONS
var disruptorIcon = L.icon({
    iconUrl: 'images/markers/world/Disruptor_Icon.png',
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    shadowUrl: 'images/bgIcon.png',
    shadowSize: [32, 32],
    shadowAnchor: [16, 16],
    popupAnchor: [0, -11]
});

L.marker([-63, -470], { icon: disruptorIcon }).addTo(map).bindPopup("Abandoned Wastes Disruptor"); //Room Above Electro-Magnetism
L.marker([-54, -177], { icon: disruptorIcon }).addTo(map).bindPopup("Abandoned Wastes Disruptor#2"); //Above Train

L.marker([49, -78], { icon: disruptorIcon }).addTo(map).bindPopup("Last Bunker Disruptor"); //Electric Platforming Area
L.marker([203, -429], { icon: disruptorIcon }).addTo(map).bindPopup("Last Bunker Disruptor #2"); //Bell Tower

L.marker([-239, -298], { icon: disruptorIcon }).addTo(map).bindPopup("Sunken Wastes Disruptor"); //Area above right-most FR->SW Transition Room

L.marker([-270, -36], { icon: disruptorIcon }).addTo(map).bindPopup("Forgotten Ruins Disruptor"); //In small area that requires Space Disruptor

L.marker([-211, 339], { icon: disruptorIcon }).addTo(map).bindPopup("Water Ducts Disruptor"); //Couple rooms right of the train room

L.marker([-87, 413], { icon: disruptorIcon }).addTo(map).bindPopup("Pinion's Expanse Disruptor"); //Before Clock Repair

L.marker([69, 254], { icon: disruptorIcon }).addTo(map).bindPopup("Factory Facility Disruptor"); //Left Level 02
L.marker([70, 417], { icon: disruptorIcon }).addTo(map).bindPopup("Factory Facility Disruptor #2"); //Right Level 02

L.marker([186, 321], { icon: disruptorIcon }).addTo(map).bindPopup("Blazing Furnace Disruptor"); //Grapple Room

L.marker([8, 74], { icon: disruptorIcon }).addTo(map).bindPopup("Central Core Disruptor"); //Top Right Transition from Mainframe Vault

L.marker([-112, -178], { icon: disruptorIcon }).addTo(map).bindPopup("Incinerator Burner Disruptor"); //Upper IB, Room before Vertical Ascent

L.marker([-164, 100], { icon: disruptorIcon }).addTo(map).bindPopup("Former Core Disruptor"); //Top Right of Former Core room



// SKILLS ICONS
var skillIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        shadowUrl: 'images/bgIcon.png',
        shadowSize: [32, 32],
        shadowAnchor: [16, 16],
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


L.marker([-70, -333], { icon: wrenchIcon }).addTo(map).bindPopup("Adjustable Wrench");
L.marker([98, 438], { icon: bodyModifierIcon }).addTo(map).bindPopup("Body Modifier");
L.marker([-108, -435], { icon: electromagnetismIcon }).addTo(map).bindPopup("Electro-Magnetism");
L.marker([-308, 526], { icon: jumpBoosterIcon }).addTo(map).bindPopup("Jump Booster");
L.marker([-162, -2], { icon: powerBombIcon }).addTo(map).bindPopup("Power Bomb");
L.marker([-285, -581], { icon: spaceDisruptorIcon }).addTo(map).bindPopup("Space Disruptor");
L.marker([-65, 154], { icon: stringAndHookIcon }).addTo(map).bindPopup("String and Hook");
L.marker([-38, 53], { icon: heatTreatmentIcon }).addTo(map).bindPopup("Heat Treatment");
L.marker([-38, 64], { icon: sealantTreatmentIcon }).addTo(map).bindPopup("Sealant Treatment");
L.marker([-25, 15], { icon: bulbletIcon }).addTo(map).bindPopup("Bulblet");


// POWER CELL ICONS
var powerCellIcon = L.icon({
    iconUrl: 'images/markers/collectibles/PowerCell_Icon.png',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    shadowUrl: 'images/bgIcon.png',
    shadowSize: [32, 32],
    shadowAnchor: [17, 16],
    popupAnchor: [0, -11]
});

L.marker([-157, -457], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Sunken Wastes: Mysterious Egg

L.marker([-305, -271], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Forgotten Ruins: Space Disruptor Platforming Room
L.marker([-269, -225], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Forgotten Ruins: Across from train
L.marker([-312, 84], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Forgotten Ruins: Under Magnetic Footing Chip

L.marker([-280, 111], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Water Ducts: Lower WD -> FR Transition Room 
L.marker([-249, 467], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Water Ducts: Electric Water Platforming Room
L.marker([-193, 531], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell (Inside Elder Room)"); //Water Ducts: Snailbot Burrow, In Elders Room at the top

L.marker([34, -236], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Last Bunker: Falling Transition Room LB -> AW
L.marker([110, -76], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Last Bunker: Grapple Platforming Room
L.marker([188, -270], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //last Bunker: Hidden Grapple Room (Requires Power Bomb)

L.marker([-26, -131], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Central Core: Electromagnetism Vetical Platforming Room (Above Echo)
L.marker([-65, -120], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Central Core: Long Grapple Transition Room CC -> IB
L.marker([-115, 129], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Central Core: After Car Battery Boss (Accessed from the right, platforming area)
L.marker([12, 149], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Central Core: Electric Rings Room

L.marker([-142, -154], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Incinerator Burner: Behind One-way door
L.marker([-186, -191], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Incinerator Burner: Fire Enemy Pogo room

L.marker([109, 151], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Factory Facility: Awarded after defeating Surveillance Bot boss
L.marker([78, 327], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Factory Facility: Behind One-way door (progressional door)
L.marker([13, 511], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Factory Facility: Vertical Transition Room between FF -> PE
L.marker([46, 408], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Factory Facility: Grapple between Sawblades
L.marker([118, 278], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Factory Facility: Bottom left room of vertical platform room to RS

L.marker([150, 235], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Ruined Surface: Right-most before FF Transition, On top of wall

L.marker([143, 550], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Blazing Furnace: Bottom Right of first room

L.marker([-108, 423], { icon: powerCellIcon }).addTo(map).bindPopup("Power Cell"); //Pinion's Expanse: Awarded from Mischevious



// CHIP ICONS


// SCRAP PART LOCATION ICONS


// CAPSULE FRAGMENT ICONS


// LIQUID COOLANT ICONS


// RUSTED KEY ICONS


// MISC ITEMS ICONS (ELECTRIC KEY, CASSETTE, GOLDCREST WHISTLE)


// BOSS ICONS


// NPC ICONS (MAY BE IMPLEMENTED)