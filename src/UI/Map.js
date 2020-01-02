export class Map {
    constructor(coords) {
        // this.coordinates = coords;
        this.render(coords);
    }

    render(coordinates) {
        //google - global variable added by goolemaps sdk
        if (!google) {
            alert("Could not load maps library - please try again later");
            return;
        }

        const map = new google.maps.Map(document.getElementById("map"), {
            center: coordinates,
            zoom: 16
        });

        new google.maps.Marker({
            position: coordinates,
            map: map
        });
    }
}
