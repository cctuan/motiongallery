var express = require("express");

var app = express();

app.configure('development',function(){
  app.use(express.static(__dirname+'/public'));
});


app.all('/',function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Header","X-Requested-With");
  next();
});

app.get('/',function(req,res,next){
  res.send('index.html'); 
});

app.listen(8088);
