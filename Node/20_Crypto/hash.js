
const crypto = require('crypto');

const secret = "sandip"
const hash = crypto.createHash('sha256')
                .update("I love india")
                .digest('hex')

console.log(hash)
