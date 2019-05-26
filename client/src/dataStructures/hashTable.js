// Hash Table
// Using ES6 Class's for this example.
// A good hash function should spread out the values uniformly across range of keys
// and be very fast.
// Hash Tables are generally O(1) with the worst case scenario being O(n).
// Worst case scenario usually comes from picking a bad hash function.

// https://medium.freecodecamp.org/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997
let hash = require("string-hash");

class DumbMap {
  constructor() {
    this.list = [];
  }

  get(x) {
    let index = hash(x);

    if (!this.list[index]) return undefined;

    let result;

    // Handle collisions by storing multiple pairs at the same index.
    this.list[index].forEach(pairs => {
      if (pairs[0] === x) {
        result = pairs[1];
      }
    });
    return result;
  }

  set(x, y) {
    let i = hash(x);

    if (!this.list[i]) {
      this.list[i] = [];
    }
    this.list[i].push([x, y]);
  }
}
let m = new DumbMap();
m.set("x", 1);
m.set("y", 2);

console.time("with very few records in the map");
m.get("I_DONT_EXIST");
console.timeEnd("with very few records in the map");

m = new DumbMap();

for (x = 0; x < 1000000; x++) {
  m.set(`element${x}`, x);
}

console.time("with lots of records in the map");
m.get("element0");
console.timeEnd("with lots of records in the map");
