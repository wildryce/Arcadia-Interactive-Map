function LoadMarkerStates() {
    for (let i = 0; i < allIconsList.length; i++) {
        allIconsList[i].setOpacity(localStorage.getItem(i));
    }
    console.log("I NEVER LEARNED HOW TO READ");
}

function SaveMarkerStates() {
    for (let i = 0; i < allIconsList.length; i++) {
        var marker = allIconsList[i];
        if (marker.options.opacity != 1 && marker.options.opacity != 0.5) {
            localStorage.setItem(i, 1);
        }
        else {
            localStorage.setItem(i, marker.options.opacity);
        }
    }
}

LoadMarkerStates();
SaveMarkerStates();
