var express = require('express');
var app = express();
app.listen(3000)

app.get("/", function(req, res){
  res.format({
    'text/plain' : function(){
      console.log("Text")
      res.send("hey")
    },
    'text/html' : function(){
      console.log("HTML")
      res.send('<p>Hey</p>')
    },

    'application/json' : function(){
      res.send({ message: 'hey' })
    },
    default: function(){
      res.status(406).send('Not acceptable');
    }

  })
})
