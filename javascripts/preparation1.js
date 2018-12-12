THIN.preparation1 = (function () {

  let width = 0;
  let height = 0;
  let data = null;

  var _init = function () {
    width = THIN.image.width;
    height = THIN.image.height;
    data = THIN.binaryData;
  };

  var _getAddress = function (x, y) {
    return x + y * width;
  };

  var _getValue = function (x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) {
      return false;
    }
    return data[_getAddress(x, y)];
  };

  var _isConditionSatisfied = function (p2, p3, p4, p5, p6, p7, p8, p9) {
    if (p2 && p6) { return true; }
    if (p4 && p8) { return true; }
    return false;
  };

  var apply = function () {
    _init();

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (_getValue(x, y) == true) {
          continue;
        }

        const p2 = _getValue(x, y - 1);
        const p3 = _getValue(x + 1, y - 1);
        const p4 = _getValue(x + 1, y);
        const p5 = _getValue(x + 1, y + 1);
        const p6 = _getValue(x, y + 1);
        const p7 = _getValue(x - 1, y + 1);
        const p8 = _getValue(x - 1, y);
        const p9 = _getValue(x - 1, y - 1);

        if (_isConditionSatisfied(p2, p3, p4, p5, p6, p7, p8, p9)) {
          data[_getAddress(x, y)] = true;
        }
      }
    };
  };

  return {
    apply: apply
  };

})();
