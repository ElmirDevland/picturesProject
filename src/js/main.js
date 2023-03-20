import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.main-slider-item');
  sliders('.feedback-slider-item', true, '.main-prev-btn', '.main-next-btn');
  forms();
});
