	let neuArtikelBtn = document.getElementById("artikelNeuBtn");
	neuArtikelBtn.addEventListener("click", ()=>{
		window.location.href = "artikelNeu.html";
	})
	
	
	
	
	function appendElements(container, ...elements) {
	  for (let element of elements) {
	    container.append(element);
	  }
	}
	
	function createTags(tagNames) {
	const tags = [];
	
	  for (let tagName of tagNames) {
	    let tag = document.createElement("a");
	    tag.setAttribute("class", "badge badge-pill badge-primary");
	    tag.setAttribute("href", "tagliste.html");
	    tag.innerText = tagName + " ";
	    tags.push(tag);
	  }
	  return tags;
	}
	
	function createSocialMediaLinks(...socialMediaNames) {
  let socialMediaLinks = [];

  for (let socMed of socialMediaNames) {
    let link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.setAttribute("href", "#");
    link.innerText = socMed;

    socialMediaLinks.push(link);
  }
  return socialMediaLinks;
}


function createArticle(article){
	let createdArticle = document.createElement("article");
	
	let ueberschrift = document.createElement("h2");
	ueberschrift.textContent = article.ueberschrift;
	ueberschrift.innerText = article.ueberschrift;
	
	let datumUndAutor = document.createElement("p");
	let datumUndAutorText = article.datum + " von " + article.autor;
	datumUndAutor.innerText = datumUndAutorText;
	
	let anriss = document.createElement("p");
	anriss.innerText = article.anriss;
	
	let content = document.createElement("p");
	content.innerText = article.text;
	
	let tagsDiv = document.createElement("div");
	let tags = createTags(article.tags);
	appendElements(tagsDiv, ...tags);
	
	let socialMediaDiv = document.createElement("div");
	let socialMediaLinks = createSocialMediaLinks(
	  "Teilen auf Facebook",
	  "Twittern",
	  "Teilen via E-Mail"
	);
	appendElements(socialMediaDiv, ...socialMediaLinks);
	
	appendElements(
	  createdArticle,
	  ueberschrift,
	  datumUndAutor,
	  anriss,
	  content,
	  tagsDiv,
	  socialMediaDiv
	);
	return createdArticle;
}

function createSidebar(){

	let sidebar = document.createElement("aside");
	sidebar.setAttribute("class", "col-12 col-md-3 mt-5");
	sidebar.innerHTML = `Seitenleiste:<br>
	        Login: <input type="text" size="10" /><br>
	        Passwort: <input type="text" size="10" /><br>
	        <a href="#">Login</a>
	        <hr>
	        <input type="text" size="10" />&nbsp;<a href="suchergebnis.html">Suchen</a>
	        <hr>
	        <a href="monatsliste.html">November 2017 (3)</a><br>
	        <a href="monatsliste.html">Dezember 2017 (1)</a><br>
	        <a href="monatsliste.html">März 2018 (2)</a><br>
	        <a href="monatsliste.html">April 2018 (1)</a><br>
	        <hr>
	        Tagcloud: [Semantik] [<a href="tagliste.html">HTML5</a>] [Element] [Dokument] [HTTP]
	        <hr>`;
	return sidebar;
}
let tester = document.getElementById("tagCloudTester");
tester.addEventListener("click", ()=>{
	this.createTagCloud(articles);
})

function createTagCloud(articles){
	let tagMap = new Map();
	
	for(let article of articles){
		for(let tag of article.tags){
			if(!tagMap.has(tag)){
				tagMap.set(tag, 1);
			} else{
				let value = tagMap.get(tag);
				tagMap.set(tag, ++value);
			}
		}
	}
	console.log(tagMap);
}
