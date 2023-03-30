import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import inputsCheck from './modules/inputsCheck';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.main-slider-item');
  sliders('.feedback-slider-item', true, '.main-prev-btn', '.main-next-btn');
  forms();
  mask('[name="phone"]');
  inputsCheck('[name="name"]');
  inputsCheck('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  filter();
  pictureSize('.sizes-block');
  accordion('.accordion-heading');
  burger('.burger-menu', '.burger');
  scrolling('.pageup');
});
