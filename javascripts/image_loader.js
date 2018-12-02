THIN.image_loader = (function () {

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  var _getFileReader = function (callback) {
    var reader = new FileReader();

    reader.onload = function (e) {
      THIN.image.onload = (function () {
        canvas.width = THIN.image.width;
        canvas.height = THIN.image.height;
        context.drawImage(THIN.image, 0, 0);
        THIN.imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        callback();
      });
      THIN.image.src = e.target.result;
    };

    return reader;
  };

  var load = function (callback) {
    _getFileReader(callback).readAsDataURL(THIN.sourceFile);
  };

  return {
    load: load
  };

})();
