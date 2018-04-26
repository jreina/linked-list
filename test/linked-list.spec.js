const { expect } = require('chai');
const linkedlist = require('../linked-list');

describe('linkedlist', function() {
  const list = new linkedlist();

  it('Should add nodes to the list', function() {
    expect(() => list.add(0, 0)).to.not.throw();
    expect(() => list.add(1, 1)).to.not.throw();
    expect(() => list.add(2, 2)).to.not.throw();
    expect(list.dump()).to.deep.equal([0, 1, 2]);
  });

  it('Should get nodes from the list', function() {
    expect(list.get(0)).to.equal(0);
    expect(list.get(1)).to.equal(1);
    expect(list.get(2)).to.equal(2);
  });

  it('Should remove nodes', function() {
    expect(() => list.removeAt(1)).to.not.throw();
    expect(list.get(0)).to.equal(0);
    expect(list.dump()).to.deep.equal([0, 2]);
    expect(() => list.removeLast()).to.not.throw();
    expect(list.get(0)).to.equal(0);
    expect(list.dump()).to.deep.equal([0]);
    expect(() => list.removeFirst()).to.not.throw();
    expect(list.get(0)).to.equal(null);
    expect(list.dump()).to.deep.equal([]);
  });
});
