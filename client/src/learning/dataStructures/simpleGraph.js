// Graph - Simple Implementation
// Non-directional
// Using Adjaceny List to implement
// https://www.geeksforgeeks.org/implementation-graph-javascript/
let Queue = require("./queue");

class Graph {
  constructor(noOfVertices) {
    // this is only used twice and it didn't make any sense
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  // add vertex to adjList and initialize it's values with an array.
  addVertex(v) {
    // initialize the adjacent list with a null array
    this.adjList.set(v, []);
  }

  // add edge between src and dest
  addEdge(v, w) {
    // get list for vertex v and put
    // the vertex w denoting edge between v and w
    this.adjList.get(v).push(w);

    // Graph is undirected, add edge from w to v also
    this.adjList.get(w).push(v);
  }

  // Prints vertices and it's adjacency list
  printGraph() {
    // get all vertices
    let keys = this.adjList.keys();

    for (let key of keys) {
      let values = this.adjList.get(key);
      let valueString = "";

      for (let value of values) valueString += value + " ";

      console.log(key + " -> " + valueString);
    }
  }

  // Breadth First Search
  bfs(startingNode) {
    // created a visted array
    let visited = [];
    // Not sure why they did this.
    // for (var i = 0; i < this.noOfVertices; i++) visited[i] = false;

    // import Queue from data structures.
    let queue = new Queue();

    // add starting node to queue
    visited[startingNode] = true;
    queue.enqueue(startingNode);

    // loop until queue is element
    while (!queue.isEmpty()) {
      // get element from queue
      let queueElement = queue.dequeue();

      // pass current vertex to callback function
      console.log(queueElement);

      // get adjacent list for current vertex
      let adjacentList = this.adjList.get(queueElement);

      // loop through list and add element to queue if not
      // processed yet
      for (let i in adjacentList) {
        let element = adjacentList[i];

        if (!visited[element]) {
          visited[element] = true;
          queue.enqueue(element);
        }
      }
    }
  }
  // Depth First Search
  dfs(startingNode) {
    let visited = [];
    // Not sure why they did this.
    // for (let i = 0; i < this.noOfVertices; i++) visited[i] = false;

    this.dfsRecursive(startingNode, visited);
  }

  dfsRecursive(node, visited) {
    visited[node] = true;
    console.log(node);

    let neighbors = this.adjList.get(node);

    for (let i in neighbors) {
      let element = neighbors[i];
      if (!visited[element]) {
        this.dfsRecursive(element, visited);
      }
    }
  }
}

// Test it out!
var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

g.printGraph();

console.log("BFS");
g.bfs("A");

console.log("DFS");
g.dfs("A");
