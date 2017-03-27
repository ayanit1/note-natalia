function testNoteObjectExists() {
  var note = new Note();

  if (typeof note != "object"){
    throw new Error("Not an object")
  }
};

testNoteObjectExists();
