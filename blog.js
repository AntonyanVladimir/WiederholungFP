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
		let tag = $(`<a href="tagliste.html" class="badge badge-pill badge-primary">${tagName}</a>`); 
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
		<p>${article.text}</p>
		
	</article`);
	
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
	        <input type="text" size="10" />&nbsp;<a href="suchergebnis.html">Suchen</a>
	        <hr>
	        <a href="monatsliste.html">November 2017 (3)</a><br>
	        <a href="monatsliste.html">Dezember 2017 (1)</a><br>
	        <a href="monatsliste.html">März 2018 (2)</a><br>
	        <a href="monatsliste.html">April 2018 (1)</a><br>
	        <hr>
	        Tagcloud: [Semantik] [<a href="tagliste.html">HTML5</a>] [Element] [Dokument] [HTTP]
	        <hr>
	</aside`);
	
	return sidebar;
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
