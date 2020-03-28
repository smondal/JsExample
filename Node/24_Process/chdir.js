//First changing the directory then listing file inside directory

let child_process = require('child_process');
console.log("current working directory is", process.cwd())

try{
  process.chdir("node")
  console.log("current working directory is", process.cwd())
  child_process.exec('ls -l', (err, stdout, stderr) => {
    if(err){
      console.log(err)
    }
    console.log(stdout)
  })

}catch(err){
  console.log(`chdir ${err}`)
}
