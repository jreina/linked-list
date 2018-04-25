const { expect } = require('chai');
const linkedlist = require('../linked-list');

describe('linkedlist', function() {
  const list = new linkedlist();
  it('Should handle interaction ig', function() {
    expect(() => list.rew()).to.not.throw();
    expect(() => list.rew()).to.not.throw();
    expect(() => list.adv()).to.not.throw();
    expect(() => list.adv()).to.not.throw();
    expect(list.getup()).to.be.null;
    expect(() => list.reset()).to.not.throw();
    expect(() => list.add(0)(0)).to.not.throw();
    expect(() => list.add(1)(1)).to.not.throw();
    expect(() => list.add(2)(2)).to.not.throw();
    expect(list.dump()).to.deep.equal([0, 1, 2]);
    expect(list.adv()).to.equal();
    expect(list.getup()).to.equal(0);
    expect(list.rem(1)).to.not.throw();
    expect(list.getup()).to.equal(0);
    expect(() => list.reml()).to.not.throw();
    expect(list.getup()).to.equal(0);
    expect(() => list.remf()).to.not.throw();
    expect(list.getup()).to.equal(null);
  });
});
