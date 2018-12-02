THIN.binalize = (function () {

  const colorOffset = 4; // R(0), G(1), B(2), A(3), R(4), ...
  const threshold = parseInt(255 / 2);

  let width = 0;
  let height = 0;

  var _init = function () {
    width = THIN.image.width;
    height = THIN.image.height;
    THIN.binaryData = new Array(width * height);
  };

  var _getValue = function (address) {
    const r = THIN.imageData.data[address * colorOffset + 0];
    const g = THIN.imageData.data[address * colorOffset + 1];
    const b = THIN.imageData.data[address * colorOffset + 2];
    return parseInt((r + g + b) / 3);
  };

  var apply = function () {
    _init();

    for (let address = 0; address < width * height; address++) {
      if (_getValue(address) > threshold) {
        THIN.binaryData[address] = false;
      } else {
        THIN.binaryData[address] = true;
      }
    }
  };

  return {
    apply: apply
  };

})();
