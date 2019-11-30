//Crypto mondule provide cryptographic functionn that includes a set of wrappers for OpenSSL hash, HMAC, cipher, decipher, sign, verify /

const crypto = require('crypto');

const secret = "san"
const hash = crypto.createHmac('sha256', secret)
                .update("I love india")
                .digest('hex')

console.log(hash)
