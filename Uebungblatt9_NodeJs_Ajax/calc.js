// HTTP Modul einbinden
var http = require("http");

// URL Modul einbinden
var url = require("url");
const { parse } = require("path");

// HTTP Server erzeugen
var server = http.createServer(serve);

// Server an Port binden
server.listen(3000);

// Funktion des HTTP-Servers
// req: Anfrage vom Client (Request)
// res: Antwort des Servers (Response)
function serve(req, res) {
  res.writeHead(200, { "Content-Type": "text/html", 'Access-Control-Allow-Origin': '*'});
  var meinparams = url.parse(req.url, true).path.split("/");
  let operation = meinparams[1];
  let operand1 = meinparams[2];
  let operand2 = meinparams[3];

  if (operation && operand1 && operand2) {
    let op1 = parseFloat(operand1);
    let op2 = parseFloat(operand2);

    switch (operation) {
      case "add":
        res.write((op1 + op2).toString());
        break;
      case "mul":
        res.write((op1 * op2).toString());
        break;
      case "sub":
        res.write((op1 - op2).toString());
        break;
      case "div": {
        if (op2 === 0) res.write("Achtung: Du darfst nicht durch 0 teilen !!!");
        else res.write((op1 / op2).toString());
        break;
      }
      default:
        res.write("Achtung: Error 404 !!!");
    }
  }

  res.end();
}
