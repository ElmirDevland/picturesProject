import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import inputsCheck from './modules/inputsCheck';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.main-slider-item');
  sliders('.feedback-slider-item', true, '.main-prev-btn', '.main-next-btn');
  forms();
  mask('[name="phone"]');
  inputsCheck('[name="name"]');
  inputsCheck('[name="message"]');
});
