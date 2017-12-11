import jQuery from 'jquery';
window.jQuery = window.$ = jQuery;

import Popper from 'popper.js';
window.Popper = Popper;

import 'bootstrap';

import initMap from './map';
window.initMap = initMap;

import initAutocomplete from './autocomplete';
window.initAutocomplete = initAutocomplete;
