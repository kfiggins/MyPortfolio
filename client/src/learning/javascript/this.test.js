// this
// 1. new keyword - binds to newly created object
// 2. explicit binding - using call, apply and bind
// 3. inplicit binding - when function is a property on an object and is invoked from object
// 4. default binding - binds to global scope
// NOTE: 😎this😎 is bound by where a function is called not where it is located!

// I found out that strict mode is turned on by default which instead of
// binding this to the global scope it returns undefined.
// describe("default binding", () => {
//   it("binds to global", () => {
//     var myDefaultMessage = "default boring message";
//     function defaultFunction() {
//       return this.myDefaultMessage;
//     }
//     var message = defaultFunction();
//     expect(message === "default boring message");
//   });
// });

describe("explicit binding", () => {
  // apply works the same way but you pass in an array of arguments instead
  it("call binds objects this to add function", () => {
    let obj1 = {
      a: 25
    };
    function add(b) {
      return this.a + b;
    }
    // can add comma separated arguments
    let result = add.call(obj1, 20);
    expect(result).toBe(45);
  });
});

describe("implicit binding", () => {
  it("Calling a function as a property on an object", () => {
    let obj1 = {
      a: 1,
      myFunc: function() {
        return this.a;
      }
    };
    let result = obj1.myFunc();
    expect(result).toBe(1);
  });
});

describe("new keyword binding", () => {
  it("Using new keyword to show that this is bound to new object", () => {
    function Car(color, body) {
      this.color = color;
      this.body = body;
      this.speedLimit = 120;
    }

    let myCar = new Car("yellow", "truck");
    expect(myCar.speedLimit).toBe(120);
  });
});
