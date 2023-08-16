const apiKey = '6bf67d2e-d7e9-4093-b884-b776818f9a44';
const centerCoordinates = [60.597474, 56.838011]; //lon, lat

const map = new mapgl.Map('map_container', {
    key: apiKey,
    center: centerCoordinates,
    zoom: 10,
});