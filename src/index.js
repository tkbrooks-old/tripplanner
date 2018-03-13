const mapboxgl = require("mapbox-gl");
const marker = require('./marker')

// mapboxgl.accessToken = "pk.eyJ1IjoidGticm9va3MiLCJhIjoiY2plcTI3czNzNXV1cTJ3bG43YTJpMzc3eiJ9.VQWLgG9x7CFu0JCnZHBY5Q";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 3, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const marker2Chi = new mapboxgl.Marker()
// .setLngLat([-87.6354, 41.8885])
// .addTo(map);

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.6354, 41.8885] for Chicago



marker('hotel', -74.009, 40.705).addTo(map); // NY
marker('restaurant', -87.6354, 41.8885).addTo(map); // chi
