// HTTP Modul einbinden
var http = require("http");

// URL Modul einbinden
var url = require("url");

// HTTP Server erzeugen
var server = http.createServer(serve);

// Server an Port binden
server.listen(3000);

// Funktion des HTTP-Servers
// req: Anfrage vom Client (Request)
// res: Antwort des Servers (Response)
function serve(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  var meinquery = url.parse(req.url, true).query;

  let order = meinquery.order;
  let location = meinquery.location;
  if (order) {
    if (order === "drink") res.write("Milk");
    else
    if (order === "food") res.write("fish and chips");
    else res.write('Error 404 !!!');
  } else if(location){
      if(location ==='river') res.write("Ruhr");
      else
      if(location==='city') res.write("Kamp-Lintfort");
      else res.write('Error 404 !!!');
      
  } else{
      res.write('Error 404 !!!');
  }

  res.end();
}
