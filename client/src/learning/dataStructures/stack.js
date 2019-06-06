// Stack
// LIFO
// i.e. pancakes, back button on URL, call stack.

let Stack = function() {
  this.items = [];
  this.count = 0;
};

Stack.prototype.push = function(item) {
  this.items[this.count] = item;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count === 0) return;

  this.count--;
  let itemDeleted = this.items[this.count];
  delete this.items[this.count];
  return itemDeleted;
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.peek = function() {
  return this.items[this.count - 1];
};

Stack.prototype.isEmpty = function() {
  return this.count === 0;
};

Stack.prototype.printStack = function() {
  let stackString = "";
  for (let i = 0; i < this.count; i++) {
    stackString += this.items[i] + " ";
  }
  return stackString;
};

let myNewStack = new Stack();
