const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoidGticm9va3MiLCJhIjoiY2plcTI3czNzNXV1cTJ3bG43YTJpMzc3eiJ9.VQWLgG9x7CFu0JCnZHBY5Q";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
