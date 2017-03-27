var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: returned " + assertionToCheck);
    }
    else {
      console.log("Your tests passed!");
    }
  }
};
