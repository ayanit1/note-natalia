function testNoteObjectExists() {
  var note = new Note();

  assert.isTrue(typeof note === "object");
};

function testStoreTextFromNote() {
  var textInput = "Test"
  var note = new Note(textInput)

  assert.isTrue(note.text === textInput);
};

function testPrintText(){
  var textInput = "Test"
  var note = new Note(textInput)

  assert.isTrue(note.printText() === "Test")
};

function testStoreArrayOfNoteModels(){
  var notelist = new List();

  assert.isTrue(notelist.arrayOfNotes.length === 0)
};

testNoteObjectExists();
testStoreTextFromNote();
testPrintText();
testStoreArrayOfNoteModels();
