import {
	exitBtn
} from './home.js'

import {
	exit 
} from './funkList.js'

exitBtn.addEventListener('click', function () {
	exit()
})


function initMap() {
	const mapBox = document.getElementById('map')
	const options = {
		zoom: 11,
		center: { lat: 53.893009, lng: 27.567444, }
	};

	const map = new google.maps.Map(mapBox, options)
	
	const markerProperty = [
		['Job', 53.95960271500719, 27.53526912954463],
		['Home', 53.86430335038314, 27.53772705660463],
		['Gym', 53.905874643481525, 27.53911108866668],
		['Shop', 53.8475637830196, 27.47115475708255],
		['Shaverma', 53.95843296831541, 27.535737264871408],
		['BMW', 53.97226889814744, 27.588758621980325],
		['Friend', 53.91089894653826, 27.677730468361748],
		['Cinema', 53.93279131602541, 27.51041200140334],
		['Hospital', 53.917071407099606, 27.56882788432859],
		['Subway', 53.87713282428844, 27.549531251417356],
		['Flat', 53.86789698874619, 27.48303693617832],
		['Parents', 53.848734263232316, 27.45706407044307],
		['Mordor', 53.94333670523516, 27.630317788943387],
		['Brother', 53.90032561608092, 27.429944186175405],
		['Park', 53.847612809084545, 27.52069448680881]

	]

	for (let i = 0; i < markerProperty.length; i++) {
		console.log(markerProperty[i][0]);
		console.log(markerProperty[i][1]);
		console.log(markerProperty[i][2]);
		drawMarker(markerProperty[i][0],markerProperty[i][1],markerProperty[i][2],)
	}


	function drawMarker(text, lat, lng) {
		const marker = new google.maps.Marker({
			position: { lat: lat, lng: lng, },
			map: map
		})
		const InfoWindow = new google.maps.InfoWindow({
			content: `<h3>${text}</h3>`
		})
	
		marker.addListener('click', function () {
			InfoWindow.open(map, marker)
		})
	
	}
	


}




// function drawmarker2(text, lat, lng) {
// 	const marker = new google.maps.Marker({
// 		position: { lat: lat, lng: lng, },
// 		map: map
// 	})
// 	const InfoWindow = new google.maps.InfoWindow({
// 		content: `<h3>${text}</h3>`
// 	})
// 	marker.addListener('click', function () {
// 		InfoWindow.open(map, marker)
// 	})
// }


window.initMap = initMap;





