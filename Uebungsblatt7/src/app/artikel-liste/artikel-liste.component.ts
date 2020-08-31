import { Component, OnInit } from '@angular/core';
import {Artikel} from '../../app/artikel'

@Component({
  selector: 'app-artikel-liste',
  templateUrl: './artikel-liste.component.html',
  styleUrls: ['./artikel-liste.component.css']
})
export class ArtikelListeComponent implements OnInit {

  constructor() { }
 	articles:Artikel[] = [
	{
		id:'article1',
		ueberschrift: 'HTML Dokumente',
		autor: 'Vladimir Antonyan',
		datum: new Date('15. February 2015 20:14').toISOString(),
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
		id:'article2',
		ueberschrift: 'HTML Elemente',
		autor: 'Vladimir Antonyan',
		datum: new Date('15. February 2015 20:14').toISOString(),
		anriss: 'Eine kurze Einführung in HTML Elemente',
		text: 'Die HTML Elemente eines HTML Dokuments sind ineinander geschachtelt und bilden damit eine hierarchische Struktur, einen Baum. Ein Element besteht üblicherweise aus einem öffnenden und einem schließenden Tag. Zwischen den beiden Tags befindet sich der eigentliche Inhalt des Elements.<br> Weiterhin können im öffnenden Tag Attribute in Form von Schlüssel-Wert Paaren notiert werden.<br><br>Beispiel: <code>&lt;a href="https://w3.org"&gt;Das ist ein Link auf ein anderes HTML-Dokument (W3C)&lt;/a&gt;</code> wird dargestellt als:<br><br><a href="https://w3.org">Das ist ein Link auf ein anderes HTML-Dokument (W3C)</a>',
		bild: 'https://cdn.pixabay.com/photo/2020/04/25/13/15/venice-5090764_960_720.jpg',
		tags: ['HTML5', 'Element']
	},	
	{
		id:'article3',
		ueberschrift: 'Semantische Strukturierung von HTML-Seiten',
		autor: 'Vladimir Antonyan',
		datum: new Date('15. February 2015 20:14').toISOString(),
		anriss: 'Ein kurzer Überblick über semantische Elemente in HTML5.',
		text: 'In der Vergangenheit wurden HTML-Dokumente häufig mit Tabellen oder Frames (ok, sehr weit zurückliegende Vergangenheit...) strukturiert. Später wurden dafür <code>&lt;div&gt;</code>-Elemente verwendet. In HTML5 gibt es Elemente, die es erlauben, den einzelnen Teilen des Dokuments eine Semantik zu verleihen, die von modernen Browsern ausgewertet wird und ggf. die Darstellung - z. B. auf Mobilgeräten und in Readern - beeinflusst. Beispielsweise lässt sich ein Dokument mit den Elementen <code>&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;</code> grob in Kopf-, Inhalts- und Fußbereich unterteilen. Weitere semantische Elemente sind <code>&lt;nav&gt;, &lt;aside&gt;, &lt;article&gt;, &lt;section&gt;</code>',
		bild: 'https://cdn.pixabay.com/photo/2020/03/21/16/02/sunset-4954402_960_720.jpg',
		tags: ['Semantik', 'HTML5', 'Element']
	},	
];
  ngOnInit(): void {
  }

}
