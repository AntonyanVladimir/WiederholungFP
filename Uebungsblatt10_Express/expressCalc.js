const express = require('express');
const { json } = require('body-parser');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

app.get('/', (req, res) => {
    res.send("Hallo Welt");
})

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:operation/:op1/:op2', (req, res) => {
    let operation = req.params.operation;
    let op1 = parseFloat(req.params.op1);
    let op2 = parseFloat(req.params.op2);
    let ergebnis;
    switch(operation){
        case 'add': ergebnis = op1+op2; break;
        case 'mul': ergebnis = op1*op2; break;
        case 'sub': ergebnis = op1-op2; break;
        case 'div': ergebnis = op1/op2; break;
        default: ergebnis = "Ungültige operation !!!"; break;
    }
    res.send(JSON.stringify(ergebnis));
})
