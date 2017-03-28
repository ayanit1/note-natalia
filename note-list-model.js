(function(exports) {

  function List(){
    this.arrayOfNotes = []
  };

  List.prototype.createANote = function(string) {
    this.arrayOfNotes.push(new Note(string))
  };

  List.prototype.printAllNotes = function () {
    var toPrint = "";
    this.arrayOfNotes.forEach(function(note){
      toPrint += note.text + ","
    })
    return toPrint;
  };

  exports.List = List;
})(this)
