import modals from './modules/modals';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.main-slider-item');
  sliders('.feedback-slider-item', true, '.main-prev-btn', '.main-next-btn');
});
