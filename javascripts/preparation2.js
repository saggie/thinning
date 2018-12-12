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

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {

        const p1 = _getValue(x, y);
        const p2 = _getValue(x, y - 1);
        const p3 = _getValue(x + 1, y - 1);
        const p4 = _getValue(x + 1, y);
        const p5 = _getValue(x + 1, y + 1);
        const p6 = _getValue(x, y + 1);
        const p7 = _getValue(x - 1, y + 1);
        const p8 = _getValue(x - 1, y);
        const p9 = _getValue(x - 1, y - 1);

        if (p1 && p2 && p3 && p4 && p5 && p6 && p7 && p8 && p9) {
          currentData[_getAddress(x, y)] = false;
        }
      }
    };
  };

  return {
    apply: apply
  };

})();
