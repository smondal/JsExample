var fs = require('fs');

fs.writeFile("readMe.txt", "hellow my world", {  flag: "w"}	, (err) =>{
	if(err) throw err;
	console.log("its saved!")
});
