function testReturnsHTML() {
  var notelist = new notelist;
  notelist.createANote("Hello Albert")
  notelist.createANote("Hello Natalia")
  var listView = new listView(notelist.arrayOfNotes)
  assert.isTrue(listView.printHTML() === "<ul><li>Hello Albert</li><li>Hello Natalia</li></ul>")
}

testReturnsHTML();
