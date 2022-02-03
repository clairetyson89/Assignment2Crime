var map = L.map('map').setView([37.760109273244524, -122.4414471468871], 11.5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$.getJSON("https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%201%20-%20GitHub%20and%20Leaflet/sf_crime.geojson",function(data){
	var crimeIcon = L.icon({
		iconUrl: "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/012/474/original/victim_5514707.png",
		iconSize: [25,25]
	});
    L.geoJson(data ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: crimeIcon});
    }
  } ).addTo(map);
});
