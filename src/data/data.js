import yargs from 'yargs';
const PRODUCTION = !!(yargs.argv.production);

export default {
  "site": {
    "baseurl": PRODUCTION ? '/h2oimmo' : ''
  },
  "agency": {
    "name": "H2O So Immobilier",
    "address": "89 Chemin des Platelles 83210 Sollies-Toucas",
    "latitude": 43.204483,
    "longitude": 6.018387,
    "phone": "06.09.55.24.66"
  },
  "currentYear": new Date().getFullYear(),
  "googleMapsApiKey": "",
  "googleRecaptchaSiteKey": "",
  "villas": [{
    "title": "Spacieuse villa avec piscine dominant la vallée",
    "size": 220,
    "location": "Sollies-Toucas",
    "price": 700000,
    "pictures": [
      "/assets/img/villas/1.jpg",
      "/assets/img/villas/2.jpg",
      "/assets/img/villas/3.jpg"
    ],
    "isNew": true
  }, {
    "title": "Villa ultra moderne de haut standing avec piscine et jaccuzi",
    "size": 360,
    "location": "Cannes",
    "price": 1200000,
    "pictures": [
      "/assets/img/villas/1.jpg",
      "/assets/img/villas/2.jpg",
      "/assets/img/villas/3.jpg"
    ],
    "isNew": true
  }, {
    "title": "Villa ultra moderne de haut standing avec piscine et jaccuzi",
    "size": 360,
    "location": "Cannes",
    "price": 1200000,
    "pictures": [
      "/assets/img/villas/1.jpg",
      "/assets/img/villas/2.jpg",
      "/assets/img/villas/3.jpg"
    ],
    "isNew": false
  }, {
    "title": "Spacieuse villa avec piscine dominant la vallée",
    "size": 220,
    "location": "Sollies-Toucas",
    "price": 700000,
    "pictures": [
      "/assets/img/villas/1.jpg",
      "/assets/img/villas/2.jpg",
      "/assets/img/villas/3.jpg"
    ],
    "isNew": false
  }]
}
