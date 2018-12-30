THIN.colorUtil = (function () {

  // Assuming '0xRRGGBB' (discarding alpha channel)
  var _toRgb = function (hexValue) {
    const rgb = [];
    rgb.push(hexValue >>> 16 & 0xff); // R
    rgb.push(hexValue >>> 8 & 0xff); // G
    rgb.push(hexValue & 0xff); // B
    return rgb;
  };

  return {
    toRgb: _toRgb
  };

})();
