/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
class GraphNode {
  constructor({ value, edges }) {
    this._value = value;
    this._edges = edges;
  }

  get value() {
    return this._value;
  }

  get edges() {
    return this._edges;
  }

  get numberOfEdges() {
    return this._edges.length;
  }

  set edges(x) {
    this._edges = x;
  }

  pushToEdges(y) {
    this._edges.push(y);
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically 
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
  addVertex(value, edges = []) {
    this.vertices.push(new GraphNode(value, edges));
    if (this.vertices.length === 2) {
      this.vertices[0].edges.push(this.vertices[1]);
      this.vertices[1].edges.push(this.vertices[0]);
    }
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) return true;
    }
    return false;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    if (this.vertices.includes.call(arguments, value)) {
      delete this.vertices.value;
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    const arr1 = this.vertices.fromVertex.edges;
    const arr2 = this.vertices.toVertex.edges;
    const check1 = arr1.forEach((item) => {
      if (item.value === toVertex) return true;
      return false;
    });
    const check2 = arr2.forEach((item) => {
      if (item.value === fromVertex) return true;
      return false;
    });
    return check1 === check2;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    if (this.toVertex.edges[fromVertex] === null && this.fromVertex.edges[toVertex] === null) {
      this.toVertex.edges.push(fromVertex);
      this.fromVertex.edges.push(toVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    if (this.fromVertex.edges[toVertex] !== null) {
      delete fromVertex.edges[toVertex];
    }
    if (this.toVertex.edges[fromVertex] !== null) {
      delete toVertex.edges[fromVertex];
    }
    if (this.fromVertex.edges.length === 0) {
      delete this.vertices[fromVertex];
    }
    if (this.toVertex.edges.length === 0) {
      delete this.vertices[toVertex];
    }
  }
}

module.exports = Graph;

