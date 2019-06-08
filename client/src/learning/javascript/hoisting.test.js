describe("Hoisting", () => {
  it("hoists declerations to the top", () => {
    expect(a).toBeUndefined();
    var a = 5; // var a; decleration is hoisted to top and thus is undefined.
    // initialization of the variable happens where initialized.
  });

  it("let is not hoisted", () => {
    // there is debate on if it's actually hoisted or not.
    //expect(a).toBeUndefined(); // this would throw a ReferenceError
    let a = 5;
    expect(a).toBe(5);
  });

  it("const is not hoisted", () => {
    // there is debate on if it's actually hoisted or not.
    //expect(a).toBeUndefined(); // this would throw a ReferenceError
    const a = 5;
    expect(a).toBe(5);
  });

  it("function declerations are hoisted", () => {
    expect(myFunction()).toBe("hello");
    // we call the function before it's defined
    // but it is actually hoisted to the top so it still works
    function myFunction() {
      return "hello";
    }
  });

  it("function expressions are not hoisted", () => {
    expect(myFunction).toBeUndefined();

    var myFunction = function() {
      return "hello";
    };
  });
});
