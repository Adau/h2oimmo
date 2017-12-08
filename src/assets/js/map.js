module.exports = () => {
  var agency = { lat: window.agency.latitude, lng: window.agency.longitude };

  var map = new google.maps.Map(document.querySelector('.js-map'), {
    zoom: 9,
    center: agency
  });

  new google.maps.Marker({
    position: agency,
    map: map
  });
}
