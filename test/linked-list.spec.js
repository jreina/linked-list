const { expect } = require('chai');
const LinkedList = require('../linked-list');

describe('LinkedList', function() {
  const list = new LinkedList();

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

  it('Should work with other fun stuff like objects', function() {
    const expected = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 4 },
      { x: 3, y: 9 }
    ];
    expected.forEach((val, index) => {
      expect(() => list.add(index, val)).to.not.throw();
    });

    const actual = list.dump();
    expect(actual).to.deep.equal(expected);
  });
});
