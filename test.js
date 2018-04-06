const should = require('chai').should();
const SecureHash = require('./index').SecureHash;

/**
 * Hash test vectors: http://www.febooti.com/products/filetweak/members/hash-and-crc/test-vectors/
 */
describe('SecureHash Tests', () => {
    it('md5', function (done) {
        SecureHash.md5('The quick brown fox jumps over the lazy dog').should.eq('9e107d9d372bb6826bd81d3542a419d6');
        done();
    });

    it('sha1', function (done) {
        SecureHash.sha1('The quick brown fox jumps over the lazy dog').should.eq('2fd4e1c67a2d28fced849ee1bb76e7391b93eb12');
        done();
    });

    it('sha256', function (done) {
        SecureHash.sha256('The quick brown fox jumps over the lazy dog').should.eq('d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592');
        done();
    });

});
