var crypto = require('crypto');
var fs = require('fs');
var secret = "sandip"

const hmac = crypto.createHmac('sha256', secret);

const input = fs.createReadStream("test.js");

input.pipe(hmac).pipe(process.stdout)
