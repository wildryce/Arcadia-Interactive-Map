/**
 * TO DO:
 * - Add a list on the right to enable/disable certain marker groups chromfrom the map
 */

L.control.Legend({
    position: "topleft",
    title: "Map Icons",
    legends: [
        {
            label: "Disruptors",
            type: "image",
            url: './images/markers/world/Disruptor_Icon.png',
            layers: disruptors
        },
        {
            label: "Skills",
            type: "image",
            url: './images/markers/skills/BodyModifier_Icon.png',
            layers: skills
        },
        {
            label: "Power Cells",
            type: "image",
            url: './images/markers/collectibles/PowerCell_Icon.png',
            layers: powerCells
        },
        {
            label: "Chips + Sockets",
            type: "image",
            url: './images/markers/upgrades/BlueChip_Icon.png',
            layers: chipsSockets
        },
        {
            label: "Capsule Fragments",
            type: "image",
            url: './images/markers/upgrades/CapsuleFragment_Icon.png',
            layers: capsules
        },
        {
            label: "Liquid Coolants",
            type: "image",
            url: './images/markers/upgrades/LiquidCoolant_Icon.png',
            layers: coolants
        },
        {
            label: "Bosses",
            type: "image",
            url: './images/markers/world/ElectronBoss_Icon.png',
            layers: bosses
        },
        {
            label: "Rusted Keys",
            type: "image",
            url: './images/markers/collectibles/RustyKey_Icon.png',
            layers: keys
        },
        {
            label: "Map Pins",
            type: "image",
            url: './images/markers/world/trainPin.png',
            layers: pins
        },
        {
            label: "Misc Collectibles",
            type: "image",
            url: './images/markers/collectibles/Cassette_Icon.png',
            layers: misc
        }
    ],
    opacity: 0.8
}).addTo(map);

function setState(e) {
    var group = e.target;
    if (map.hasLayer(group)) {
        map.removeLayer(group);
    }
    else {
        map.addLayer(group);
    }
}

function resetState(e) {
    var group = e.target;
    if (!map.hasLayer(group)) {
        map.addLayer(group);
    }
}

function onClickInfo() {
    var div = document.getElementById('infoButton');
    div.parentNode.removeChild(div);
}

function onClickReset() {
    ResetAll();
}

function onClickMode() {
    var div = document.getElementById('modeButton');
    var text = div.textContent;

    if (text == "Normal Mode") {
        div.textContent = "Corrupt Mode (Not Implemented)";
    }
    else if (text == "Corrupt Mode (Not Implemented)") {
        div.textContent = "Normal Mode";
    }
}