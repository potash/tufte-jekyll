access_token = 'pk.eyJ1IjoiZXBvdGFzaCIsImEiOiJjaXFqeDBpNTUwMGk5ZnhtOGN4ZjJ2MHhmIn0.r5jxF47AZ4lwsr6ADeKbAA'

function higher_ground(args) {
    name = args[0]
    lat = parseFloat(args[1])
    lng = parseFloat(args[2])
    imageUrl = args[3]

    pannellum.viewer(name + '-panorama', {
    "type": "equirectangular",
    "panorama": imageUrl,
    "vaov":"54.15", "hfov":"60",
    "minPitch":"-25","maxPitch":"25",
    "autoLoad":true
});

var mymap = L.map(name + '-map').setView([lat, lng], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + access_token, {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
}).addTo(mymap);
}
