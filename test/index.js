var assert = require('assert');
var test = require('../client/index')

describe('index', function () {
    describe('#testFunction', function () {
        it('should return true', function () {
            assert.equal(test(), "test");
        });
    });
});