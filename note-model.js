(function(exports) {

  function Note(textInput){
    this.text = textInput;
  };

  Note.prototype.printText = function () {
    return this.text;
  };

  exports.Note = Note;
})(this);
