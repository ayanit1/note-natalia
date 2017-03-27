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

testNoteObjectExists();
testStoreTextFromNote();
testPrintText();
