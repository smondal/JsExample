function download(url, downloaded){
  console.log(`downloading from ${url}`)
  setTimeout(() => {
    let saveFile = url.split('/').pop();
    console.log(`downloaded and saved ${saveFile}`)
    downloaded(saveFile)
  }, 2000)

}

function compress(file, format, compressed){
  setTimeout(() => {
    let archive = file.split('.')[0] + '.' + format;
    console.log(`Compress ${archive}`)
    compressed(archive)
  }, 2000)

}

function upload(server, file, uploaded){
  setTimeout(() => {
    let remotepath = `${server}/${file}`
    console.log(`Compress ${remotepath}`)
    uploaded(remotepath)
  }, 2000)
}

console.log("start");
setTimeout(function(){
  console.log("done")
}, 2000)


download("http://someurl.com/path/image.jpg", (file) => {
  console.log("file name", file)
})
