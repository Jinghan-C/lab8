function initMap() {
	// add your code here

	L.mapquest.key = 'XIlMCwIJv9gyQe5BtlcxnBk0sF7egrl3';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12
		//zoomControl: false
	});

	L.marker([32.87849837690393, -117.23591346326414]).addTo(map);

}