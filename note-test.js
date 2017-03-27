function testNoteObjectExists() {
  var note = new Note();

  assert.isTrue(typeof note === "object");

};

function testTakeTextFromNote() {
  var textInput = "Test"
  var note = new Note(textInput)

  assert.isTrue(note.text === textInput);
};

testNoteObjectExists();
testTakeTextFromNote();
