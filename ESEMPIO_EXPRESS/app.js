var express = require('express');
var app = express(); 
const path = require('path');

app.get('/', getcallback);

function getcallback (req,res){
    let pagina = path.join(__dirname, 'index.html');
    console.log(pagina);
    res.sendFile(pagina);
}

app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname,'about.html')); //__dirname : Ritorna la cartella del progetto
});

app.listen(3000, funzione);

function funzione(){
    console.log('Example app listening on port 3000');
}

