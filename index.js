const crypto = require('crypto');

/**
 * Secure hash algorithm collections.
 *
 *
    > SecureHash.sha1('The quick brown fox jumps over the lazy dog')
    '2fd4e1c67a2d28fced849ee1bb76e7391b93eb12'
    >
    > SecureHash.sha1('The quick brown fox jumps over the lazy dog', 'base64')
    'L9ThxnotKPzthJ7hu3bnORuT6xI='
    >
    > SecureHash.sha1('The quick brown fox jumps over the lazy dog', 'binary')
    '/ÔáÆz-(üíá»vç9\u001bë\u0012'
    >
 *
 * @class SecureHash
 */
class SecureHash {
    /**
     * Calculate md5 hash.
     *
     * @static
     * @param {any} data data to be calculated hash.
     * @param {string} [format='hex'] output format. should be one of `hex`, `base64` or `binary`.
     * @returns hash with encoded `format`
     *
     * @memberOf SecureHash
     */
    static md5(data, format='hex') {
        return crypto.createHash('md5').update(data).digest(format);
    }

    static sha1(data, format='hex') {
        return crypto.createHash('sha1').update(data).digest(format);
    }

    static sha256(data, format='hex') {
        return crypto.createHash('sha256').update(data).digest(format);
    }

    static sha384(data, format='hex') {
        return crypto.createHash('sha384').update(data).digest(format);
    }

    static sha512(data, format='hex') {
        return crypto.createHash('sha512').update(data).digest(format);
    }

    static ripemd160(data, format='hex') {
        return crypto.createHash('ripemd160').update(data).digest(format);
    }
}

module.exports = { SecureHash };
