node-secure-hash
================

nodejs crypto secure hash collection, just a wrapper of `crypto`.


## Install

    npm install secure-hash


## API

    class SecureHash {
        static md5(data, format='hex');
        static sha1(data, format='hex');
        static sha256(data, format='hex');
    }


## Usage

    SecureHash.sha1('The quick brown fox jumps over the lazy dog')


## References

* https://nodejs.org/api/crypto.html