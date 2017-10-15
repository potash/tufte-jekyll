---
layout: post
title:  "Chicago's Most Remote Parks"
date:   2017-10-15
categories:
custom_js: 
 - pannellum
 - leaflet
custom_css:
 - pannellum
 - leaflet
---

Stretching over 18 miles from Edgewater to South Shore, Chicago’s lakefront trail is perhaps the city’s most iconic park.

But calling it a trail is a bit absurd as it runs almost adjacent to the four-lane monstrosity that is Lake Shore Drive. What’s the farthest this “trail” gets from a road? 608 feet (.11 miles), when it goes east around Museum Campus:

<figure>
<div id="panorama" class="panorama"></div>
<div id="mapid" class="map"></div>
</figure>

<script>
pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://i.imgur.com/9tiJATm.jpg",
    "vaov":"54.15", "hfov":"60","minPitch":"-25","maxPitch":"25"
});

var mymap = L.map('mapid').setView([41.8681098, -87.6153608], 15);
access_token = 'pk.eyJ1IjoiZXBvdGFzaCIsImEiOiJjaXFqeDBpNTUwMGk5ZnhtOGN4ZjJ2MHhmIn0.r5jxF47AZ4lwsr6ADeKbAA'
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + access_token, {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
</script>

