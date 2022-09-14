var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
   
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
    var url = req.url;
      
    if(url ==='/welcome') {
      
        res.write(' Welcome to Dominos!'); 
        res.end(); 
    }

   else if(url ==='/contact') {
    res.writeHead(200,{'Content-Type': 'application/json'})
        res.write("{   phone: '18602100000',   email: 'guestcaredominos@jublfood.com' }"
        ); 
        res.end(); 
    }
    else {
      res.writeHead(404,{'Content-Type': 'text/plain'})
      res.write('status 404'); 
      res.end(); 
  }
}

httpServer.listen(8081,()=>console.log("server is running at 8081"));
module.exports = httpServer;