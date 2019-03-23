THIN.optionsManager = (function () {

  function _clamp(input, min, max) {
    return input < min ? min : input > max ? max : input;
  }

  function _setupOptionsByQueryString() {
    const querys = window.location.search.slice(1).split("&");
    for (let i = 0; i < querys.length; i++) {
      const query = querys[i].split('=');

      const key = query[0];
      const value = query[1];

      if (key == "threshold") {
        THIN.options.threshold = _clamp(value, 0, 254);
        console.log("threshold=" + THIN.options.threshold);
      } else if (key == "resultColor") {
        THIN.options.resultColor = Number("0x" + value);
        console.log("resultColor=" + THIN.options.resultColor);
      } else if (key == "mode") {
        THIN.options.mode = Number(value);
        console.log("mode=" + THIN.options.mode);
      } else if (value) {
        console.warn("An unknown parameter '" + key + "=" + value + "' detected.");
      }
    }
  };

  // Execute immediately
  _setupOptionsByQueryString();

})();
