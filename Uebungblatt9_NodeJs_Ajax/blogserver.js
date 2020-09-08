// HTTP Modul einbinden
var http = require("http");

// URL Modul einbinden
var url = require("url");
const { parse } = require("path");
const { write } = require("fs");

// HTTP Server erzeugen
var server = http.createServer(serve);

// Server an Port binden
server.listen(3000);

// Funktion des HTTP-Servers
// req: Anfrage vom Client (Request)
// res: Antwort des Servers (Response)
function serve(req, res) {
  res.writeHead(200, { "Content-Type": "text/html", 'Access-Control-Allow-Origin': '*' });
  let meinUrl = url.parse(req.url, true);
  let pathParts = meinUrl.pathname.split('/');

  let query = meinUrl.query;
  if (query.tag && query.suchwort)
    arts = getArticlesByTagUndQuery(query.tag, query.suchwort);
  else
    if (query.tag)
      arts = getArticlesByTag(query.tag, articles);
    else
      if (query.suchwort)
        arts = getArticlesBySuchwort(query.suchwort, articles);

          else if (pathParts[2]) {
            let id = pathParts[2];
              arts = articles.find(m => m.id === id);
          }
      else
        if (pathParts[1] === 'articles')
          arts = articles;
    if(arts)    
  res.write(JSON.stringify(arts));
  else{
    res.write("Error");
  }
  res.end();
}


function getArticlesByTag(testTag, artikels) {
  var arts = [];
  for (let article of artikels) {
    for (let tag of article.tags)
      if (tag === testTag)
        arts.push(article);
  }
  return arts;
}

function getArticlesBySuchwort(suchwort, artikels) {
  let arts = [];
  if (suchwort) {
    suchwort = suchwort.toLowerCase();
    for (let article of artikels) {
      for (let [key, value] of Object.entries(article)) {
        if (key === "tags") {
          for (let tag of value) {
            if (tag.toLowerCase() === suchwort && !arts.includes(article))
              arts.push(article);
          }
        }
        if (key === "ueberschrift" || key === "autor" || key === "anriss" || key === "text") {
          value = value.toLowerCase();
          if (value.search(suchwort) !== -1 && !arts.includes(article))
            arts.push(article);
        }
      }
    }
    return arts;
  }
}

function getArticlesByTagUndQuery(tag, suchwort) {
  let artsFromTags = getArticlesByTag(tag, articles);
  let artsFromTagUndSuchwort = getArticlesBySuchwort(suchwort, artsFromTags);

  return artsFromTagUndSuchwort;
}
const articles = [
  {
    id: '1',
    ueberschrift: 'HTML Dokumente',
    autor: 'Vladimir Antonyan',
    datum: new Date('15. February 2015 20:14').toISOString().substring(0, 10),
    anriss: 'Eine kurze Einführung in HTML-Dokumente',
    text: 'HTML Dokumente dienen der Strukturierung von Inhalten, die im Web bzw. mit Webtechnologien wie Internetbrowser und Hypertext Transfer Protocol (HTTP) verbreitet werden sollen. HTML Dokumente bestehen aus HTML-Elementen. Das einfachste HTML5 Dokument ist: <br>'
      + '<pre>'
      + '&lt;!DOCTYPE html&gt;\n'
      + '&lt;html&gt;\n'
      + '  &lt;head&gt;\n'
      + '    &lt;title&gt;Titel des Dokuments&lt;/title&gt;\n'
      + '  &lt;/head&gt;\n'
      + '  &lt;body&gt;\n'
      + '  &lt;/body&gt;\n'
      + '&lt;/html&gt;\n'
      + '</pre>',
    bild: 'https://cdn.pixabay.com/photo/2020/05/02/09/59/pup-5120625_960_720.jpg',
    tags: ['HTML5', 'Dokument', 'HTTP']
  },
  {
    id: '2',
    ueberschrift: 'HTML Elemente',
    autor: 'Vladimir Antonyan',
    datum: new Date('15. February 2015 20:14').toISOString().substring(0, 10),
    anriss: 'Eine kurze Einführung in HTML Elemente',
    text: 'Die HTML Elemente eines HTML Dokuments sind ineinander geschachtelt und bilden damit eine hierarchische Struktur, einen Baum. Ein Element besteht üblicherweise aus einem öffnenden und einem schließenden Tag. Zwischen den beiden Tags befindet sich der eigentliche Inhalt des Elements.<br> Weiterhin können im öffnenden Tag Attribute in Form von Schlüssel-Wert Paaren notiert werden.<br><br>Beispiel: <code>&lt;a href="https://w3.org"&gt;Das ist ein Link auf ein anderes HTML-Dokument (W3C)&lt;/a&gt;</code> wird dargestellt als:<br><br><a href="https://w3.org">Das ist ein Link auf ein anderes HTML-Dokument (W3C)</a>',
    bild: 'https://cdn.pixabay.com/photo/2020/04/25/13/15/venice-5090764_960_720.jpg',
    tags: ['HTML5', 'Element']
  },
  {
    id: '3',
    ueberschrift: 'Semantische Strukturierung von HTML-Seiten',
    autor: 'Vladimir Antonyan',
    datum: new Date('15. February 2015 20:14').toISOString().substring(0, 10),
    anriss: 'Ein kurzer Überblick über semantische Elemente in HTML5.',
    text: 'In der Vergangenheit wurden HTML-Dokumente häufig mit Tabellen oder Frames (ok, sehr weit zurückliegende Vergangenheit...) strukturiert. Später wurden dafür <code>&lt;div&gt;</code>-Elemente verwendet. In HTML5 gibt es Elemente, die es erlauben, den einzelnen Teilen des Dokuments eine Semantik zu verleihen, die von modernen Browsern ausgewertet wird und ggf. die Darstellung - z. B. auf Mobilgeräten und in Readern - beeinflusst. Beispielsweise lässt sich ein Dokument mit den Elementen <code>&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;</code> grob in Kopf-, Inhalts- und Fußbereich unterteilen. Weitere semantische Elemente sind <code>&lt;nav&gt;, &lt;aside&gt;, &lt;article&gt;, &lt;section&gt;</code>',
    bild: 'https://cdn.pixabay.com/photo/2020/03/21/16/02/sunset-4954402_960_720.jpg',
    tags: ['Semantik', 'HTML5', 'Element']
  },
];
