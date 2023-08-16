const apiKey = 'a1893935-6834-4445-b97a-3405fb426c5b';
const centerCoordinates = [60.597474, 56.838011]; //lon, lat

const map = new mapgl.Map('map_container', {
    key: apiKey,
    center: centerCoordinates,
    zoom: 10,
    zoomControl: false
});