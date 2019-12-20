import {
  select,
  settings
} from '../settings.js';
import {
  utils
} from '../utils.js';
import {
  BaseWidget
} from './BaseWidget.js';

export class HourPicker extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, settings.hours.open);

    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.hourPicker.input);
    //console.log('hourpicker input:', thisWidget.dom.input);
    thisWidget.dom.output = thisWidget.dom.wrapper.querySelector(select.widgets.hourPicker.output);
    //console.log('hourpicker output:', thisWidget.dom.output);
    thisWidget.value = thisWidget.dom.input.value;
    thisWidget.initPlugin();

  }
  initPlugin() {

    const thisWidget = this;

    rangeSlider.create(thisWidget.dom.input); //eslint-disable-line
    //console.log('rangeSlider', thisWidget.dom.input);

    thisWidget.dom.input.addEventListener('input', function () {
      thisWidget.value = thisWidget.dom.input.value;
      //console.log('input', event);
    });
  }
  parseValue(value) {
    const toHour = utils.numberToHour(value);
    return toHour;
  }
  isValid() {
    return true;
  }
  renderValue() {
    const thisWidget = this;

    thisWidget.dom.output.innerHTML = thisWidget.value;
  }
}
