// Binary Tree
// Each node can have up to two children
// The left child node is less than the node
// The right child node is more than the node
// Time Complexity
// Access O(log(n)) Search O(log(n)) Insertion O(log(n)) Deletion O(log(n))
// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert
  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  // Goes through tree to find a place to add new node
  insertNode(node, newNode) {
    // Less move left on tree
    if (newNode.data < node.data) {
      // If left is null insert here
      if (node.left === null) node.left = newNode;
      // else keep going
      else this.insertNode(node.left, newNode);
    }
    // Move right if more
    else {
      // If right is null insert here
      if (node.right === null) node.right = newNode;
      // else keep going
      else this.insertNode(node.right, newNode);
    }
  }

  // Remove
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  // Go through tree and find node to remove
  removeNode(node, key) {
    // Tree is empty
    if (node === null) return null;
    // If less move left
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    // If more move right
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // if data is similar to root then delete node
    else {
      // Deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // Deleting node with one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // Min node of right subtree stored in aux
      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  // Inorder - Tree Traversal
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // Preorder - Tree Traversal
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Postorder - Tree Traversal
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  // FindMinNode - Helper
  findMinNode(node) {
    // We go left because that is where lesser values are
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  // GetRootNode - Helper
  getRootNode(node) {
    return this.root;
  }

  // Search - Helper
  search(node, data) {
    // Tree is empty
    if (node === null) return null;
    // Go left if less
    else if (data < node.data) return this.search(node.left, data);
    // Go right if more
    else if (data > node.data) return this.search(node.right, data);
    // If data is equal return node
    else return node;
  }
}

// Example on implementing comes from link at top.
// let BST = new BinarySearchTree();

// BST.insert(15);
// BST.insert(25);
// BST.insert(10);
// BST.insert(7);
// BST.insert(22);
// BST.insert(17);
// BST.insert(13);
// BST.insert(5);
// BST.insert(9);
// BST.insert(27);

// let root = BST.getRootNode();
// console.log("Break")
// BST.remove(5);

// BST.remove(7);
// BST.remove(15);

// console.log("inorder traversal");

// // prints 9 10 13 17 22 25 27
// BST.inorder(root);

// console.log("postorder traversal");
// BST.postorder(root);
// console.log("preorder traversal");
// BST.preorder(root);
