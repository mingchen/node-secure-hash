const crypto = require('crypto');

class SecureHash {
    static md5(data, format='hex') {
        return crypto.createHash('md5').update(data).digest(format);
    }

    static sha1(data, format='hex') {
        return crypto.createHash('sha1').update(data).digest(format);
    }

    static sha256(data, format='hex') {
        return crypto.createHash('sha256').update(data).digest(format);
    }
}

module.exports = { SecureHash };
