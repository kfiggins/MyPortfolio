// Linked List
// Dynamic Size
// Efficient at Insertions and Deletions
// No waste of memory compared to array.
// Sequential access is slow compared to array.
// i.e. music playlist

let Node = function(element) {
  this.element = element;
  this.next = null;
};

let LinkedList = function() {
  this.head = null;
  this.size = 0;
};

LinkedList.prototype.getSize = function() {
  return this.size;
};

LinkedList.prototype.printList = function() {
  var currentNode = this.head;
  var str = "";
  while (currentNode) {
    str += currentNode.element + " ";
    currentNode = currentNode.next;
  }
  console.log(str);
};

LinkedList.prototype.add = function(element) {
  let node = new Node(element);

  let currentNode;

  if (this.head === null) {
    this.head = node;
  } else {
    currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
  this.size++;
};

LinkedList.prototype.addAtIndex = function(index, element) {
  if (index > 0 && index > this.size) return false;

  let node = new Node(element);

  let currentNode, prevNode;

  currentNode = this.head;

  if (index === 0) {
    node.next = this.head;
    this.head = node;
  } else {
    currentNode = this.head;
    let it = 0;

    while (it < index) {
      it++;
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    node.next = currentNode;
    prevNode.next = node;
  }
  this.size++;
};

LinkedList.prototype.removeAtIndex = function(index) {
  if (index > 0 && index > this.size) {
    return -1;
  } else {
    let currentNode,
      previousNode,
      it = 0;
    currentNode = this.head;
    previousNode = currentNode;

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (it < index) {
        it++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // Remove element by setting the previous next to the
      // current next. Skips over current node.
      previousNode.next = currentNode.next;
    }
    this.size--;

    return currentNode.element;
  }
};

LinkedList.prototype.remove = function(element) {
  let currentNode = this.head;
  let previousNode = null;

  while (currentNode !== null) {
    if (currentNode.element === element) {
      if (previousNode === null) {
        // Replace the head
        this.head = currentNode.next;
      } else {
        // Delete the in-between node
        previousNode.next = currentNode.next;
      }
      this.size--;
      return currentNode.element;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  return -1;
};
