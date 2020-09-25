var http = require('http');
var url = require('url');
const fs = require('fs');

let filename = "";
//create a server object;
http.createServer((req, res) => {
 //res.writeHead(200, { 'Content-type': 'text/html' });
  //res.write("<h1>hello world!</h1> ");
  //res.write('Reading query String: '+ req.url);
  //res.write("<br/>");
  //res.write(req.headers.host);

  //var purl = url.parse(req.url, true);
  //var str = JSON.stringify(purl);
  //res.end();
 // res.write(req.headers.port);
 // res.write(req.headers.pathname);
 // res.write(req.headers.origin);
  //query String
  /*
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end("Proccess query string: " + txt);
  */
  let str = "views";
  let filename = "";
  if(req.url === "/" || req.url ==="/index"){
    str+= "/index.html";
  }
  else if(req.url.match(/\/.*\.html/)){
    str+= req.url
  }
  else{
    str+= req.url + '.html';
  }
  //fs example
  
  console.log(str);
  fs.readFile(str, function(err,data){
    if(err){
      fs.readFile("404.html", (err, data)=>{
        if(err) return err;
        res.writeHead(404, {'Content-type': 'text/html'});
        
        return res.end(data);
      });
      return err;
    }
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data);
    return res.end();
  });
  
}).listen(8080, function(){
  console.log("server started at");
})
