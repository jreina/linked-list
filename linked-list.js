const Node = require('./node');

/**
 * A linked list data structure.
 * @constructor
 */
function LinkedList() {
  /**
   * @type {Node}
   * @private
   */
  this.head = null;
  /**
   * @type {Node}
   * @private
   */
  this.tail = null;
  /**
   * @type {number}
   * @private
   */
  this._length = 0;
}

/**
 * Get the length of the list.
 * @returns {number}
 */
LinkedList.prototype.length = function() {
  return this._length;
};

/**
 * Add a value to the list at the specified index.
 * @param {number} index
 * @returns {void}
 */
LinkedList.prototype.add = function(index, value) {
  const newNode = new Node(value);
  if (!this.head) this.head = newNode;

  const existingNode = this._get(index - 1);

  if (existingNode.next && existingNode !== this.head) {
    newNode.next = existingNode;
  }
  existingNode.next = newNode;
  this._length++;
};

/**
 * Returns an array containing the elements of the list.
 * @returns {Array.<*>}
 */
LinkedList.prototype.dump = function() {
  const arr = [];
  if (this.head) {
    let currNode = this.head;
    let index = 0;
    while (index < this._length) {
      arr.push(currNode.data);
      currNode = currNode.next;
      index++;
    }
  }
  return arr;
};

/**
 * Get the node at a given index.
 * @param {number} index
 * @returns {Node}
 * @private
 */
LinkedList.prototype._get = function(index) {
  if (!this.head) {
    return null;
  }
  if (index > this._length)
    throw new Error('Index must be less than the length of the list.');
  let currNode = this.head;
  let currIndex = 0;
  while (currNode.next && currIndex < index) {
    currNode = currNode.next;
    currIndex++;
  }
  return currNode;
};

/**
 * Get the value at the specified index.
 * @param {number} index
 * @returns {Node}
 */
LinkedList.prototype.get = function(index) {
  const node = this._get(index);
  return node ? node.data : null;
};

/**
 * Remove the value from the given index.
 * @param {number} index
 */
LinkedList.prototype.removeAt = function(index) {
  const existingNode = this._get(index - 1);
  const nodeToRemove = this._get(index);
  if (existingNode !== nodeToRemove) {
    existingNode.next = nodeToRemove.next ? nodeToRemove.next : null;
  }
  if (nodeToRemove === this.head) {
    this.head = null;
  }
  this._length--;
};

/**
 * Remove the last value from the list.
 */
LinkedList.prototype.removeLast = function() {
  this.removeAt(this._length - 1);
};

/**
 * Remove the first value from the list.
 */
LinkedList.prototype.removeFirst = function() {
  this.removeAt(0);
};

module.exports = LinkedList;
