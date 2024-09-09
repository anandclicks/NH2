let map;

function initMap() {
    console.log("initMap called");
    const mapElement = document.querySelector(".map");
    console.log("Map Element:", mapElement);

    if (mapElement) {
        map = new google.maps.Map(mapElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    } else {
        console.log("Map element not found");
    }
}
