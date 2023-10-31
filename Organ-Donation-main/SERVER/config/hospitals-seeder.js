const Hospital = require('../models/hospital.model');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/OrganChain', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
	console.log("Connection Established with Test Database!")
});


var hospitals = [new Hospital({
	username: 'Manipal Hospital',
	password: (new Hospital()).generateHash("admin123"),
	hospitalpublickey: '0x68099feE8C881F514dfd6A38fe4F72B9CA5F52e3',
	address: '98, HAL Old Airport Rd, Kodihalli, Bangalore, Karnataka',
	contact: '09100414627',
	city: 'Bangalore',
	img: 'manipal.jpeg'
}),
new Hospital({
	username: 'Sakra Hospital',
	password: (new Hospital()).generateHash("admin123"),
	hospitalpublickey: '0x3B38705F2f0839EcfEe2622b867073e6146fEacd',
	address: 'SY NO 52/2 & 52/3, Devarabeesanahalli,Outer Ring Rd, Marathahalli, Bangalore, Karnataka',
	contact: '080-49694969',
	city: 'Bangalore',
	img: 'sakra.jpeg'
}),
new Hospital({
	username: 'Narayana Hospital',
	password: (new Hospital()).generateHash("Admin123"),
	hospitalpublickey: '0x3008FBe1fCeEF575BB6E1CC6724E1D86441DC338',
	address: ' No.6,7 & 8, 18th Cross, 4th Main, Near Margosa Road BMTC Bus Stand, Malleshwaram, Bangalore, Karnataka',
	contact: '09483296648',
	city: 'Bangalore',
	img: 'narayana.jpeg'
}),
new Hospital({
	username: 'Yashoda Hospital',
	password: (new Hospital()).generateHash("admin123"),
	hospitalpublickey: '0xEe24e5C62A83c96B1De4b041Bd0b870E6202B5A6',
	address: 'Alexander Rd, Kummari Guda, Shivaji Nagar, Secunderabad, Telangana',
	contact: '040-45674567',
	city: 'Secunderabad',
	img: 'yashoda.png'
}),
new Hospital({
	username: 'Kims Hospital',
	password: (new Hospital()).generateHash("admin123"),
	hospitalpublickey: '0x3CA1077784c6e3fddBFbF7C05a102D80d462e6F9',
	address: 'Begumpet, 1-8-31/1, Minister Rd, Krishna Nagar Colony, Secunderabad, Ramgopalpet',
	contact: '040-44885000',
	city: 'Secunderabad',
	img: 'kims.jpeg'
}),
new Hospital({
	username: 'Apollo Hospital',
	password: (new Hospital()).generateHash("admin123"),
	hospitalpublickey: '0x939f865B678AbFa04FD49AA0aEe45B84deBDDA57',
	address: 'Pollicetty Towers, St Johns Rd, Beside Keyes High School, Secunderabad, Telangana',
	contact: '18605001066',
	city: 'Secunderabad',
	img: 'apollo.jpg'
}),
new Hospital({
	username: 'Lifeline Hospital',
	password: (new Hospital()).generateHash("admin123"),
	hospitalpublickey: '0x7DeC649AAe2aEFce55Bb4743D9Da4b7D1Bb89dAf',
	address: '47/3, New Avadi Rd, Alagappa Nagar, Kilpauk, Chennai, Tamil Nadu',
	contact: '09677222333',
	city: 'Chennai',
	img: 'lifeline.jpeg'
}),
new Hospital({
	username: 'Sooriya Hospital',
	password: (new Hospital()).generateHash("Admin123"),
	hospitalpublickey: '0x171A1857D52918FC6d865b0A8c001328d142EF98',
	address: 'No.1, Arunachalam Rd, Velayutham Colony, Saligramam, Chennai, Tamil Nadu',
	contact: '044-23761750',
	city: 'Chennai',
	img: 'sooriya.png'
})
];

var done = 0;

for (var i = 0; i < hospitals.length; i++) {
	hospitals[i].save(function (err, result) {
		console.log(result);
		done++;
		if (done === hospitals.length)
			exit();
	});
}

function exit() {
	mongoose.disconnect();
}
