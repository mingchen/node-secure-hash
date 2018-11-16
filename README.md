node-secure-hash
================

nodejs crypto secure hash collection, just a wrapper of `crypto` to make more easy to use.


## Install

    npm install secure-hash


## API

    class SecureHash {
        static md5(data, format='hex');
        static sha1(data, format='hex');
        static sha256(data, format='hex');
        static sha384(data, format='hex');
        static sha512(data, format='hex');
        static ripemd160(data, format='hex');
    }


## Usage

    > const { SecureHash } = require('secure-hash');

    > SecureHash.sha1('The quick brown fox jumps over the lazy dog', 'base64')
    'L9ThxnotKPzthJ7hu3bnORuT6xI='
    > SecureHash.sha1('The quick brown fox jumps over the lazy dog', 'binary')
    '/ÔáÆz-(üíá»vç9\u001bë\u0012'

    > SecureHash.sha256('The quick brown fox jumps over the lazy dog', 'binary')
    '×¨û³\u0007×iÊ¼°\b.OVQäm<Ûv-\u0002Ð¿7Éå'
    > SecureHash.sha256('The quick brown fox jumps over the lazy dog')
    'd7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592'

    > SecureHash.sha384('The quick brown fox jumps over the lazy dog')
    'ca737f1014a48f4c0b6dd43cb177b0afd9e5169367544c494011e3317dbf9a509cb1e5dc1e85a941bbee3d7f2afbc9b1'

    > SecureHash.sha512('The quick brown fox jumps over the lazy dog')
    '07e547d9586f6a73f73fbac0435ed76951218fb7d0c8d788a309d785436bbb642e93a252a954f23912547d1e8a3b5ed6e1bfd7097821233fa0538f3db854fee6'

    > SecureHash.ripemd160('The quick brown fox jumps over the lazy dog')
    '37f332f68db77bd9d7edd4969571ad671cf9dd3b'


## References

* https://nodejs.org/api/crypto.html
