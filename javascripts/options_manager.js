THIN.optionsManager = (function () {

  function _setOptionsByQueryString() {
    const querys = window.location.search.slice(1).split("&");
    for (let i = 0; i < querys.length; i++) {
      const query = querys[i].split('=');

      const key = query[0];
      const value = query[1];

      if (key == "resultColor") {
        THIN.options.resultColor = Number("0x" + value);
      }
    }
  };

  return {
    setup: _setOptionsByQueryString
  };

})();
