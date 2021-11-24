const fs  = require('fs');
var http = require('http');
var url=require('url');
var path=require('path');
var appCustom=require('./app'); // module declared in app.js and fetched it here to consume it's modules.

console.log('server starting ...............');

appCustom.printname();

const server = http.createServer((req, res) => {
    if(req.url==='/'){
      fs.readFile( path.join(__dirname,'index.html'),(err,data)=>{
        if(err) throw err;
        
        var q=url.parse(req.url,true).query;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      
      })      
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        var q=url.parse(req.url).query;
        res.end('<p>Hello World!</p> <p>Request URL:  '+url.parse(req.url,true).pathname+'</p>  <p>Query: '+JSON.stringify(q)+'</p>');
    }
    
  });



server.listen(3000,()=>console.log('Server is up and running'));

