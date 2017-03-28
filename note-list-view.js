(function(exports) {

  function listView(notelist) {
      this.notelist = notelist;
  };

  listView.prototype.printHTML = function (){
    var li = ''
    this.notelist.forEach(function(note){
      li += "<li>" + note.text + "</li>"
    });
    return "<ul>" + li + "</ul>"
  };

  exports.listView = listView;

})(this)
