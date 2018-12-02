THIN.thinning1 = (function () {

  let width = 0;
  let height = 0;
  let currentData = null;
  let previousData = null;

  var _init = function () {
    width = THIN.image.width;
    height = THIN.image.height;
    currentData = THIN.binaryData;
  };

  var _getAddress = function (x, y) {
    return x + y * width;
  };

  var _getValue = function (x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) {
      return false;
    }
    return previousData[_getAddress(x, y)];
  };

  var _getNum01Patterns = function (p2, p3, p4, p5, p6, p7, p8, p9) {
    let count = 0;
    if (!p2 && p3) { count++; }
    if (!p3 && p4) { count++; }
    if (!p4 && p5) { count++; }
    if (!p5 && p6) { count++; }
    if (!p6 && p7) { count++; }
    if (!p7 && p8) { count++; }
    if (!p8 && p9) { count++; }
    if (!p9 && p2) { count++; }
    return count;
  };

  var _sum = function (p2, p3, p4, p5, p6, p7, p8, p9) {
    let count = 0;
    if (p2) { count++; }
    if (p3) { count++; }
    if (p4) { count++; }
    if (p5) { count++; }
    if (p6) { count++; }
    if (p7) { count++; }
    if (p8) { count++; }
    if (p9) { count++; }
    return count;
  };

  var _isConditionSatisfied = function (mode, p2, p4, p6, p8) {
    if (mode) {
      return (!p2 || !p4 || !p6) && (!p4 || !p6 || !p8);
    } else {
      return (!p2 || !p4 || !p8) && (!p2 || !p6 || !p8);
    }
  };

  var _subiteraion = function (mode) {
    let isAnyPixelChanged = false;

    previousData = currentData.concat();

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (_getValue(x, y) == false) {
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

        if (_getNum01Patterns(p2, p3, p4, p5, p6, p7, p8, p9) != 1) {
          continue;
        }

        const sum = _sum(p2, p3, p4, p5, p6, p7, p8, p9);
        if (sum >= 2 && sum <= 6) {
          if (_isConditionSatisfied(mode, p2, p4, p6, p8)) {
            currentData[_getAddress(x, y)] = false;
            isAnyPixelChanged = true;
          }
        }
      }
    }

    return isAnyPixelChanged;
  };

  var apply = function () {
    _init();

    let mode = true;

    while (true) {
      const isAnyPixelChanged = _subiteraion(mode);
      if (isAnyPixelChanged == false) {
        break;
      }
      mode = !mode;
    }
  };

  return {
    apply: apply
  };

})();
