var app = require('sugar-angularjs').module('gramophone.core',[]);
var gramophone = require('./src/notify.core.min.js');
window.gramophone = gramophone.amplify;
app.service('gramophone',function() {
  return window.gramophone;
});

