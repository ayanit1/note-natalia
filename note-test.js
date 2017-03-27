function testNoteObjectExists() {
  var note = new Note();

  assert.isTrue(typeof note === "object");

};

function testTakeTextFromNote() {
  var textInput = "Test"
  var note = new Note(textInput)

  if (note.text != textInput){
    throw new Error("Not equal to textInput")
  }
};

testNoteObjectExists();
testTakeTextFromNote();
