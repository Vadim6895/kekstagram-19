'use strict';
(function () {
  var DEBOUNCE_INTERVAL = 500;

  window.getDebounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };


  /* var b = function () {
    console.log('test');
  }; */
  /* window.debounce(function () {
    b();
  }); */
  // как правильно вызвать функцию ? arguments, и apply пока не освоил

})();