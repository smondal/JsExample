//require("babel-register");
//import React from 'react'

var lib = require('./lib');
console.log(lib.square(11))
console.log(lib.diag(110,10))

//anonymous funcion
var ano = require('./anonymous_fun')
ano(5);


//name function

var name = require('./name_fun');
name.fiz();
