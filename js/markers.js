/// Marker Template:
///     L.marker(LatLng(0, 0), { icon: var, riseOnHover: true, title: "" }).addTo(map).on('click', onClick);



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

function setOpacity(e) {
    var marker = e.target;

    console.log(marker.options.opacity);

    if (marker.options.opacity == 1) {
        marker.setOpacity(0.5);
    }
    else
    {
        marker.setOpacity(1);
    }
}


/*--- DISRUPTOR ICONS ------------------------------------------------*/
var disruptorIcon = L.icon({
    iconUrl: 'images/markers/world/Disruptor_Icon.png',
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    shadowUrl: 'images/backgrounds/disruptor_bg.png',
    shadowSize: [32, 32],
    shadowAnchor: [16, 16],
    popupAnchor: [0, -11]
});

var aw = L.marker(LatLng(-770, -5660), { icon: disruptorIcon, riseOnHover: true, title: "Abandoned Wastes Disruptor" }).addTo(map).on('click', setOpacity); //Room Above Electro-Magnetism
var aw2 = L.marker(LatLng(-655, -2135), { icon: disruptorIcon, riseOnHover: true, title: "Abandoned Wastes Disruptor #2" }).addTo(map).on('click', setOpacity); //Above Train

var lb = L.marker(LatLng(580, -950), { icon: disruptorIcon, riseOnHover: true, title: "Last Bunker Disruptor" }).addTo(map).on('click', setOpacity); //Electric Platforming Area
var lb2 = L.marker(LatLng(2430, -5155), { icon: disruptorIcon, riseOnHover: true, title: "Last Bunker Disruptor #2" }).on('click', setOpacity); //Bell Tower

var sw = L.marker(LatLng(-2875, -3605), { icon: disruptorIcon, riseOnHover: true, title: "Sunken Wastes Disruptor" }).addTo(map).on('click', setOpacity); //Area above right-most FR->SW Transition Room

var fr = L.marker(LatLng(-3250, -445), { icon: disruptorIcon, riseOnHover: true, title: "Forgotten Ruins Disruptor" }).addTo(map).on('click', setOpacity); //In small area that requires Space Disruptor

var wd = L.marker(LatLng(-2545, 4050), { icon: disruptorIcon, riseOnHover: true, title: "Water Ducts Disruptor" }).addTo(map).on('click', setOpacity); //Couple rooms right of the train room

var pe = L.marker(LatLng(-1050, 4960), { icon: disruptorIcon, riseOnHover: true, title: "Pinion's Expanse Disruptor" }).addTo(map).on('click', setOpacity); //Before Clock Repair

var ff = L.marker(LatLng(820, 3030), { icon: disruptorIcon, riseOnHover: true, title: "Factory Facility Disruptor" }).addTo(map).on('click', setOpacity); //Left Level 02
var ff2 = L.marker(LatLng(835, 4990), { icon: disruptorIcon, riseOnHover: true, title: "Factory Facility Disruptor #2" }).addTo(map).on('click', setOpacity); //Right Level 02

var bf = L.marker(LatLng(2230, 3845), { icon: disruptorIcon, riseOnHover: true, title: "Blazing Furnace Disruptor" }).addTo(map).on('click', setOpacity); //Grapple Room

var cc = L.marker(LatLng(85, 855), { icon: disruptorIcon, riseOnHover: true, title: "Central Core Disruptor" }).addTo(map).on('click', setOpacity); //Top Right Transition from Mainframe Vault
var cc2 = L.marker(LatLng(-1970, 1180), { icon: disruptorIcon, riseOnHover: true, title: "Former Core Disruptor" }).on('click', setOpacity); //Top Right of Former Core room

var ib = L.marker(LatLng(-1350, -2150), { icon: disruptorIcon, riseOnHover: true, title: "Incinerator Burner Disruptor" }).addTo(map).on('click', setOpacity); //Upper IB, Room before Vertical Ascent

var disruptors = L.layerGroup([aw, aw2, lb, lb2, sw, fr, wd, pe, ff, ff2, bf, cc, cc2, ib]).addTo(map);


/*--- SKILLS ICONS ---------------------------------------------------*/
var skillIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        shadowUrl: 'images/backgrounds/skills_bg.png',
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


var wrench = L.marker(LatLng(-850, -4005), { icon: wrenchIcon, riseOnHover: true, title: "Adjustable Wrench" }).addTo(map).on('click', setOpacity);
var ball = L.marker(LatLng(1175, 5250), { icon: bodyModifierIcon, riseOnHover: true, title: "Body Modifier" }).addTo(map).on('click', setOpacity);
var cling = L.marker(LatLng(-1300, -5250), { icon: electromagnetismIcon, riseOnHover: true, title: "Electro-Magnetism" }).addTo(map).on('click', setOpacity);
var djump = L.marker(LatLng(-3700, 6300), { icon: jumpBoosterIcon, riseOnHover: true, title: "Jump Booster" }).addTo(map).on('click', setOpacity);
var bomb = L.marker(LatLng(-1950, -45), { icon: powerBombIcon, riseOnHover: true, title: "Power Bomb" }).addTo(map).on('click', setOpacity);
var warp = L.marker(LatLng(-3430, -6985), { icon: spaceDisruptorIcon, riseOnHover: true, title: "Space Disruptor" }).addTo(map).on('click', setOpacity);
var grapple = L.marker(LatLng(-785, 1835), { icon: stringAndHookIcon, riseOnHover: true, title: "String and Hook" }).addTo(map).on('click', setOpacity);
var water = L.marker(LatLng(-465, 620), { icon: heatTreatmentIcon, riseOnHover: true, title: "Heat Treatment" }).addTo(map).on('click', setOpacity);
var fire = L.marker(LatLng(-465, 765), { icon: sealantTreatmentIcon, riseOnHover: true, title: "Sealant Treatment" }).addTo(map).on('click', setOpacity);
var light = L.marker(LatLng(-285, 170), { icon: bulbletIcon, riseOnHover: true, title: "Bulblet" }).addTo(map).on('click', setOpacity);

var skills = L.layerGroup([wrench, ball, cling, djump, bomb, warp, grapple, water, fire, light]).addTo(map);
/*--- POWER CELL ICONS -----------------------------------------------*/
var powerCellIcon = L.icon({
    iconUrl: 'images/markers/collectibles/PowerCell_Icon.png',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    shadowUrl: 'images/backgrounds/collectible_bg.png',
    shadowSize: [32, 32],
    shadowAnchor: [17, 16],
    popupAnchor: [0, -11]
});

var p1 = L.marker(LatLng(-1890, -5500), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Sunken Wastes: Mysterious Egg

var p2 = L.marker(LatLng(-3670, -3260), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Forgotten Ruins: Space Disruptor Platforming Room
var p3 = L.marker(LatLng(-3235, -2705), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Forgotten Ruins: Across from train
var p4 = L.marker(LatLng(-3745, 1005), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Forgotten Ruins: Under Magnetic Footing Chip

var p5 = L.marker(LatLng(-3365, 1320), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Water Ducts: Lower WD -> FR Transition Room
var p6 = L.marker(LatLng(-2995, 5595), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Water Ducts: Electric Water Platforming Room
var p7 = L.marker(LatLng(-2325, 6360), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell (Inside Elder Room)" }).addTo(map).on('click', setOpacity); //Water Ducts: Snailbot Burrow, In Elders Room at the top

var p8 = L.marker(LatLng(400, -2848), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Last Bunker: Falling Transition Room LB -> AW
var p9 = L.marker(LatLng(1310, -920), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Last Bunker: Grapple Platforming Room
var p10 = L.marker(LatLng(2255, -3250), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //last Bunker: Hidden Grapple Room (Requires Power Bomb)

var p11 = L.marker(LatLng(-315, -1585), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Central Core: Electromagnetism Vetical Platforming Room (Above Echo)
var p12 = L.marker(LatLng(-795, -1455), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Central Core: Long Grapple Transition Room CC -> IB
var p13 = L.marker(LatLng(-1385, 1535), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Central Core: After Car Battery Boss (Accessed from the right, platforming area)
var p14 = L.marker(LatLng(144, 1773), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Central Core: Electric Rings Room

var p15 = L.marker(LatLng(-1710, -1865), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Incinerator Burner: Behind One-way door
var p16 = L.marker(LatLng(-2235, -2300), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Incinerator Burner: Fire Enemy Pogo room

var p17 = L.marker(LatLng(1305, 1800), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell (Boss Reward)" }).addTo(map).on('click', setOpacity); //Factory Facility: Awarded after defeating Surveillance Bot boss
var p18 = L.marker(LatLng(935, 3925), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Factory Facility: Behind One-way door (progressional door)
var p19 = L.marker(LatLng(155, 6120), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Factory Facility: Vertical Transition Room between FF -> PE
var p20 = L.marker(LatLng(545, 4905), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Factory Facility: Grapple between Sawblades
var p21 = L.marker(LatLng(1415, 3325), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Factory Facility: Bottom left room of vertical platform room to RS

var p22 = L.marker(LatLng(1810, 2830), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Ruined Surface: Right-most before FF Transition, On top of wall

var p23 = L.marker(LatLng(1720, 6602), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell" }).addTo(map).on('click', setOpacity); //Blazing Furnace: Bottom Right of first room

var p24 = L.marker(LatLng(-1305, 5065), { icon: powerCellIcon, riseOnHover: true, title: "Power Cell (Boss Reward)" }).addTo(map).on('click', setOpacity); //Pinion's Expanse: Awarded from Mischevious

var powerCells = L.layerGroup([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24]).addTo(map);


/*--- CHIP ICONS -----------------------------------------------------*/
var chipIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        shadowUrl: 'images/backgrounds/upgrades_bg.png',
        shadowSize: [32, 32],
        shadowAnchor: [16, 16],
        popupAnchor: [0, -11]
    }
});

var blueChipIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/BlueChip_Icon.png' });
var redChipIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/RedChip_Icon.png' });
var greenChipIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/GreenChip_Icon.png' });

var nomad = L.marker(LatLng(690, -3365), { icon: blueChipIcon, riseOnHover: true, title: "Nomad's Plate" }).addTo(map).on('click', setOpacity); // Nomad's Plate
var sawblade = L.marker(LatLng(-2210, 3165), { icon: blueChipIcon, riseOnHover: true, title: "Sawblade" }).addTo(map).on('click', setOpacity); //Sawblade
var transputer = L.marker(LatLng(-2515, -5715), { icon: blueChipIcon, riseOnHover: true, title: "Amplifying Transputer" }).addTo(map).on('click', setOpacity); //Amplifying Transputer
var qrepair = L.marker(LatLng(-155, 3890), { icon: blueChipIcon, riseOnHover: true, title: "Quick Repair (Quest Reward)" }).addTo(map).on('click', setOpacity); //Quick Repair
var invincibility = L.marker(LatLng(-1680, 2840), { icon: blueChipIcon, riseOnHover: true, title: "Tungsten Steel" }).addTo(map).on('click', setOpacity); //Tungsten Steel

var crit = L.marker(LatLng(-205, -2475), { icon: redChipIcon, riseOnHover: true, title: "Infinity Edge" }).addTo(map).on('click', setOpacity); // Infinity Edge
var spark = L.marker(LatLng(-1280, -405), { icon: redChipIcon, riseOnHover: true, title: "Electro-Emitter (Reward [#])" }).addTo(map).on('click', setOpacity); // Electro-Emitter
var lightning = L.marker(LatLng(-2243, -3810), { icon: redChipIcon, riseOnHover: true, title: "Bulb Relation" }).addTo(map).on('click', setOpacity); // Bulb Relation
var steady = L.marker(LatLng(-3560, 1075), { icon: redChipIcon, riseOnHover: true, title: "Magnetic Footing" }).addTo(map).on('click', setOpacity); // Magnetic Footing
var bombcost = L.marker(LatLng(910, 140), { icon: redChipIcon, riseOnHover: true, title: "Power Processor (Behind Wall: Requires both skulls)" }).addTo(map).on('click', setOpacity); // Power Processor
var powerblink = L.marker(LatLng(-3450, -3230), { icon: redChipIcon, riseOnHover: true, title: "Space Disturbance" }).addTo(map).on('click', setOpacity); // Space Disturbance
var orbs = L.marker(LatLng(-1395, 890), { icon: redChipIcon, riseOnHover: true, title: "Electric Orbs (Boss Reward)" }).addTo(map).on('click', setOpacity); // Electric Orbs

var speed = L.marker(LatLng(-1692, -3225), { icon: greenChipIcon, riseOnHover: true, title: "Gyro-Accelerator" }).addTo(map).on('click', setOpacity); //Gyro-Accelerator
var noheat = L.marker(LatLng(1980, -2510), { icon: greenChipIcon, riseOnHover: true, title: "Heat Drive" }).addTo(map).on('click', setOpacity); //Heat Drive
var autorepair = L.marker(LatLng(190, 4195), { icon: greenChipIcon, riseOnHover: true, title: "Auto Repair" }).addTo(map).on('click', setOpacity); //Auto Repair
var extract = L.marker(LatLng(620, 3015), { icon: greenChipIcon, riseOnHover: true, title: "Extractor" }).addTo(map).on('click', setOpacity); //Extractor
var autoroll = L.marker(LatLng(-3037, 5945), { icon: greenChipIcon, riseOnHover: true, title: "Auto Modifier" }).addTo(map).on('click', setOpacity); //Auto Modifier

var socketIcon = L.Icon.extend({
    options: {
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        shadowUrl: 'images/backgrounds/upgrades_bg.png',
        shadowSize: [32, 32],
        shadowAnchor: [16, 16],
        popupAnchor: [0, -11]
    }
});

var blueSocketIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/BlueSocket_Icon.png' });
var redSocketIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/RedSocket_Icon.png' });
var greenSocketIcon = new chipIcon({ iconUrl: 'images/markers/upgrades/GreenSocket_Icon.png' });

var bsocket = L.marker(LatLng(-1830, 6428), { icon: blueSocketIcon, riseOnHover: true, title: "Blue Chip Socket" }).addTo(map).on('click', setOpacity); //Blue Socket
var rsocket = L.marker(LatLng(2630, 5965), { icon: redSocketIcon, riseOnHover: true, title: "Red Chip Socket" }).addTo(map).on('click', setOpacity); //Red Socket
var gsocket = L.marker(LatLng(-3945, -1035), { icon: greenSocketIcon, riseOnHover: true, title: "Green Chip Socket" }).addTo(map).on('click', setOpacity); //Green Socket

var blue = [nomad, sawblade, transputer, qrepair, invincibility, bsocket];
var red = [crit, spark, lightning, steady, bombcost, powerblink, orbs, rsocket];
var green = [speed, noheat, autorepair, extract, autoroll, gsocket];
var chipsSockets = L.layerGroup([nomad, sawblade, transputer, qrepair, invincibility, bsocket, crit, spark, lightning, steady, bombcost, powerblink, orbs, rsocket, speed, noheat, autorepair, extract, autoroll, gsocket]).addTo(map);



/*--- SCRAP PART LOCATION ICONS --------------------------------------*/


/*--- CAPSULE FRAGMENT ICONS -----------------------------------------*/
var capsuleIcon = L.icon({
    iconUrl: 'images/markers/upgrades/CapsuleFragment_Icon.png',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    shadowUrl: 'images/backgrounds/upgrades_bg.png',
    shadowSize: [32, 32],
    shadowAnchor: [16, 16],
    popupAnchor: [0, -11]
});

var cap1 = L.marker(LatLng(-1235, -475), { icon: capsuleIcon, riseOnHover: true, title: "Capsule Fragment (Reward [#])" }).addTo(map).on('click', setOpacity); //Quatern Reward 1
var cap2 = L.marker(LatLng(-1235, -345), { icon: capsuleIcon, riseOnHover: true, title: "Capsule Fragment (Reward [#])" }).addTo(map).on('click', setOpacity); //Quatern Reward 2
var cap3 = L.marker(LatLng(-715, -3570), { icon: capsuleIcon, riseOnHover: true, title: "Capsule Fragment (Boss Reward)" }).addTo(map).on('click', setOpacity); //Tyre Boss Reward
var cap4 = L.marker(LatLng(-1115, 4005), { icon: capsuleIcon, riseOnHover: true, title: "Capsule Fragment" }).addTo(map).on('click', setOpacity); //Pinion's Expanse: Beside Clock
var cap5 = L.marker(LatLng(-1805, -6130), { icon: capsuleIcon, riseOnHover: true, title: "Capsule Fragment (Boss Reward)" }).addTo(map).on('click', setOpacity); //Drill Worm Reward
var cap6 = L.marker(LatLng(1610, 5893), { icon: capsuleIcon, riseOnHover: true, title: "Capsule Fragment"}).addTo(map).on('click', setOpacity); //Factory Facility
var cap7 = L.marker(LatLng(-3290, -620), { icon: capsuleIcon, riseOnHover: true, title: "Capsule Fragment" }).addTo(map).on('click', setOpacity); //Above First Tree
var cap8 = L.marker(LatLng(-1785, 4435), { icon: capsuleIcon, riseOnHover: true, title: "Capsule Fragment" }).addTo(map).on('click', setOpacity); //Water Ducts
var cap9 = L.marker(LatLng(2123, -705), { icon: capsuleIcon, riseOnHover: true, title: "Capsule Fragment"}).addTo(map).on('click', setOpacity); //Last Bunker: Past Monitor Room
var cap10 = L.marker(LatLng(-165, 1085), { icon: capsuleIcon, riseOnHover: true, title: "Capsule Fragment" }).addTo(map).on('click', setOpacity); //Central Core

var capsules = L.layerGroup([cap1, cap2, cap3, cap4, cap5, cap6, cap7, cap8, cap9, cap10]).addTo(map);


/*--- LIQUID COOLANT ICONS -------------------------------------------*/
var coolantIcon = L.icon({
    iconUrl: 'images/markers/upgrades/LiquidCoolant_Icon.png',
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    shadowUrl: 'images/backgrounds/upgrades_bg.png',
    shadowSize: [32, 32],
    shadowAnchor: [16, 16],
    popupAnchor: [0, -11]
});

var coolant1 = L.marker(LatLng(-3250, 5350), { icon: coolantIcon, riseOnHover: true, title: "Liquid Coolant" }).addTo(map).on('click', setOpacity); //Water Ducts
var coolant2 = L.marker(LatLng(-3010, -5495), { icon: coolantIcon, riseOnHover: true, title: "Liquid Coolant" }).addTo(map).on('click', setOpacity); //Research Lab (Forgotten Ruins)
var coolant3 = L.marker(LatLng(2560, 2915), { icon: coolantIcon, riseOnHover: true, title: "Liquid Coolant" }).addTo(map).on('click', setOpacity); //Blazing Furnace

var coolants = L.layerGroup([coolant1, coolant2, coolant3]).addTo(map);

/*--- RUSTED KEY ICONS -----------------------------------------------*/


/*--- MISC ITEMS ICONS (ELECTRIC KEY, CASSETTE, GOLDCREST WHISTLE) ---*/


/*--- BOSS ICONS -----------------------------------------------------*/
var bossIcon = L.Icon.extend({
    options: {
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        shadowUrl: 'images/backgrounds/upgrades_bg.png',
        shadowSize: [32, 32],
        shadowAnchor: [16, 16],
        popupAnchor: [0, -11]
    }
});

var protonIcon = new bossIcon({ iconUrl: 'images/markers/world/ProtonBoss_Icon.png' });
var electronIcon = new bossIcon({ iconUrl: 'images/markers/world/ElectronBoss_Icon.png' });
var NeutronIcon = new bossIcon({ iconUrl: 'images/markers/world/NeutronBoss_Icon.png' });

var proton = L.marker(LatLng(2550, 3305), { icon: protonIcon, riseOnHover: true, title: "Proton (Boss)" }).addTo(map).on('click', setOpacity); //Proton
var electron = L.marker(LatLng(-2645, -320), { icon: electronIcon, riseOnHover: true, title: "Electron (Boss)" }).addTo(map).on('click', setOpacity); //Electron
var neutron = L.marker(LatLng(970, -4065), { icon: NeutronIcon, riseOnHover: true, title: "Neutron (Boss)" }).addTo(map).on('click', setOpacity); //Neutron

var bosses = L.layerGroup([proton, electron, neutron]).addTo(map);


/*--- NPC ICONS (MAY BE IMPLEMENTED) ---------------------------------*/