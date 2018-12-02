THIN.drag_and_drop = (function () {

  var onDragOver = function (event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  var onDrop = function (event) {
    event.stopPropagation();
    event.preventDefault();

    var files = event.dataTransfer.files;
    THIN.sourceFile = files[0];

    THIN.main.execute();
  };

  var dropZone = document.getElementById("drop_zone");
  dropZone.addEventListener("dragover", onDragOver, false);
  dropZone.addEventListener("drop", onDrop, false);

})();
