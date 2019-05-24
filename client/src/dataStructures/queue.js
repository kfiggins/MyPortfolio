let Queue = function() {
  this.items = [];
  this.count = 0;
};

// Enqueue
Queue.prototype.push = function(item) {
  this.items[this.count] = item;
  this.count++;
};

// Dequeue
Queue.prototype.shift = function() {
  if (this.count === 0) return;

  let result = this.items[0];
  this.items.splice(0, 1);
  this.count--;
  return result;
};

let newQueue = new Queue();
