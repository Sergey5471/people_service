import {
	exitBtn
} from './home.js'

import {
	exit 
} from './funkList.js'

exitBtn.addEventListener('click', function () {
	exit()
})


// function initMap() {
//     let locations = [
//         ['Shop №1', 53.93187753029889, 27.65008890420089, 1],
//         ['Shop №2', 53.93115283699134, 27.63719370707769, 2],
//         ['Shop №3', 53.936573744297746, 27.61321361156399, 3],
//         ['Shop №4', 53.936169887814074, 27.595745797123858, 4],
//         ['Shop №5', 53.92878192988065, 27.582627163589375, 5],
//         ['Shop №6', 53.91315886061578, 27.60538140828371, 6],
//         ['Shop №7', 53.89031275353563, 27.609349990830715, 7],
//         ['Shop №8', 53.87872782790282, 27.593861507360938, 8],
//         ['Shop №9', 53.86319875580873, 27.567809076457632, 9],
//         ['Shop №10', 53.86628169775165, 27.508384519642636, 10],
//         ['Shop №11', 53.868790726518284, 27.479745119858688, 11],
//         ['Shop №12', 53.86291071680432, 27.440889784373674, 12],
//         ['Shop №13', 53.887041648286086, 27.43727931494765, 13],
//         ['Shop №14', 53.91571766075251, 27.47018445080508, 14],
//         ['Shop №15', 53.93864307880945, 27.48552005508541, 15],
//     ];
//     const map = new google.maps.Map(document.getElementById('googleMap'), {
//         zoom: 12,
//         center: new google.maps.LatLng(53.90089008939261, 27.55758402318272),
//     });

//     const infowindow = new google.maps.InfoWindow;

//     let marker, i;

//     for (i = 0; i < locations.length; i++) {
//         marker = new google.maps.Marker({
//             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//             map: map
//         });

//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//             return function() {
//                 infowindow.setContent(locations[i][0]);
//                 infowindow.open(map, marker);
//             }
//         })(marker, i));
//     }
// }

// window.initMap = initMap;


