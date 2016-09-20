// getting error on class example
const chai = require('chai';)

//can use should/assert/expect.  It is personal choice.
const should =chai.should();
const expect =chai.expect;
const assert =chai.assert;


describe('Canary test', () => {
  it('the string hello should be hello', () => {
    const hello = 'hello';

    hello.should.be.equal('hello');
  });

it('typeof string should be string' () => {
  const str = 'qwfp';

  str.should.be.a('string');
  expect(str).to.be.a.('string');
  assert.typeOf(str, 'string');
  })
});
