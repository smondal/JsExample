// Here array reduce function working properly
arr= [1,2,3,4];

sum = arr.reduce((pre, curr) => {
   return pre+curr
});
console.log(sum)


//******************************//
let sum = function(){
	console.log(arguments)
}

sum(5,2,3,4) // output : [object Arguments] {
												//   0: 5,
												//   1: 2,
												//   2: 3,
												//   3: 4
												// }



//****************************************//

//Here reduce function will not work so we need to use RestParameters
let sum = function(){
	arguments.reduce((pre, curr) => {
   return pre+curr
});
}

sum(5,2,3,4)  // argument.reduce will throw error



//******************************************//
//Without rest operator we need to use Array.prototype.reduce

let sum = function(){
   return Array.prototype.reduce.call(arguments, (pre, curr) => {
   return pre+curr
});
}

console.log(sum(5,2,3,4)) //output : 14


// Here is the rest parameters example

let sum = function(...args){
  console.log(args)
  return args.reduce((pre, curr) => pre + curr )
}

console.log(sum(5,2,3,4)) 


//Rest Parameters another example
let multiply = function(mul, ...args){
	console.log(mul)
	console.log("***********")
	console.log(args)
	return args.map((n) => mul * n)
}

console.log(multiply(2,3,4,5))

