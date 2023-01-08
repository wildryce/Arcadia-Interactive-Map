/// Marker Template:
///     L.marker(LatLng(0, 0, var, opacity: 1, riseOnHover: true, title: "" }).addTo(map).on('click', changeOpacity);

var gray = 'images/backgrounds/gray.png';
var red = 'images/backgrounds/red.png';
var yellow = 'images/backgrounds/yellow.png';
var purple = 'images/backgrounds/purple.png';
var blue = 'images/backgrounds/blue.png';
var green = 'images/backgrounds/green.png';
var brown = 'images/backgrounds/brown.png';
var pink = 'images/backgrounds/pink.png';
var teal = 'images/backgrounds/teal.png';

var allIconsList = [];

/// SHOP LAYOUTS
var zoomMod = 30;
var echoTextPos = [2450, 1000];
var echoBounds = [LatLng(echoTextPos[0] - 150, echoTextPos[1]), LatLng(echoTextPos[0] + 150, echoTextPos[1] + 900)];

var sonnetTextPos = [300, -5350];
var sonnetBounds = [LatLng(sonnetTextPos[0] - 450, sonnetTextPos[1]), LatLng(sonnetTextPos[0] + 450, sonnetTextPos[1] + 1200)];

var reaperTextPos = [2100, 1000];
var reaperBounds = [LatLng(reaperTextPos[0] - 150, reaperTextPos[1]), LatLng(reaperTextPos[0] + 150, reaperTextPos[1] + 900)];


/** Converts given LatLng values to properly be displayed on map .
 *   - Given coordinates on map are cosmetic, as the coordinates are shifted to have the origin [0, 0] on the Mainframe Vault.
 *   - If you ever want to retrieve or set coordinates for unmodified map coordinates, use this function.
 */
function LatLng(lat, lng) {
    var latMod = 9425;
    var lngMod = 7750;

    var newLat = lat + latMod;
    var newLng = lng + lngMod;
    return [newLat, newLng];
}


function changeOpacity(e) {
    var marker = e.target;

    if (marker.options.opacity != 0.5 && marker.options.opacity != 1) {
        marker.setOpacity(1);
    }
    console.log(marker.options.opacity);

    if (marker.options.opacity == 1) {
        marker.setOpacity(0.5);
    }
    else
    {
        marker.setOpacity(1);
    }

    SaveMarkerStates();
}


/**
 * 
 * @param {any} lat - the latitude coordinate on the map
 * @param {any} lng - the longitude coordinate on the map
 * @param {any} ico - the icon of the marker
 * @param {any} opa - the base opacity of the marker
 * @param {boolean} hover - the hover condition (if it will move to front on hover)
 * @param {string} t - the title of the marker that is displayed on hover
 * @param {boolean} click - the condition on if the marker will be affected by clicks or not
 */
function CreateMarker(lat, lng, ico, t, click) {

    var tempMarker = L.marker(LatLng(lat, lng), { icon: ico, opacity: 1, riseOnHover: true, title: t }).addTo(map);
    if (click) {
        tempMarker.on('click', changeOpacity);
    }

    return tempMarker;
}


function AddToAllList(list) {
    for (let i = 0; i < list.length; i++) {
        allIconsList.push(list[i]);
    }
}


function ResetAll() {
    for (let i = 0; i < allIconsList.length; i++) {
        var marker = allIconsList[i];
        if (marker.options.opacity != 1) {
            marker.setOpacity(1);
        }
    }
    SaveMarkerStates();
}


window.addEventListener('click', checkShopDisplay);


//#region Disruptors
var disruptorIcon = L.icon({
    iconUrl: 'images/markers/world/Disruptor_Icon.png',
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    shadowUrl: red,
    shadowSize: [32, 32],
    shadowAnchor: [16, 16],
    popupAnchor: [0, -11]
});

var aw = CreateMarker(-770, -5660, disruptorIcon, "Abandoned Wastes Disruptor", true); //Room Above Electro-Magnetism
var aw2 = CreateMarker(-655, -2135, disruptorIcon, "Abandoned Wastes Disruptor #2", true); //Above Train

var lb = CreateMarker(580, -950, disruptorIcon, "Last Bunker Disruptor", true); //Electric Platforming Area
var lb2 = CreateMarker(2430, -5155, disruptorIcon, "Last Bunker Disruptor #2", true); //Bell Tower

var sw = CreateMarker(-2875, -3605, disruptorIcon, "Sunken Wastes Disruptor", true); //Area above right-most FR->SW Transition Room

var fr = CreateMarker(-3250, -445, disruptorIcon, "Forgotten Ruins Disruptor", true); //In small area that requires Space Disruptor

var wd = CreateMarker(-2545, 4050, disruptorIcon, "Water Ducts Disruptor", true); //Couple rooms right of the train room

var pe = CreateMarker(-1050, 4960, disruptorIcon, "Pinion's Expanse Disruptor", true); //Before Clock Repair

var ff = CreateMarker(820, 3030, disruptorIcon, "Factory Facility Disruptor", true); //Left Level 02
var ff2 = CreateMarker(835, 4990, disruptorIcon, "Factory Facility Disruptor #2", true); //Right Level 02

var bf = CreateMarker(2230, 3845, disruptorIcon, "Blazing Furnace Disruptor", true); //Grapple Room

var cc = CreateMarker(85, 855, disruptorIcon, "Central Core Disruptor", true); //Top Right Transition from Mainframe Vault
var cc2 = CreateMarker(-1970, 1180, disruptorIcon, "Former Core Disruptor", true); //Top Right of Former Core room

var ib = CreateMarker(-1350, -2150, disruptorIcon, "Incinerator Burner Disruptor", true); //Upper IB, Room before Vertical Ascent

var disruptorsList = [aw, aw2, lb, lb2, sw, fr, wd, pe, ff, ff2, bf, cc, cc2, ib];
var disruptors = L.layerGroup(disruptorsList).addTo(map);
AddToAllList(disruptorsList);

//#endregion


//#region Pins
var pinIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [14, 14]
    }
});

var saveIcon = new pinIcon({ iconUrl: 'images/markers/world/healthPin.png' });

var savePinAW1 = CreateMarker(-295, -3475, saveIcon, "Save Station", false); //AW - First Save station
var savePinAW2 = CreateMarker(-955, -5140, saveIcon, "Save Station", false); //AW - Above Electromagnetism
var savePinAW3 = CreateMarker(-1270, -3280, saveIcon, "Save Station", false); //AW - After Goldcrest Whistle

var savePinCC1 = CreateMarker(-75, 575, saveIcon, "Save Station", false); //CC - Mainframe Vault
var savePinCC2 = CreateMarker(-1660, 5, saveIcon, "Save Station", false); //CC - Before Car Battery Boss
var savePinCC3 = CreateMarker(-2400, 205, saveIcon, "Save Station", false); //CC - Near Electric Key / Electron Boss

var savePinPE = CreateMarker(-1240, 3580, saveIcon, "Save Station", false); //PE - Entrance

var savePinSW1 = CreateMarker(-2130, -6210, saveIcon, 1, true, "Save Station", false); //SW - Left Side
var savePinSW2 = CreateMarker(-2590, -3450, saveIcon, 1, true, "Save Station", false); //SW - Right Side

var savePinFF1 = CreateMarker(420, 3740, saveIcon, "Save Station", false); //FF - Right of Train Room; Level 0
var savePinFF2 = CreateMarker(645, 2555, saveIcon, "Save Station", false); //FF - Above Train Room; Extractor Chip Room; Level 1
var savePinFF3 = CreateMarker(1100, 6805, saveIcon, "Save Station", false); //FF - Right of Sawblade Boss; Level 2

var savePinBF = CreateMarker(2511, 5675, saveIcon, "Save Station", false); //BF - Before Red Socket Room

var savePinLB1 = CreateMarker(1230, -2620, saveIcon, "Save Station", false); //LB - Near Kitchen
var savePinLB2 = CreateMarker(2045, -4595, saveIcon, "Save Station", false); //LB - After Bell Tower (Giant Pit Multi-Room)

var savePinIB = CreateMarker(-2130, -1025, saveIcon, "Save Station", false); //IB - After Sacrifice Room

var savePinWD1 = CreateMarker(-2235, 2645, saveIcon, "Save Station", false); //WD - After Entrance Tall Room
var savePinWD2 = CreateMarker(-3410, 4155, saveIcon, "Save Station", false); //WD - Before Spider Boss(es)

var savePinFR1 = CreateMarker(-3675, -3835, saveIcon, "Save Station", false); //FR - Under Rusty
var savePinFR2 = CreateMarker(-4135, -195, saveIcon, "Save Station", false); //FR - Before Archives Final Bosses


var trainIcon = new pinIcon({ iconUrl: 'images/markers/world/trainPin.png' });

var trainPinAW = CreateMarker(-825, -2385, trainIcon, "Train Station", false); //Abandoned Wastes
var trainPinFR = CreateMarker(-3390, -1665, trainIcon, "Train Station", false); //Forgotten Ruins
var trainPinLB = CreateMarker(1730, -920, trainIcon, "Train Station", false); //Last Bunker
var trainPinWD = CreateMarker(-2630, 2940, trainIcon, "Train Station", false); //Water Ducts
var trainPinFF = CreateMarker(445, 2430, trainIcon, "Train Station", false); //Factory Facility
var trainPinPE = CreateMarker(-1230, 4245, trainIcon, "Train Station", false); //Pinion's Expanse
var trainPinCC = CreateMarker(-1140, 405, trainIcon, "Train Station", false); //Central Core (Corrupt Addition)
var trainPinSW = CreateMarker(-2506, -5195, trainIcon, "Train Station", false); //Sunken Wastes (Corrupt Addition)



var perchIcon = new pinIcon({ iconUrl: 'images/markers/world/perchPin.png' });

var perchPinAW = CreateMarker(-1080, -2740, perchIcon, "Perch", false);
var perchPinCC1 = CreateMarker(-75, 710, perchIcon, "Perch", false);
var perchPinCC2 = CreateMarker(-2400, 100, perchIcon, "Perch", false);
var perchPinLB1 = CreateMarker(1220, -2455, perchIcon, "Perch", false);
var perchPinLB2 = CreateMarker(2045, -4705, perchIcon, "Perch", false);
var perchPinSW = CreateMarker(-2525, -4760, perchIcon, "Perch", false);
var perchPinFR1 = CreateMarker(-3675, -3965, perchIcon, "Perch", false);
var perchPinFR2 = CreateMarker(-4020, 85, perchIcon, "Perch", false); //Lost Archives
var perchPinWD1 = CreateMarker(-2235, 2570, perchIcon, "Perch", false);
var perchPinWD2 = CreateMarker(-3410, 4545, perchIcon, "Perch", false);
var perchPinPE = CreateMarker(-1100, 3605, perchIcon, "Perch", false);
var perchPinFF1 = CreateMarker(420, 3910, perchIcon, "Perch", false);
var perchPinFF2 = CreateMarker(1100, 6980, perchIcon, "Perch", false);
var perchPinBF = CreateMarker(2510, 5515, perchIcon, "Perch", false);


var pinList =
    [
        savePinAW1, savePinAW2, savePinAW3, savePinCC1, savePinCC2, savePinCC3, savePinPE, savePinSW1, savePinSW2, savePinFF1, savePinFF2, savePinFF3, savePinBF, savePinLB1, savePinLB2, savePinIB, savePinWD1, savePinWD2, savePinFR1, savePinFR2,
        trainPinAW, trainPinFR, trainPinLB, trainPinWD, trainPinFF, trainPinPE, trainPinCC, trainPinSW,
        perchPinCC1, perchPinCC2, perchPinAW, perchPinLB1, perchPinLB2, perchPinSW, perchPinFR1, perchPinFR2, perchPinWD1, perchPinWD2, perchPinPE, perchPinFF1, perchPinFF2, perchPinBF
    ];
var pins = L.layerGroup(pinList).addTo(map);
//#endregion


//#region Shops Items (Shown up top on the map)
var shopIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        shadowSize: [32, 32],
        shadowAnchor: [16, 16]
    }
});

var shopgreenChipIcon = new shopIcon({ iconUrl: 'images/markers/upgrades/GreenChip_Icon.png', shadowUrl: pink });
var shopBlueChipIcon = new shopIcon({ iconUrl: 'images/markers/upgrades/BlueChip_Icon.png', shadowUrl: pink });
var shopRedChipIcon = new shopIcon({ iconUrl: 'images/markers/upgrades/RedChip_Icon.png', shadowUrl: pink });
var shopBlueSocket = new shopIcon({ iconUrl: 'images/markers/upgrades/BlueSocket_Icon.png', shadowUrl: pink });
var shopRedSocket = new shopIcon({ iconUrl: 'images/markers/upgrades/RedSocket_Icon.png', shadowUrl: pink });
var shopKeyIcon = new shopIcon({ iconUrl: 'images/markers/collectibles/RustyKey_Icon.png', shadowUrl: teal });
var shopSkullGreenIcon = new shopIcon({ iconUrl: 'images/markers/collectibles/GreenSkull_Icon.png', shadowUrl: green });
var shopSkullRedIcon = new shopIcon({ iconUrl: 'images/markers/collectibles/RedSkull_Icon.png', shadowUrl: green });
var shopCasuleIcon = new shopIcon({ iconUrl: 'images/markers/upgrades/CapsuleFragment_Icon.png', shadowUrl: blue });


var echoBox = L.rectangle(echoBounds, { color: "#ff7800", weight: 1 }).addTo(map);
var echoText = L.tooltip(LatLng(echoTextPos[0], echoTextPos[1]), { content: 'Echo Shop Items', permanent: true, direction: 'left' }).addTo(map);

var detonate = CreateMarker(echoTextPos[0], echoTextPos[1] + 150, shopBlueChipIcon, "Self Detonation [400 SP]", true); //Self Detonation
var projectile = CreateMarker(echoTextPos[0], echoTextPos[1] + 450, shopRedChipIcon, "Shock Projectile [400 SP]", true); //Shock Projectile
var shock = CreateMarker(echoTextPos[0], echoTextPos[1] + 750, shopRedChipIcon, "Shock Wave [400 SP]", true); //Shock Wave


var sonnetBox = L.rectangle(sonnetBounds, { color: "#ff7800", weight: 1 }).addTo(map);
var sonnetText = L.tooltip(LatLng(sonnetTextPos[0], sonnetTextPos[1]), { content: 'Sonnet Shop Items', permanent: true, direction: 'left' }).addTo(map);

var shopKey = CreateMarker(sonnetTextPos[0] + 300, sonnetTextPos[1] + 150, shopKeyIcon, "Rusted Key [ 300 SP]", true); //Sonnet Key
var shopCapsule1 = CreateMarker(sonnetTextPos[0], sonnetTextPos[1] + 150, shopCasuleIcon, "Capsule Fragment [450 SP]", true); //Sonnet Capsule 1
var shopCapsule2 = CreateMarker(sonnetTextPos[0] - 300, sonnetTextPos[1] + 150, shopCasuleIcon, "Capsule Fragment [600 SP]", true); //Sonnet Capsule 2
var shopBlueSocket = CreateMarker(sonnetTextPos[0] + 300, sonnetTextPos[1] + 450, shopBlueSocket, "Blue Chip Socket [500 SP]", true); //Sonnet Blue Socket
var protect = CreateMarker(sonnetTextPos[0], sonnetTextPos[1] + 450, shopBlueChipIcon, "Protector's Capsule [400 SP]", true); //Sonnet Protector's Capsule
var smallprotect = CreateMarker(sonnetTextPos[0] - 300, sonnetTextPos[1] + 450, shopBlueChipIcon, "Pocket Magnet [400 SP]", true); //Sonnet Pocket Magnet
var shopRedSocket = CreateMarker(sonnetTextPos[0] + 300, sonnetTextPos[1] + 750, shopRedSocket, "Red Chip Socket [500 SP]", true); //Sonnet Red Socket
var longsword = CreateMarker(sonnetTextPos[0], sonnetTextPos[1] + 750, shopRedChipIcon, "Sword Extension [400 SP]", true); //Sonnet Sword Extension
var fastsword = CreateMarker(sonnetTextPos[0] - 300, sonnetTextPos[1] + 750, shopRedChipIcon, "Agile Alloy [400 SP]", true); //Sonnet Agile Alloy
var greenSkull = CreateMarker(sonnetTextPos[0] + 300, sonnetTextPos[1] + 1050, shopSkullGreenIcon, "Human Skull (Green)", true); //Sold by Sonnet
var undiscovered = CreateMarker(sonnetTextPos[0], sonnetTextPos[1] + 1050, shopgreenChipIcon, "Map Sweeper [400 SP]", true); //Sonnet Map Sweeper
var magnet = CreateMarker(sonnetTextPos[0] - 300, sonnetTextPos[1] + 1050, shopgreenChipIcon, "Ferromagnetic [400 SP]", true); //Sonnet Ferromagnetic


var reaperBox = L.rectangle(reaperBounds, { color: "#ff7800", weight: 1 }).addTo(map);
var reaperText = L.tooltip(LatLng(reaperTextPos[0], reaperTextPos[1]), { content: 'Reaper Shop Items', permanent: true, direction: 'left' }).addTo(map);

var redSkull = CreateMarker(reaperTextPos[0], reaperTextPos[1] + 150, shopSkullRedIcon, "Human Skull (Red)", true); //Sold by Reaper
var power = CreateMarker(reaperTextPos[0], reaperTextPos[1] + 450, shopRedChipIcon, "Power Enhancer [1000 SP]", true); //Reaper Power Enhancer
var tungsten = CreateMarker(reaperTextPos[0], reaperTextPos[1] + 750, shopBlueChipIcon, "Tungsten Steel[500 SP]", true); //Reaper Tungsten Steel
//#endregion


//#region Skills
var skillIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        shadowUrl: purple,
        shadowSize: [32, 32],
        shadowAnchor: [16, 16],
        popupAnchor: [0, -11]
    }
});

var wrenchIcon = new skillIcon({ iconUrl: 'images/markers/skills/AdjustableWrench_Icon.png' });
var bodyModifierIcon = new skillIcon({ iconUrl: 'images/markers/skills/BodyModifier_Icon.png' });
var electromagnetismIcon = new skillIcon({ iconUrl: 'images/markers/skills/ElectroMagnetism_Icon.png' });
var jumpBoosterIcon = new skillIcon({ iconUrl: 'images/markers/skills/JumpBooster_Icon.png' });
var powerBombIcon = new skillIcon({ iconUrl: 'images/markers/skills/PowerBomb_Icon.png' });
var spaceDisruptorIcon = new skillIcon({ iconUrl: 'images/markers/skills/SpaceDisruptor_Icon.png' });
var stringAndHookIcon = new skillIcon({ iconUrl: 'images/markers/skills/StringAndHook_Icon.png' });
var heatTreatmentIcon = new skillIcon({ iconUrl: 'images/markers/skills/HeatTreatment_Icon.png' });
var sealantTreatmentIcon = new skillIcon({ iconUrl: 'images/markers/skills/SealantTreatment_Icon.png' });
var bulbletIcon = new skillIcon({ iconUrl: 'images/markers/skills/Bulblet_Icon.png' });
var goldcrestWhistleIcon = new skillIcon({ iconUrl: 'images/markers/upgrades/GoldcrestWhistle_Icon.png' });



var whistle = CreateMarker(-1080, -2640, goldcrestWhistleIcon, "Goldcrest Whistle", true);
var wrench = CreateMarker(-850, -4005, wrenchIcon, "Adjustable Wrench", true);
var ball = CreateMarker(1175, 5250, bodyModifierIcon, "Body Modifier", true);
var cling = CreateMarker(-1300, -5250, electromagnetismIcon, "Electro-Magnetism", true);
var djump = CreateMarker(-3700, 6300, jumpBoosterIcon, "Jump Booster", true);
var bomb = CreateMarker(-1950, -45, powerBombIcon, "Power Bomb", true);
var warp = CreateMarker(-3430, -6985, spaceDisruptorIcon, "Space Disruptor", true);
var grapple = CreateMarker(-785, 1835, stringAndHookIcon, "String and Hook", true);
var water = CreateMarker(-465, 620, heatTreatmentIcon, "Heat Treatment", true);
var fire = CreateMarker(-465, 765, sealantTreatmentIcon, "Sealant Treatment", true);
var light = CreateMarker(-285, 170, bulbletIcon, "Bulblet", true);

var skillsList = [wrench, ball, cling, djump, bomb, warp, grapple, water, fire, light, whistle];
var skills = L.layerGroup(skillsList).addTo(map);
AddToAllList(skillsList);
//#endregion


//#region Power Cells
var powerCellIcon = L.icon({
    iconUrl: 'images/markers/collectibles/PowerCell_Icon.png',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    shadowUrl: gray,
    shadowSize: [32, 32],
    shadowAnchor: [17, 16],
    popupAnchor: [0, -11]
});

var p1 = CreateMarker(-1890, -5500, powerCellIcon, "Power Cell", true); //Sunken Wastes: Mysterious Egg

var p2 = CreateMarker(-3670, -3260, powerCellIcon, "Power Cell", true); //Forgotten Ruins: Space Disruptor Platforming Room
var p3 = CreateMarker(-3235, -2705, powerCellIcon, "Power Cell", true); //Forgotten Ruins: Across from train
var p4 = CreateMarker(-3745, 1005, powerCellIcon, "Power Cell", true); //Forgotten Ruins: Under Magnetic Footing Chip

var p5 = CreateMarker(-3365, 1320, powerCellIcon, "Power Cell", true); //Water Ducts: Lower WD -> FR Transition Room
var p6 = CreateMarker(-2995, 5595, powerCellIcon, "Power Cell", true); //Water Ducts: Electric Water Platforming Room
var p7 = CreateMarker(-2325, 6360, powerCellIcon, "Power Cell (Inside Elder Room)", true); //Water Ducts: Snailbot Burrow, In Elders Room at the top

var p8 = CreateMarker(400, -2848, powerCellIcon, "Power Cell", true); //Last Bunker: Falling Transition Room LB -> AW
var p9 = CreateMarker(1310, -920, powerCellIcon, "Power Cell", true); //Last Bunker: Grapple Platforming Room
var p10 = CreateMarker(2255, -3250, powerCellIcon, "Power Cell", true); //last Bunker: Hidden Grapple Room (Requires Power Bomb)

var p11 = CreateMarker(-315, -1585, powerCellIcon, "Power Cell", true); //Central Core: Electromagnetism Vetical Platforming Room (Above Echo)
var p12 = CreateMarker(-795, -1455, powerCellIcon, "Power Cell", true); //Central Core: Long Grapple Transition Room CC -> IB
var p13 = CreateMarker(-1385, 1535, powerCellIcon, "Power Cell", true); //Central Core: After Car Battery Boss (Accessed from the right, platforming area)
var p14 = CreateMarker(144, 1773, powerCellIcon, "Power Cell", true); //Central Core: Electric Rings Room

var p15 = CreateMarker(-1710, -1865, powerCellIcon, "Power Cell", true); //Incinerator Burner: Behind One-way door
var p16 = CreateMarker(-2235, -2300, powerCellIcon, "Power Cell", true); //Incinerator Burner: Fire Enemy Pogo room

var p17 = CreateMarker(1305, 1800, powerCellIcon, "Power Cell (Boss Reward)", true); //Factory Facility: Awarded after defeating Surveillance Bot boss
var p18 = CreateMarker(935, 3925, powerCellIcon, "Power Cell", true); //Factory Facility: Behind One-way door (progressional door)
var p19 = CreateMarker(155, 6120, powerCellIcon, "Power Cell", true); //Factory Facility: Vertical Transition Room between FF -> PE
var p20 = CreateMarker(545, 4905, powerCellIcon, "Power Cell", true); //Factory Facility: Grapple between Sawblades
var p21 = CreateMarker(1415, 3325, powerCellIcon, "Power Cell", true); //Factory Facility: Bottom left room of vertical platform room to RS

var p22 = CreateMarker(1810, 2830, powerCellIcon, "Power Cell", true); //Ruined Surface: Right-most before FF Transition, On top of wall

var p23 = CreateMarker(1720, 6602, powerCellIcon, "Power Cell", true); //Blazing Furnace: Bottom Right of first room

var p24 = CreateMarker(-1305, 5065, powerCellIcon, "Power Cell (Boss Reward)", true); //Pinion's Expanse: Awarded from Mischevious

var powerCellsList = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24];
var powerCells = L.layerGroup(powerCellsList).addTo(map);
AddToAllList(powerCellsList);
//#endregion


//#region Chips
var chipIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        shadowUrl: pink,
        shadowSize: [32, 32],
        shadowAnchor: [16, 16],
        popupAnchor: [0, -11]
    }
});

var blueChipIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/BlueChip_Icon.png' });
var redChipIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/RedChip_Icon.png' });
var greenChipIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/GreenChip_Icon.png' });

var nomad = CreateMarker(690, -3365, blueChipIcon, "Nomad's Plate", true); // Nomad's Plate
var sawblade = CreateMarker(-2210, 3165, blueChipIcon, "Sawblade", true); //Sawblade
var transputer = CreateMarker(-2515, -5715, blueChipIcon, "Amplifying Transputer", true); //Amplifying Transputer
var qrepair = CreateMarker(-155, 3890, blueChipIcon, "Quick Repair (Quest Reward)", true); //Quick Repair
var fastcool = CreateMarker(-1680, 2840, blueChipIcon, "Coolant Soluble", true); //Coolant Soluble

var crit = CreateMarker(-205, -2475, redChipIcon, "Infinity Edge", true); // Infinity Edge
var spark = CreateMarker(-1280, -405, redChipIcon, "Electro-Emitter (Quatern Reward [12 Power Cells])", true); // Electro-Emitter
var lightning = CreateMarker(-2243, -3810, redChipIcon, "Bulb Relation", true); // Bulb Relation
var steady = CreateMarker(-3560, 1075, redChipIcon, "Magnetic Footing", true); // Magnetic Footing
var bombcost = CreateMarker(910, 140, redChipIcon, "Power Processor (Behind Wall: Requires both skulls)", true); // Power Processor
var powerblink = CreateMarker(-3450, -3230, redChipIcon, "Space Disturbance", true); // Space Disturbance
var orbs = CreateMarker(-1395, 890, redChipIcon, "Electric Orbs (Boss Reward)", true); // Electric Orbs

var speed = CreateMarker(-1692, -3225, greenChipIcon, "Gyro-Accelerator", true); //Gyro-Accelerator
var noheat = CreateMarker(1980, -2510, greenChipIcon, "Heat Drive", true); //Heat Drive
var autorepair = CreateMarker(190, 4195, greenChipIcon, "Auto Repair", true); //Auto Repair
var extract = CreateMarker(620, 3015, greenChipIcon, "Extractor", true); //Extractor
var autoroll = CreateMarker(-3037, 5945, greenChipIcon, "Auto Modifier", true); //Auto Modifier

var socketIcon = L.Icon.extend({
    options: {
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        shadowUrl: yellow,
        shadowSize: [32, 32],
        shadowAnchor: [16, 16],
        popupAnchor: [0, -11]
    }
});

var blueSocketIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/BlueSocket_Icon.png' });
var redSocketIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/RedSocket_Icon.png' });
var greenSocketIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/GreenSocket_Icon.png' });

var bsocket = CreateMarker(-1830, 6428, blueSocketIcon, "Blue Chip Socket", true); //Blue Socket
var rsocket = CreateMarker(2630, 5965, redSocketIcon, "Red Chip Socket", true); //Red Socket
var gsocket = CreateMarker(-3945, -1035, greenSocketIcon, "Green Chip Socket", true); //Green Socket

var blueChips = [nomad, sawblade, transputer, qrepair, fastcool, bsocket, protect, smallprotect, shopBlueSocket, detonate, tungsten];
var redChips = [crit, spark, lightning, steady, bombcost, powerblink, orbs, rsocket, longsword, fastsword, shopRedSocket, projectile, shock, power, undiscovered];
var greenChips = [speed, noheat, autorepair, extract, autoroll, gsocket, magnet];

var chipSocketList = [nomad, sawblade, transputer, qrepair, fastcool, bsocket, crit, spark, lightning, steady, bombcost, powerblink, orbs, rsocket, speed, noheat, autorepair, extract, autoroll, gsocket, magnet, protect, smallprotect, longsword, fastsword, shopBlueSocket, shopRedSocket, power, tungsten, detonate, projectile, shock, undiscovered];
var chipsSockets = L.layerGroup(chipSocketList).addTo(map);
AddToAllList(chipSocketList);
//#endregion


//#region Capsules
var capsuleIcon = L.icon({
    iconUrl: 'images/markers/upgrades/CapsuleFragment_Icon.png',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    shadowUrl: blue,
    shadowSize: [32, 32],
    shadowAnchor: [16, 16],
    popupAnchor: [0, -11]
});

var cap1 = CreateMarker(-1235, -475, capsuleIcon, "Capsule Fragment (Quatern Reward [6 Power Cells])", true); //Quatern Reward 1
var cap2 = CreateMarker(-1235, -345, capsuleIcon, "Capsule Fragment (Quatern Reward [18 Power Cells])", true); //Quatern Reward 2
var cap3 = CreateMarker(-715, -3570, capsuleIcon, "Capsule Fragment (Boss Reward)", true); //Tyre Boss Reward
var cap4 = CreateMarker(-1115, 4005, capsuleIcon, "Capsule Fragment", true); //Pinion's Expanse: Beside Clock
var cap5 = CreateMarker(-1915, -5765, capsuleIcon, "Capsule Fragment (Boss Reward)", true); //Drill Worm Reward
var cap6 = CreateMarker(1610, 5893, capsuleIcon, "Capsule Fragment", true); //Factory Facility
var cap7 = CreateMarker(-3290, -620, capsuleIcon, "Capsule Fragment", true); //Above First Tree
var cap8 = CreateMarker(-1785, 4435, capsuleIcon, "Capsule Fragment", true); //Water Ducts
var cap9 = CreateMarker(2123, -705, capsuleIcon, "Capsule Fragment", true); //Last Bunker: Past Monitor Room
var cap10 = CreateMarker(-165, 1085, capsuleIcon, "Capsule Fragment", true); //Central Core

var capsulesList = [cap1, cap2, cap3, cap4, cap5, cap6, cap7, cap8, cap9, cap10, shopCapsule1, shopCapsule2];
var capsules = L.layerGroup(capsulesList).addTo(map);
AddToAllList(capsulesList);
//#endregion


//#region Liquid Coolant
var coolantIcon = L.icon({
    iconUrl: 'images/markers/upgrades/LiquidCoolant_Icon.png',
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    shadowUrl: yellow,
    shadowSize: [32, 32],
    shadowAnchor: [16, 16],
    popupAnchor: [0, -11]
});

var coolant1 = CreateMarker(-3250, 5350, coolantIcon, "Liquid Coolant", true); //Water Ducts
var coolant2 = CreateMarker(-3010, -5495, coolantIcon, "Liquid Coolant", true); //Research Lab (Forgotten Ruins)
var coolant3 = CreateMarker(2560, 2915, coolantIcon, "Liquid Coolant", true); //Blazing Furnace

var coolantsList = [coolant1, coolant2, coolant3];
var coolants = L.layerGroup(coolantsList).addTo(map);
AddToAllList(coolantsList);
//#endregion


//#region Rusted Keys
var rustedKeyIcon = L.icon({
    iconUrl: 'images/markers/collectibles/RustyKey_Icon.png',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    shadowUrl: teal,
    shadowSize: [32, 32],
    shadowAnchor: [16, 16],
    popupAnchor: [0, -11]
});

var key1 = CreateMarker(-505, -4175, rustedKeyIcon, "Rusted Key", true); //Abandoned Wastes Key
var key2 = CreateMarker(-2695, -6580, rustedKeyIcon, "Rusted Key", true); //Sunken Wastes Key
var key3 = CreateMarker(910, 785, rustedKeyIcon, "Rusted Key (Slate Reward)", true); //Catacombs (Given after ???)

var keysList = [key1, key2, key3, shopKey];
var keys = L.layerGroup(keysList).addTo(map);
AddToAllList(keysList);
//#endregion


//#region Misc Items
var collectibleIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [13, 13],
        shadowUrl: green,
        shadowSize: [32, 32],
        shadowAnchor: [16, 16],
        popupAnchor: [0, -11]
    }
});

var cassetteIcon = new collectibleIcon({ iconUrl: 'images/markers/collectibles/Cassette_Icon.png' });
var cassette = CreateMarker(820, -1170, cassetteIcon, "Melody's Cassette (Puzzle Reward)", true); // Found in Last Bunker by doing Piano Puzzle

var electricKeyIcon = new collectibleIcon({ iconUrl: 'images/markers/collectibles/ElectricKey_Icon.png' });
var electricKey = CreateMarker(-2490, -75, electricKeyIcon, "Electric Key", true); // Found Before Electron Fight

var miscList = [cassette, electricKey, greenSkull, redSkull];
var misc = L.layerGroup(miscList).addTo(map);
AddToAllList(miscList);
//#endregion


//#region Bosses
var bossIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [14, 14]
    }
});

var protonIcon = new bossIcon({ iconUrl: 'images/markers/world/ProtonBoss_Icon.png' });
var electronIcon = new bossIcon({ iconUrl: 'images/markers/world/ElectronBoss_Icon.png' });
var NeutronIcon = new bossIcon({ iconUrl: 'images/markers/world/NeutronBoss_Icon.png' });

var proton = CreateMarker(2550, 3305, protonIcon, "Proton (Boss)", true); //Proton
var electron = CreateMarker(-2645, -320, electronIcon, "Electron (Boss)", true); //Electron
var neutron = CreateMarker(970, -4065, NeutronIcon, "Neutron (Boss)", true); //Neutron

var bossList = [proton, electron, neutron];
var bosses = L.layerGroup(bossList).addTo(map);
AddToAllList(bossList);
//#endregion


/*--- SCRAP PART LOCATION ICONS --------------------------------------*/


/*--- NPC ICONS (MAY BE IMPLEMENTED) ---------------------------------*/


function checkShopDisplay() {
    //console.log("YEET");
    if (!map.hasLayer(chipsSockets) && !map.hasLayer(capsules) && !map.hasLayer(keys) && !map.hasLayer(misc)) {
        sonnetText.removeFrom(map);
        sonnetBox.removeFrom(map);
    }
    else {
        sonnetText.addTo(map);
        sonnetBox.addTo(map);
    }

    if (!map.hasLayer(chipsSockets) && !map.hasLayer(misc)) {
        reaperText.removeFrom(map);
        reaperBox.removeFrom(map);
    }
    else {
        reaperText.addTo(map);
        reaperBox.addTo(map);
    }

    if (!map.hasLayer(chipsSockets)) {
        echoText.removeFrom(map);
        echoBox.removeFrom(map);
    }
    else {
        echoText.addTo(map);
        echoBox.addTo(map);
    }
}


function shopBounds() {
    echoBounds = [LatLng(echoTextPos[0] - 150 + (zoom * zoomMod), echoTextPos[1]), LatLng(echoTextPos[0] + 150 - (zoom * zoomMod), echoTextPos[1] + 900 - (zoom * zoomMod))];
    echoBox.setBounds(echoBounds);

    sonnetBounds = [LatLng(sonnetTextPos[0] - 450 + (zoom * zoomMod), sonnetTextPos[1]), LatLng(sonnetTextPos[0] + 450 - (zoom * zoomMod), sonnetTextPos[1] + 1200 - (zoom * zoomMod))];
    sonnetBox.setBounds(sonnetBounds);

    reaperBounds = [LatLng(reaperTextPos[0] - 150 + (zoom * zoomMod), reaperTextPos[1]), LatLng(reaperTextPos[0] + 150 - (zoom * zoomMod), reaperTextPos[1] + 900 - (zoom * zoomMod))];
    reaperBox.setBounds(reaperBounds);
}