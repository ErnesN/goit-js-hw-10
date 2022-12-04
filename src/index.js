import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { createMarkupCardCountry } from './js/createMarkupCardCountry';
import { createListCountries } from './js/createListCountries';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  const { value } = e.target;
  if (value.trim() === '') {
    clearMarkup();
  } else {
    fetchCountries(value.trim())
      .then(renderCardCountry)
      .catch(_error =>
        Notiflix.Notify.failure('Oops, there is no country with that name')
      );
  }
}
function renderCardCountry(country) {
  if (country.lenght > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (country.lenght >= 2 && country.lenght <= 10) {
    const markup = country.map(createListCountries);
    clearMarkup();
    countryList.insertAdjacentHTML('beforeend', markup.join(''));
  }

  if (country.lenght === 1) {
    const markup = createMarkupCardCountry(country[0]);
    clearMarkup();
    countryInfo.innerHTML = markup;
  }
}

function clearMarkup() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}
