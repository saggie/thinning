THIN.image_decoder = (function () {

  const colorOffset = 4; // R(0), G(1), B(2), A(3), R(4), ...

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  let width = 0;
  let height = 0;
  let resultImageData = null;

  var _init = function () {
    width = THIN.image.width;
    height = THIN.image.height;
    resultImageData = context.createImageData(width, height);
  };

  var _setValue = function (address, hexValue) {
    const rgb = THIN.colorUtil.toRgb(hexValue);
    resultImageData.data[address * colorOffset + 0] = rgb[0];
    resultImageData.data[address * colorOffset + 1] = rgb[1];
    resultImageData.data[address * colorOffset + 2] = rgb[2];
    resultImageData.data[address * colorOffset + 3] = 255;
  };

  var decode = function () {
    _init();

    for (let address = 0; address < width * height; address++) {
      const value = THIN.binaryData[address] ? THIN.options.resultColor : 0xffffff;
      _setValue(address, value);
    }

    context.putImageData(resultImageData, 0, 0);
  };

  return {
    decode: decode
  };

})();
