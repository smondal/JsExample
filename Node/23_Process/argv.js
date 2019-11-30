//this method will take the argument from command lind and display the result
// node argv.js dd sandip=mondal 
process.argv.forEach((value, index) => {
  console.log(`${index} ${value}`)
})
