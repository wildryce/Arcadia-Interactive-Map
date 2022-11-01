/**
 * TO DO:
 * - Add a list on the right to enable/disable certain marker groups chromfrom the map
 */
var TextBox = L.Control.extend({
    options: {
        // Default control position
        position: 'topleft'
    },
    onAdd: function (map) {
        // Create a container with classname and return it
        return L.DomUtil.create('div', 'text-box');
    },
    setContent: function (content) {
        // Set the innerHTML of the container
        this.getContainer().innerHTML = content;
    }
});



L.control.Legend({
    position: "topleft",
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
        }
    ],
    opacity: 0.8
}).addTo(map);

// Assign to a variable so you can use it later and add it to your map
var textbox = new TextBox().addTo(map);
var textbox2 = new TextBox().addTo(map);
textbox.setContent("Legend items can be clicked to show/hide specific groups.")
textbox2.setContent("Map Icons can be clicked to mark as collected/uncollected.")

function setState(e) {
    var group = e.target;
    if (map.hasLayer(group)) {
        map.removeLayer(group);
    }
    else {
        map.addLayer(group);
    }
}