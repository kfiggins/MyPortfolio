// Queue
// FIFO
// You add to the end and take from the front
// i.e. answering people on hold, waiting in a line

let Queue = function() {
  this.items = [];
  this.count = 0;
};

// Enqueue
Queue.prototype.enqueue = function(item) {
  this.items[this.count] = item;
  this.count++;
};

// Dequeue
Queue.prototype.dequeue = function() {
  if (this.count === 0) return;

  let result = this.items[0];
  this.items.splice(0, 1);
  this.count--;
  return result;
};

Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

module.exports = Queue;
