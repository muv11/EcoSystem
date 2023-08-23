const apiKey = 'a1893935-6834-4445-b97a-3405fb426c5b';
const centerCoordinates = [60.597474, 56.838011]; //lon, lat

const map = new mapgl.Map('map_container', {
    key: apiKey,
    center: centerCoordinates,
    zoom: 10,
    zoomControl: false
});

let markerOnClick = new mapgl.Marker(map, {
    coordinates: centerCoordinates
});
markerOnClick.hide();
function createMarkerOnMapClick() {
    map.on('click', function (event) {
        markerOnClick.destroy();
        let coords = [event.lngLat[0], event.lngLat[1]];
        markerOnClick = new mapgl.Marker(map, {
            coordinates: coords
        });
        markerOnClick.show();
    });
}

let appeals = [];
async function requestAppeals() {
    const response = await fetch("http://localhost:8080/api/appeals");
    appeals = await response.json();
}
let marker;
async function showMarkers() {
    await requestAppeals();
    console.log(appeals);
    for (let i = 0; i < appeals.length; i++) {
        let coords = [appeals[i].longitude, appeals[i].latitude];
        console.log(coords);
        marker = new mapgl.Marker(map, {
            coordinates: coords
        });
    }
}


createMarkerOnMapClick();
showMarkers().then();