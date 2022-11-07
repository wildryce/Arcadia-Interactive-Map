/// Marker Template:
///     L.marker(LatLng(0, 0), { icon: var, opacity: 1, riseOnHover: true, title: "" }).addTo(map).on('click', setOpacity);

var gray = 'images/backgrounds/gray.png';
var red = 'images/backgrounds/red.png';
var yellow = 'images/backgrounds/yellow.png';
var purple = 'images/backgrounds/purple.png';
var blue = 'images/backgrounds/blue.png';
var green = 'images/backgrounds/green.png';
var brown = 'images/backgrounds/brown.png';
var pink = 'images/backgrounds/pink.png';
var teal = 'images/backgrounds/teal.png';



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



var allIconsList = [];

function AddToAllList(list) {
    for (let i = 0; i < list.length; i++) {
        allIconsList.push(list[i]);
    }
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

var aw = L.marker(LatLng(-770, -5660), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Abandoned Wastes Disruptor" }).addTo(map).on('click', changeOpacity); //Room Above Electro-Magnetism
var aw2 = L.marker(LatLng(-655, -2135), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Abandoned Wastes Disruptor #2" }).addTo(map).on('click', changeOpacity); //Above Train

var lb = L.marker(LatLng(580, -950), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Last Bunker Disruptor" }).addTo(map).on('click', changeOpacity); //Electric Platforming Area
var lb2 = L.marker(LatLng(2430, -5155), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Last Bunker Disruptor #2" }).on('click', changeOpacity); //Bell Tower

var sw = L.marker(LatLng(-2875, -3605), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Sunken Wastes Disruptor" }).addTo(map).on('click', changeOpacity); //Area above right-most FR->SW Transition Room

var fr = L.marker(LatLng(-3250, -445), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Forgotten Ruins Disruptor" }).addTo(map).on('click', changeOpacity); //In small area that requires Space Disruptor

var wd = L.marker(LatLng(-2545, 4050), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Water Ducts Disruptor" }).addTo(map).on('click', changeOpacity); //Couple rooms right of the train room

var pe = L.marker(LatLng(-1050, 4960), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Pinion's Expanse Disruptor" }).addTo(map).on('click', changeOpacity); //Before Clock Repair

var ff = L.marker(LatLng(820, 3030), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Factory Facility Disruptor" }).addTo(map).on('click', changeOpacity); //Left Level 02
var ff2 = L.marker(LatLng(835, 4990), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Factory Facility Disruptor #2" }).addTo(map).on('click', changeOpacity); //Right Level 02

var bf = L.marker(LatLng(2230, 3845), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Blazing Furnace Disruptor" }).addTo(map).on('click', changeOpacity); //Grapple Room

var cc = L.marker(LatLng(85, 855), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Central Core Disruptor" }).addTo(map).on('click', changeOpacity); //Top Right Transition from Mainframe Vault
var cc2 = L.marker(LatLng(-1970, 1180), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Former Core Disruptor" }).on('click', changeOpacity); //Top Right of Former Core room

var ib = L.marker(LatLng(-1350, -2150), { icon: disruptorIcon, opacity: 1, riseOnHover: true, title: "Incinerator Burner Disruptor" }).addTo(map).on('click', changeOpacity); //Upper IB, Room before Vertical Ascent

var disruptors = L.layerGroup([aw, aw2, lb, lb2, sw, fr, wd, pe, ff, ff2, bf, cc, cc2, ib]).addTo(map);
var disruptorsList = [aw, aw2, lb, lb2, sw, fr, wd, pe, ff, ff2, bf, cc, cc2, ib];
AddToAllList(disruptorsList);
//#endregion


//#region Shops Items (Shown up top on the map)
var shopIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [0, 14],
        shadowSize: [32, 32],
        shadowAnchor: [2, 16]
    }
});

var shopgreenChipIcon = new shopIcon({ iconUrl: 'images/markers/upgrades/GreenChip_Icon.png', shadowUrl: pink });
var shopBlueChipIcon = new shopIcon({ iconUrl: 'images/markers/upgrades/BlueChip_Icon.png', shadowUrl: pink });
var shopRedChipIcon = new shopIcon({ iconUrl: 'images/markers/upgrades/RedChip_Icon.png', shadowUrl: pink });
var shopBlueSocket = new shopIcon({ iconUrl: 'images/markers/upgrades/BlueSocket_Icon.png', shadowUrl: pink });
var shopRedSocket = new shopIcon({ iconUrl: 'images/markers/upgrades/RedSocket_Icon.png', shadowUrl: pink });
var shopKeyIcon = new shopIcon({ iconUrl: 'images/markers/collectibles/RustyKey_Icon.png', shadowUrl: teal });
//var shopSkullGreenIcon = new shopIcon({ iconUrl: 'images/markers/upgrades/RedChip_Icon.png' });
var shopCasuleIcon = new shopIcon({ iconUrl: 'images/markers/upgrades/CapsuleFragment_Icon.png', shadowUrl: blue });

var echoText = L.tooltip(LatLng(3100, -4700), { content: 'Echo Shop Items', permanent: true, direction: 'center' }).addTo(map);
var detonate = L.marker(LatLng(3700, -4200), { icon: shopBlueChipIcon, opacity: 1, riseOnHover: true, title: "Self Detonation [400 SP]" }).addTo(map).on('click', changeOpacity); //Self Detonation
var projectile = L.marker(LatLng(3400, -4200), { icon: shopRedChipIcon, opacity: 1, riseOnHover: true, title: "Shock Projectile [400 SP]" }).addTo(map).on('click', changeOpacity); //Shock Projectile
var shock = L.marker(LatLng(3100, -4200), { icon: shopRedChipIcon, opacity: 1, riseOnHover: true, title: "Shock Wave [400 SP]" }).addTo(map).on('click', changeOpacity); //Shock Wave


var sonnetText = L.tooltip(LatLng(3100, -2000), { content: 'Sonnet Shop Items', permanent: true, direction: 'center' }).addTo(map);
var shopKey = L.marker(LatLng(3700, -1450), { icon: shopKeyIcon, opacity: 1, riseOnHover: true, title: "Rusted Key [ 300 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Key
var shopCapsule1 = L.marker(LatLng(3400, -1450), { icon: shopCasuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment [450 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Capsule 1
var shopCapsule2 = L.marker(LatLng(3100, -1450), { icon: shopCasuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment [600 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Capsule 2
var shopBlueSocket = L.marker(LatLng(3700, -1150), { icon: shopBlueSocket, opacity: 1, riseOnHover: true, title: "Blue Chip Socket [500 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Blue Socket
var protect = L.marker(LatLng(3400, -1150), { icon: shopBlueChipIcon, opacity: 1, riseOnHover: true, title: "Protector's Capsule [400 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Protector's Capsule
var smallprotect = L.marker(LatLng(3100, -1150), { icon: shopBlueChipIcon, opacity: 1, riseOnHover: true, title: "Pocket Magnet [400 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Pocket Magnet
var shopRedSocket = L.marker(LatLng(3700, -850), { icon: shopRedSocket, opacity: 1, riseOnHover: true, title: "Red Chip Socket [500 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Red Socket
var longsword = L.marker(LatLng(3400, -850), { icon: shopRedChipIcon, opacity: 1, riseOnHover: true, title: "Sword Extension [400 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Sword Extension
var fastsword = L.marker(LatLng(3100, -850), { icon: shopRedChipIcon, opacity: 1, riseOnHover: true, title: "Agile Alloy [400 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Agile Alloy
var undiscovered = L.marker(LatLng(3400, -550), { icon: shopgreenChipIcon, opacity: 1, riseOnHover: true, title: "Map Sweeper [400 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Map Sweeper
var magnet = L.marker(LatLng(3100, -550), { icon: shopgreenChipIcon, opacity: 1, riseOnHover: true, title: "Ferromagnetic [400 SP]" }).addTo(map).on('click', changeOpacity); //Sonnet Ferromagnetic


var reaperText = L.tooltip(LatLng(2200, 500), { content: 'Reaper Shop Items', permanent: true, direction: 'center' }).addTo(map);
var power = L.marker(LatLng(2500, 1050), { icon: shopRedChipIcon, opacity: 1, riseOnHover: true, title: "Power Enhancer [1000 SP]" }).addTo(map).on('click', changeOpacity); //Reaper Power Enhancer
var tungsten = L.marker(LatLng(2200, 1050), { icon: shopBlueChipIcon, opacity: 1, riseOnHover: true, title: "Tungsten Steel[500 SP]" }).addTo(map).on('click', changeOpacity); //Reaper Tungsten Steel
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
var whistle = L.marker(LatLng(-1080, -2730), { icon: goldcrestWhistleIcon, opacity: 1, riseOnHover: true, title: "Goldcrest Whistle" }).addTo(map).on('click', changeOpacity);


var wrench = L.marker(LatLng(-850, -4005), { icon: wrenchIcon, opacity: 1, riseOnHover: true, title: "Adjustable Wrench" }).addTo(map).on('click', changeOpacity);
var ball = L.marker(LatLng(1175, 5250), { icon: bodyModifierIcon, opacity: 1, riseOnHover: true, title: "Body Modifier" }).addTo(map).on('click', changeOpacity);
var cling = L.marker(LatLng(-1300, -5250), { icon: electromagnetismIcon, opacity: 1, riseOnHover: true, title: "Electro-Magnetism" }).addTo(map).on('click', changeOpacity);
var djump = L.marker(LatLng(-3700, 6300), { icon: jumpBoosterIcon, opacity: 1, riseOnHover: true, title: "Jump Booster" }).addTo(map).on('click', changeOpacity);
var bomb = L.marker(LatLng(-1950, -45), { icon: powerBombIcon, opacity: 1, riseOnHover: true, title: "Power Bomb" }).addTo(map).on('click', changeOpacity);
var warp = L.marker(LatLng(-3430, -6985), { icon: spaceDisruptorIcon, opacity: 1, riseOnHover: true, title: "Space Disruptor" }).addTo(map).on('click', changeOpacity);
var grapple = L.marker(LatLng(-785, 1835), { icon: stringAndHookIcon, opacity: 1, riseOnHover: true, title: "String and Hook" }).addTo(map).on('click', changeOpacity);
var water = L.marker(LatLng(-465, 620), { icon: heatTreatmentIcon, opacity: 1, riseOnHover: true, title: "Heat Treatment" }).addTo(map).on('click', changeOpacity);
var fire = L.marker(LatLng(-465, 765), { icon: sealantTreatmentIcon, opacity: 1, riseOnHover: true, title: "Sealant Treatment" }).addTo(map).on('click', changeOpacity);
var light = L.marker(LatLng(-285, 170), { icon: bulbletIcon, opacity: 1, riseOnHover: true, title: "Bulblet" }).addTo(map).on('click', changeOpacity);

var skills = L.layerGroup([wrench, ball, cling, djump, bomb, warp, grapple, water, fire, light, whistle]).addTo(map);
var skillsList = [wrench, ball, cling, djump, bomb, warp, grapple, water, fire, light, whistle];
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

var p1 = L.marker(LatLng(-1890, -5500), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Sunken Wastes: Mysterious Egg

var p2 = L.marker(LatLng(-3670, -3260), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Forgotten Ruins: Space Disruptor Platforming Room
var p3 = L.marker(LatLng(-3235, -2705), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Forgotten Ruins: Across from train
var p4 = L.marker(LatLng(-3745, 1005), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Forgotten Ruins: Under Magnetic Footing Chip

var p5 = L.marker(LatLng(-3365, 1320), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Water Ducts: Lower WD -> FR Transition Room
var p6 = L.marker(LatLng(-2995, 5595), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Water Ducts: Electric Water Platforming Room
var p7 = L.marker(LatLng(-2325, 6360), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell (Inside Elder Room)" }).addTo(map).on('click', changeOpacity); //Water Ducts: Snailbot Burrow, In Elders Room at the top

var p8 = L.marker(LatLng(400, -2848), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Last Bunker: Falling Transition Room LB -> AW
var p9 = L.marker(LatLng(1310, -920), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Last Bunker: Grapple Platforming Room
var p10 = L.marker(LatLng(2255, -3250), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //last Bunker: Hidden Grapple Room (Requires Power Bomb)

var p11 = L.marker(LatLng(-315, -1585), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Central Core: Electromagnetism Vetical Platforming Room (Above Echo)
var p12 = L.marker(LatLng(-795, -1455), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Central Core: Long Grapple Transition Room CC -> IB
var p13 = L.marker(LatLng(-1385, 1535), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Central Core: After Car Battery Boss (Accessed from the right, platforming area)
var p14 = L.marker(LatLng(144, 1773), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Central Core: Electric Rings Room

var p15 = L.marker(LatLng(-1710, -1865), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Incinerator Burner: Behind One-way door
var p16 = L.marker(LatLng(-2235, -2300), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Incinerator Burner: Fire Enemy Pogo room

var p17 = L.marker(LatLng(1305, 1800), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell (Boss Reward)" }).addTo(map).on('click', changeOpacity); //Factory Facility: Awarded after defeating Surveillance Bot boss
var p18 = L.marker(LatLng(935, 3925), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Factory Facility: Behind One-way door (progressional door)
var p19 = L.marker(LatLng(155, 6120), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Factory Facility: Vertical Transition Room between FF -> PE
var p20 = L.marker(LatLng(545, 4905), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Factory Facility: Grapple between Sawblades
var p21 = L.marker(LatLng(1415, 3325), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Factory Facility: Bottom left room of vertical platform room to RS

var p22 = L.marker(LatLng(1810, 2830), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Ruined Surface: Right-most before FF Transition, On top of wall

var p23 = L.marker(LatLng(1720, 6602), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', changeOpacity); //Blazing Furnace: Bottom Right of first room

var p24 = L.marker(LatLng(-1305, 5065), { icon: powerCellIcon, opacity: 1, riseOnHover: true, title: "Power Cell (Boss Reward)" }).addTo(map).on('click', changeOpacity); //Pinion's Expanse: Awarded from Mischevious

var powerCells = L.layerGroup([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24]).addTo(map);
var powerCellsList = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24];
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

var nomad = L.marker(LatLng(690, -3365), { icon: blueChipIcon, opacity: 1, riseOnHover: true, title: "Nomad's Plate" }).addTo(map).on('click', changeOpacity); // Nomad's Plate
var sawblade = L.marker(LatLng(-2210, 3165), { icon: blueChipIcon, opacity: 1, riseOnHover: true, title: "Sawblade" }).addTo(map).on('click', changeOpacity); //Sawblade
var transputer = L.marker(LatLng(-2515, -5715), { icon: blueChipIcon, opacity: 1, riseOnHover: true, title: "Amplifying Transputer" }).addTo(map).on('click', changeOpacity); //Amplifying Transputer
var qrepair = L.marker(LatLng(-155, 3890), { icon: blueChipIcon, opacity: 1, riseOnHover: true, title: "Quick Repair (Quest Reward)" }).addTo(map).on('click', changeOpacity); //Quick Repair
var fastcool = L.marker(LatLng(-1680, 2840), { icon: blueChipIcon, opacity: 1, riseOnHover: true, title: "Coolant Soluble" }).addTo(map).on('click', changeOpacity); //Coolant Soluble

var crit = L.marker(LatLng(-205, -2475), { icon: redChipIcon, opacity: 1, riseOnHover: true, title: "Infinity Edge" }).addTo(map).on('click', changeOpacity); // Infinity Edge
var spark = L.marker(LatLng(-1280, -405), { icon: redChipIcon, opacity: 1, riseOnHover: true, title: "Electro-Emitter (Quatern Reward [12 Power Cells])" }).addTo(map).on('click', changeOpacity); // Electro-Emitter
var lightning = L.marker(LatLng(-2243, -3810), { icon: redChipIcon, opacity: 1, riseOnHover: true, title: "Bulb Relation" }).addTo(map).on('click', changeOpacity); // Bulb Relation
var steady = L.marker(LatLng(-3560, 1075), { icon: redChipIcon, opacity: 1, riseOnHover: true, title: "Magnetic Footing" }).addTo(map).on('click', changeOpacity); // Magnetic Footing
var bombcost = L.marker(LatLng(910, 140), { icon: redChipIcon, opacity: 1, riseOnHover: true, title: "Power Processor (Behind Wall: Requires both skulls)" }).addTo(map).on('click', changeOpacity); // Power Processor
var powerblink = L.marker(LatLng(-3450, -3230), { icon: redChipIcon, opacity: 1, riseOnHover: true, title: "Space Disturbance" }).addTo(map).on('click', changeOpacity); // Space Disturbance
var orbs = L.marker(LatLng(-1395, 890), { icon: redChipIcon, opacity: 1, riseOnHover: true, title: "Electric Orbs (Boss Reward)" }).addTo(map).on('click', changeOpacity); // Electric Orbs

var speed = L.marker(LatLng(-1692, -3225), { icon: greenChipIcon, opacity: 1, riseOnHover: true, title: "Gyro-Accelerator" }).addTo(map).on('click', changeOpacity); //Gyro-Accelerator
var noheat = L.marker(LatLng(1980, -2510), { icon: greenChipIcon, opacity: 1, riseOnHover: true, title: "Heat Drive" }).addTo(map).on('click', changeOpacity); //Heat Drive
var autorepair = L.marker(LatLng(190, 4195), { icon: greenChipIcon, opacity: 1, riseOnHover: true, title: "Auto Repair" }).addTo(map).on('click', changeOpacity); //Auto Repair
var extract = L.marker(LatLng(620, 3015), { icon: greenChipIcon, opacity: 1, riseOnHover: true, title: "Extractor" }).addTo(map).on('click', changeOpacity); //Extractor
var autoroll = L.marker(LatLng(-3037, 5945), { icon: greenChipIcon, opacity: 1, riseOnHover: true, title: "Auto Modifier" }).addTo(map).on('click', changeOpacity); //Auto Modifier

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

var bsocket = L.marker(LatLng(-1830, 6428), { icon: blueSocketIcon, opacity: 1, riseOnHover: true, title: "Blue Chip Socket" }).addTo(map).on('click', changeOpacity); //Blue Socket
var rsocket = L.marker(LatLng(2630, 5965), { icon: redSocketIcon, opacity: 1, riseOnHover: true, title: "Red Chip Socket" }).addTo(map).on('click', changeOpacity); //Red Socket
var gsocket = L.marker(LatLng(-3945, -1035), { icon: greenSocketIcon, opacity: 1, riseOnHover: true, title: "Green Chip Socket" }).addTo(map).on('click', changeOpacity); //Green Socket

var blueChips = [nomad, sawblade, transputer, qrepair, fastcool, bsocket, protect, smallprotect, shopBlueSocket, detonate, tungsten];
var redChips = [crit, spark, lightning, steady, bombcost, powerblink, orbs, rsocket, longsword, fastsword, shopRedSocket, projectile, shock, power, undiscovered];
var greenChips = [speed, noheat, autorepair, extract, autoroll, gsocket, magnet];
var chipsSockets = L.layerGroup([nomad, sawblade, transputer, qrepair, fastcool, bsocket, crit, spark, lightning, steady, bombcost, powerblink, orbs, rsocket, speed, noheat, autorepair, extract, autoroll, gsocket, magnet, protect, smallprotect, longsword, fastsword, shopBlueSocket, shopRedSocket, power, tungsten, detonate, projectile, shock, undiscovered]).addTo(map);
var chipSocketList = [nomad, sawblade, transputer, qrepair, fastcool, bsocket, crit, spark, lightning, steady, bombcost, powerblink, orbs, rsocket, speed, noheat, autorepair, extract, autoroll, gsocket, magnet, protect, smallprotect, longsword, fastsword, shopBlueSocket, shopRedSocket, power, tungsten, detonate, projectile, shock, undiscovered]
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

var cap1 = L.marker(LatLng(-1235, -475), { icon: capsuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment (Quatern Reward [6 Power Cells])" }).addTo(map).on('click', changeOpacity); //Quatern Reward 1
var cap2 = L.marker(LatLng(-1235, -345), { icon: capsuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment (Quatern Reward [18 Power Cells])" }).addTo(map).on('click', changeOpacity); //Quatern Reward 2
var cap3 = L.marker(LatLng(-715, -3570), { icon: capsuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment (Boss Reward)" }).addTo(map).on('click', changeOpacity); //Tyre Boss Reward
var cap4 = L.marker(LatLng(-1115, 4005), { icon: capsuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment" }).addTo(map).on('click', changeOpacity); //Pinion's Expanse: Beside Clock
var cap5 = L.marker(LatLng(-1805, -6130), { icon: capsuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment (Boss Reward)" }).addTo(map).on('click', changeOpacity); //Drill Worm Reward
var cap6 = L.marker(LatLng(1610, 5893), { icon: capsuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment"}).addTo(map).on('click', changeOpacity); //Factory Facility
var cap7 = L.marker(LatLng(-3290, -620), { icon: capsuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment" }).addTo(map).on('click', changeOpacity); //Above First Tree
var cap8 = L.marker(LatLng(-1785, 4435), { icon: capsuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment" }).addTo(map).on('click', changeOpacity); //Water Ducts
var cap9 = L.marker(LatLng(2123, -705), { icon: capsuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment"}).addTo(map).on('click', changeOpacity); //Last Bunker: Past Monitor Room
var cap10 = L.marker(LatLng(-165, 1085), { icon: capsuleIcon, opacity: 1, riseOnHover: true, title: "Capsule Fragment" }).addTo(map).on('click', changeOpacity); //Central Core

var capsules = L.layerGroup([cap1, cap2, cap3, cap4, cap5, cap6, cap7, cap8, cap9, cap10, shopCapsule1, shopCapsule2]).addTo(map);
var capsulesList = [cap1, cap2, cap3, cap4, cap5, cap6, cap7, cap8, cap9, cap10, shopCapsule1, shopCapsule2];
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

var coolant1 = L.marker(LatLng(-3250, 5350), { icon: coolantIcon, opacity: 1, riseOnHover: true, title: "Liquid Coolant" }).addTo(map).on('click', changeOpacity); //Water Ducts
var coolant2 = L.marker(LatLng(-3010, -5495), { icon: coolantIcon, opacity: 1, riseOnHover: true, title: "Liquid Coolant" }).addTo(map).on('click', changeOpacity); //Research Lab (Forgotten Ruins)
var coolant3 = L.marker(LatLng(2560, 2915), { icon: coolantIcon, opacity: 1, riseOnHover: true, title: "Liquid Coolant" }).addTo(map).on('click', changeOpacity); //Blazing Furnace

var coolants = L.layerGroup([coolant1, coolant2, coolant3]).addTo(map);
var coolantsList = [coolant1, coolant2, coolant3];
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

var key1 = L.marker(LatLng(-505, -4175), { icon: rustedKeyIcon, opacity: 1, riseOnHover: true, title: "Rusted Key" }).addTo(map).on('click', changeOpacity); //Abandoned Wastes Key
var key2 = L.marker(LatLng(-2695, -6580), { icon: rustedKeyIcon, opacity: 1, riseOnHover: true, title: "Rusted Key" }).addTo(map).on('click', changeOpacity); //Sunken Wastes Key
var key3 = L.marker(LatLng(910, 785), { icon: rustedKeyIcon, opacity: 1, riseOnHover: true, title: "Rusted Key (Slate Reward)" }).addTo(map).on('click', changeOpacity); //Catacombs (Given after ???)

var keys = L.layerGroup([key1, key2, key3, shopKey]).addTo(map);
var keysList = [key1, key2, key3, shopKey];
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
var cassette = L.marker(LatLng(820, -1170), { icon: cassetteIcon, opacity: 1, riseOnHover: true, title: "Melody's Cassette (Puzzle Reward)" }).addTo(map).on('click', changeOpacity); //Given by Pinion

var electricKeyIcon = new collectibleIcon({ iconUrl: 'images/markers/collectibles/ElectricKey_Icon.png' });
var electricKey = L.marker(LatLng(-2490, -75), { icon: electricKeyIcon, opacity: 1, riseOnHover: true, title: "Electric Key" }).addTo(map).on('click', changeOpacity); //Given by Pinion

var misc = L.layerGroup([cassette, electricKey]).addTo(map);
var miscList = [cassette, electricKey];
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

var proton = L.marker(LatLng(2550, 3305), { icon: protonIcon, opacity: 1, riseOnHover: true, title: "Proton (Boss)" }).addTo(map).on('click', changeOpacity); //Proton
var electron = L.marker(LatLng(-2645, -320), { icon: electronIcon, opacity: 1, riseOnHover: true, title: "Electron (Boss)" }).addTo(map).on('click', changeOpacity); //Electron
var neutron = L.marker(LatLng(970, -4065), { icon: NeutronIcon, opacity: 1, riseOnHover: true, title: "Neutron (Boss)" }).addTo(map).on('click', changeOpacity); //Neutron

var bosses = L.layerGroup([proton, electron, neutron]).addTo(map);
var bossList = [proton, electron, neutron];
AddToAllList(bossList);
//#endregion


//#region Pins
var pinIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [14, 14]
    }
});

var saveIcon = new pinIcon({ iconUrl: 'images/markers/world/healthPin.png' });

var perchIcon = L.marker(LatLng(0, 0), { icon: saveIcon, riseOnHover: true, title: "" }).addTo(map);

var savePin1 = L.marker(LatLng(-295, -3475), { icon: saveIcon, opacity: 1, riseOnHover: true, title: "Save Station" }).addTo(map); //AW - First Save station
var savePin2 = L.marker(LatLng(-1090, -3245), { icon: saveIcon, opacity: 1, riseOnHover: true, title: "Save Station" }).addTo(map); //AW - Before Goldcrest Whistle
var savePin3 = L.marker(LatLng(-955, -5140), { icon: saveIcon, opacity: 1, riseOnHover: true, title: "Save Station" }).addTo(map); //AW - Above Electromagnetism
var savePin4 = L.marker(LatLng(-2130, -6210), { icon: saveIcon, opacity: 1, riseOnHover: true, title: "Save Station" }).addTo(map); //SW - Left Side
var savePin5 = L.marker(LatLng(-2590, -3450), { icon: saveIcon, opacity: 1, riseOnHover: true, title: "Save Station" }).addTo(map); //SW - Right Side


var trainIcon = L.marker(LatLng(0, 0), { icon: saveIcon, opacity: 1, riseOnHover: true, title: "" }).addTo(map);
var pins = L.layerGroup([savePin1, savePin2, savePin3, savePin4, savePin5]).addTo(map);
//#endregion


/*--- SCRAP PART LOCATION ICONS --------------------------------------*/


/*--- NPC ICONS (MAY BE IMPLEMENTED) ---------------------------------*/


function checkShopDisplay() {
    console.log("YEET");
    if (!map.hasLayer(chipsSockets) && !map.hasLayer(capsules) && !map.hasLayer(keys)) {
        sonnetText.removeFrom(map);
    }
    else {
        sonnetText.addTo(map);
    }

    if (!map.hasLayer(chipsSockets)) {
        reaperText.removeFrom(map);
    }
    else {
        reaperText.addTo(map);
    }

    if (!map.hasLayer(chipsSockets)) {
        echoText.removeFrom(map);
    }
    else {
        echoText.addTo(map);
    }
}