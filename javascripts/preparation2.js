THIN.preparation2 = (function () {

  let width = 0;
  let height = 0;
  let currentData = null;
  let previousData = null;

  var _init = function () {
    width = THIN.image.width;
    height = THIN.image.height;
    currentData = THIN.binaryData;
    previousData = currentData.concat();
  };

  var _getAddress = function (x, y) {
    return x + y * width;
  };

  var _getValue = function (x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) {
      return true;
    }
    return previousData[_getAddress(x, y)];
  };

  var apply = function () {
    _init();

    if (THIN.options.mode == 1) {
      return;
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {

        if (_getValue(x, y)) {
          continue;
        }

        const p2 = _getValue(x, y - 1);
        const p4 = _getValue(x + 1, y);
        const p6 = _getValue(x, y + 1);
        const p8 = _getValue(x - 1, y);

        if (p2 && p6) {
          currentData[_getAddress(x, y)] = true;
        }
        if (p4 && p8) {
          currentData[_getAddress(x, y)] = true;
        }
      }
    };
  };

  return {
    apply: apply
  };

})();
