/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    // push to children property array
      // new Tree(value) to create node
    const newNode = new Tree(value);
    this.children.push(newNode);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    // if given value is in tree return true
    if (this.value === value) return true;
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (child.value === value) return true;
      if (child.children[0] && child.contains(value)) return true;
    }
    return false;
  }
}

module.exports = Tree;

