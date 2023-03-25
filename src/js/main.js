import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import inputsCheck from './modules/inputsCheck';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const formState = {};

  modals();
  sliders('.main-slider-item');
  sliders('.feedback-slider-item', true, '.main-prev-btn', '.main-next-btn');
  forms(formState);
  mask('[name="phone"]');
  inputsCheck('[name="name"]');
  inputsCheck('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc(
    '#size',
    '#material',
    '#options',
    '.promocode',
    '.calc-price',
    formState
  );
  filter();
});
