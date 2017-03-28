(function(exports) {

  function listView(notelist) {
      this.notelist = notelist;
      console.log(this.notelist)
  };

  listView.prototype.printHTML = function (){
    console.log(this.notelist)
    if (this.notelist) {
      var li = ''
      this.notelist.forEach(function(note){
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
