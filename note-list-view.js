(function(exports) {

  function listView(listToPrint) {
      this.listToPrint = listToPrint;
  };

  listView.prototype.printHTML = function (){
    if (this.listToPrint.length !== 0) {
      var li = ''
      this.listToPrint.forEach(function(note){
        li += "<li>" + note.text + "</li>"
      });
      return "<ul>" + li + "</ul>"
    }
    else {
      return "<ul><li>No printed notes</li></ul>"
    }
  };

  exports.listView = listView;

})(this)
