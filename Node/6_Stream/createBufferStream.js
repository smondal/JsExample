var fs = require('fs');

var readStream = fs.createReadStream("readme.txt", "utf8");
var writeStream = fs.createWriteStream("writeme.txt", "utf8");

readStream.on('open', function(file){
	console.log("***********")
	console.log(file)
})

readStream.on('data', function(chunk){
	console.log("**************")
	console.log(chunk)
	writeStream.write(chunk);
})
