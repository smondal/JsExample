var express = require('express');
var app = express();
var cookie = require('cookie');
var cookieParser = require('cookie-parser')


app.use(cookieParser());

// var setCookie = cookie.serialize('sandip', 'mondal', 'k', 'v');
// console.log(setCookie)


var myLogger = function(req, res, next){
  console.log("Logged");
  next();
}

app.use(myLogger)

app.get("/", function(req, res){
  console.log(res)
  console.log('Cookies: ', req.headers.cookie)
  console.log('Cookies: ', req.cookies)
  console.log('Signed Cookies: ', req.signedCookies)
  res.setHeader('Set-Cookie', cookie.serialize('name', 'Mampi', {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7
  }))

  res.setHeader('Location', req.headers.referer || '/');

  console.log(req.headers)

  console.log('After Cookies: ', req.cookies)
  res.end("Hello")
});


app.post('/login', function(req, res, next){
  // res.set('Content-Type', 'application/json')
  //res.end()
  res.send({"sandip": "mondal"})
})

app.listen(3000)



// app.post("/hello", function()){}
