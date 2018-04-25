const Node = require('./node');
function LinkedList() {
  this.head = null;
  this.tail = null;
  this.pointer = null;
}

LinkedList.prototype.rew = function() {};
LinkedList.prototype.adv = function() {};
LinkedList.prototype.getup = function() {
  return this.pointer;
};
LinkedList.prototype.reset = function() {};
LinkedList.prototype.add = function(index) {
  return function(value) {};
};
LinkedList.prototype.dump = function() {};
LinkedList.prototype.rem = function() {};
LinkedList.prototype.reml = function() {};
LinkedList.prototype.remf = function() {};

module.exports = LinkedList;
