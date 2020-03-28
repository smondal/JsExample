console.log("start");

process.nextTick(() =>{
  console.log("next Tick callback")
})

console.log("hello")

//***output would be***//

//start
//hello
//next Tick callback
