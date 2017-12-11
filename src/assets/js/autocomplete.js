module.exports = () => {
  const input = document.querySelector('.js-autocomplete');

  const autocomplete = new google.maps.places.Autocomplete(
    input, {
      types: ['(cities)'],
      componentRestrictions: {country: 'fr'}
  });

  // google.maps.event.addListener(autocomplete, 'place_changed', () => {
  //   let place = autocomplete.getPlace();
  //   console.log(place);
  // });

  // Empêcher de valider le formulaire lors de la sélection de la ville avec la touche Entrée du clavier
  google.maps.event.addDomListener(input, 'keydown', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });
}
