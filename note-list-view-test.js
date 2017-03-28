function testReturnsHTML() {
  var notelist = new List();
  notelist.createANote("Hello Albert")
  notelist.createANote("Hello Natalia")
  var listview = new listView(notelist.arrayOfNotes)
  assert.isTrue(listview.printHTML() === "<ul><li>Hello Albert</li><li>Hello Natalia</li></ul>");
};

function testHandlesNoNotes(){
  var notelist = new List();
  var listview = new listView(notelist.arrayOfNotes)
  assert.isTrue(listview.printHTML() === "<ul><li>No printed notes</li></ul>")
}

testReturnsHTML();
testHandlesNoNotes();
