const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoidGticm9va3MiLCJhIjoiY2plcTI3czNzNXV1cTJ3bG43YTJpMzc3eiJ9.VQWLgG9x7CFu0JCnZHBY5Q";

const marker = (activity, coords) => {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    if (activity === 'hotel') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    } else if (activity === 'restaurant') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    } else {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }
    return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}

module.exports = marker;
