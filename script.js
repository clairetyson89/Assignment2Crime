var map = L.map('mapID').setView([38.5677357287667, -90.26065855130673], 11.5);
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

//adding in markers and popups
var marker1 = L.marker([38.61646906937522, -90.2781275757272]).addTo(map);
//Anthonino's Taverna
marker1.bindPopup("<b>Anthonino's Taverna</b><br>Easygoing eatery whipping up hearty plates of Italian & Greek fare, including toasted ravioli.").openPopup();

var marker2 = L.marker([38.54928222827671, -90.26363784258069]).addTo(map);
//River Des Peres Yacht Club
marker2.bindPopup("<b>River Des Peres Yacht Club Deli</b><br>A sandwich shop by River Des Peres.").openPopup();

var marker3 = L.marker([38.645748626283016, -90.26140420598709]).addTo(map);
//Yellowbelly
marker3.bindPopup("<b>Yellowbelly</b><br>Celebrated bistro for Californian cuisine with a wine emphasis in a stylish renovated-factory space.").openPopup();

var marker4 = L.marker([38.62033846450811, -90.21282969602044]).addTo(map);
//Eleven Eleven Mississippi
marker4.bindPopup("<b>Eleven Eleven Mississippi</b><br>Celebrated bistro for Californian cuisine with a wine emphasis in a stylish renovated-factory space.").openPopup();

var marker5 = L.marker([38.583151637826184, -90.29319087625662]).addTo(map);
//Salvage Yard Bar and Grill
marker5.bindPopup("<b>Salvage Yard Bar and Grill</b><br>Spartan counter-serve nook with a menu of St. Louis- & Chicago-style pies, plus sandwiches & sides.").openPopup();





