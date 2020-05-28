const {buttonComponent} = require('./component.js');

Vue.component('main-button', buttonComponent);
const app = new Vue({
  el: '#button',
  data: {
    message: null,
    hide: null
  }
});