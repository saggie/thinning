THIN.image_publisher = (function () {

  const dummyLink = document.getElementById("download");
  const canvas = document.getElementById("canvas");

  var _getOutputFileName = function () {
    var splittedFileName = THIN.sourceFile.name.split(".");
    splittedFileName[splittedFileName.length - 2] += "_thin";
    splittedFileName[splittedFileName.length - 1] = "png";
    return splittedFileName.join(".");
  };

  var publish = function () {
    dummyLink.download = _getOutputFileName();
    canvas.toBlob(function (blob) {
      dummyLink.href = window.URL.createObjectURL(blob);
      dummyLink.click();
    })
  };

  return {
    publish: publish
  };

})();
