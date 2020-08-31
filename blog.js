	let neuArtikelBtn = $("#artikelNeuBtn");
	neuArtikelBtn.on("click", ()=>{
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
		let tag = $(`<a href="tagliste.html?tag=${tagName}" class="badge badge-pill badge-primary">${tagName}</a>`); 
	    tags.push(tag);
	  }
	  return tags;
	}
	
  function createSocialMediaLinks(...socialMediaNames) {
  let socialMediaLinks = [];

  for (let socMed of socialMediaNames) {
	let link = $(`<a href="#" target="_blank">${socMed}</a>`);
    socialMediaLinks.push(link);
  }
  return socialMediaLinks;
}


function createArticle(article){
	let createdArticle = $(`
	<article>
		<a href="artikel.html?id=${article.id}"><h2>${article.ueberschrift}</h2></a>
		<p>${article.datum} von  ${article.autor}</p>
		<p>${article.anriss}</p>
		<p>${article.bild}</p>
		<p>${article.text}</p>
		<div>
		 	<a class="btn btn-primary" type="button" href="artikelNeu.html?id=${article.id}">Artikel Bearbeiten</a>
		</div>
		
	</article>`);
	
	let tagsDiv = $("<div></div>");
	
	let tags = createTags(article.tags);
	appendElements(tagsDiv, ...tags);
	
	let socialMediaDiv = $("<div></div>");
	let socialMediaLinks = createSocialMediaLinks(
	  "Teilen auf Facebook",
	  "Twittern",
	  "Teilen via E-Mail"
	);
	appendElements(socialMediaDiv, ...socialMediaLinks);
	
	appendElements(
	  createdArticle,
	  tagsDiv,
	  socialMediaDiv
	);
	return createdArticle;
}

function createSidebar(){

	//let sidebar = document.createElement("aside");
	let sidebar = $(`<aside class = "col-12 col-md-3 mt-5">
			Seitenleiste:<br>
	        Login: <input type="text" size="10" /><br>
	        Passwort: <input type="text" size="10" /><br>
	        <a href="#">Login</a>
	        <hr>
	        <input type="text" size="10" id="sucheTextFeld" />&nbsp;<a onclick="sucheNachWort()" id="sucheBtn")>Suchen</a>
	        <hr>
	        <a href="monatsliste.html">November 2017 (3)</a><br>
	        <a href="monatsliste.html">Dezember 2017 (1)</a><br>
	        <a href="monatsliste.html">März 2018 (2)</a><br>
	        <a href="monatsliste.html">April 2018 (1)</a><br>
	        <hr>
	        Tagcloud: [Semantik] [<a href="tagliste.html">HTML5</a>] [Element] [Dokument] [HTTP]
	        <hr>
	</aside>`);
	
	return sidebar;
}

function sucheNachWort(){
	let params = "?suchtext="+document.getElementById("sucheTextFeld").value;
	location.href = "suchergebnis.html"+params;
}

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

function getArticlesByTag(testTag){
	var arts = [];
	for(let article of articles){
		for(let tag of article.tags)
		if(tag===testTag)
		arts.push(article);
	}
	return arts;
}

function getArticlesBySuchwort(suchwort){
	let arts = [];
	if(suchwort){
		suchwort = suchwort.toLowerCase();
		for(let article of articles){
			for(let [key, value] of Object.entries(article)){
				if(key==="tags"){
					for(let tag of value){
						if(tag.toLowerCase()===suchwort&&!arts.includes(article))
						arts.push(article);
					}
				} 
				if(key === "ueberschrift"||key==="autor"||key==="anriss"||key ==="text"){
					value = value.toLowerCase();
					if(value.search(suchwort)!==-1&&!arts.includes(article))
						arts.push(article);
				}
			}
		}
		return arts;
	}
}
