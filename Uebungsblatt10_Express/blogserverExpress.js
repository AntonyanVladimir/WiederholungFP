const express = require('express');
const { json } = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(express.json());
var arts = [];
//body-parser

arts = require('./articles');

app.listen(3000, () => console.log(`Listening on Port ${3000}`));

app.get('/articles', (req, res) => {
    let artikels;
    if (req.query.suchtag && req.query.suchwort) {
        artikels = getArticlesByTagUndQuery(req.query.suchtag, req.query.suchwort, arts);
    }
    else if (req.query.suchtag) {
        artikels = getArticlesByTag(req.query.suchtag, arts); 

    } else if (req.query.suchwort) {
        artikels = getArticlesBySuchwort(req.query.suchwort, arts);
    } else
        artikels = arts;
    res.send(JSON.stringify(artikels));
})

app.get('/articles/:id', (req, res) => {
    let id = req.params.id;
    let artikel = arts.find(m => m.id === id);

    if (artikel)
        res.send(JSON.stringify(artikel));
    else
        res.status(400).send(`The article with Id ${id} cannot be found.`);
})

app.delete('/articles/:id', (req, res) => {
    let id = req.params.id;
    let artikel = arts.find(m => m.id === id);
    if (artikel) {
        let index = arts.indexOf(artikel); 
        arts.splice(index,1);
        res.status(200).json({ message: `The article with Id ${id} ist delteted.` });
    }
    else
        res.status(400).json({ errorMessage: `The article with Id ${id} cannot be found.` });

})

app.put('/articles/:id', (req, res) => {
    let id = req.params.id;
    let artikel = arts.find(m => m.id === id);
    if(artikel){
        let index = arts.indexOf(artikel);
        arts[index] = req.body;
        res.json("Artikel wurde upadated.");
    } 
    else
    res.status(400).json({errorMessage: "Artikel kann nicht editiert werden."} );
})
app.post('/articles', (req, res)=>{

    let artFromBody = req.body;
    let artLength = arts.length
    artFromBody.id = ++artLength;
    arts.push(artFromBody);

    res.status(200).json({message:`Einen neuen Artikel mit der id ${artFromBody.id} wurde hinzugefügt.`});
})
app.get('/tags', (req, res)=>{
    var tagMap = {};
    for(let art of arts){
        for(let tag of art.tags){
            if(!tagMap[tag]){
                tagMap[tag] = 1;
            } else {
                tagMap[tag] = ++tagMap[tag];
            }
        }
    }
    res.send(JSON.stringify(tagMap));
})
//funktionen
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

function getArticlesByTagUndQuery(tag, suchwort, articles) {
    let artsFromTags = getArticlesByTag(tag, articles);
    let artsFromTagUndSuchwort = getArticlesBySuchwort(suchwort, artsFromTags);

    return artsFromTagUndSuchwort;
}
