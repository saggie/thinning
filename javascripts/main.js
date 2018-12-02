THIN.main = (function () {

  var _onImageLoaded = function () {
    THIN.binalize.apply();
    THIN.thinning1.apply();
    THIN.thinning2.apply();
    THIN.image_decoder.decode();
    THIN.image_publisher.publish();
  };

  var execute = function () {
    THIN.image_loader.load(_onImageLoaded);
  };

  return {
    execute: execute
  };

})();
