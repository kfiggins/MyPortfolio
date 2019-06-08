describe("scope in javascript", () => {
  it("functions create scope", () => {
    function myFunction() {
      var hello = "hello";
      expect(hello === "hello").toBe(true);
    }
    // Can't access variable hello outside of function
  });

  it("block statements sometimes do", () => {
    if (true) {
      var variable1 = 1;
      let variable2 = 2;
      expect(variable1).toBe(1);
      expect(variable2).toBe(2);
    }

    expect(variable1).toBe(1);
    // variable2 throws a not referenced error because let does keep scope to block
  });
});
