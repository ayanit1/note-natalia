function testStoreArrayOfNoteModels(){
  var notelist = new List();

  assert.isTrue(notelist.arrayOfNotes.length === 0)
};

function testCreatesAndSavesANote(){
  var notelist = new List();
  notelist.createANote("Testing!")

  assert.isTrue(notelist.arrayOfNotes[0].text === "Testing!")
};

function testPrintAllNotes(){
  var notelist = new List();
  notelist.createANote("Testing!")
  notelist.createANote("More Testing!")

  assert.isTrue(notelist.arrayOfNotes.length === 2)
  assert.isTrue(notelist.printAllNotes() === "Testing!,More Testing!,")
};

testStoreArrayOfNoteModels();
testCreatesAndSavesANote();
testPrintAllNotes();
