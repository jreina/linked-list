/**
 * A node in the linked list data structure.
 * @param {*} data
 * @constructor
 */
function Node(data) {
  this.data = data;
  /** @type {Node} */
  this.next = null;
}
module.exports = Node;
