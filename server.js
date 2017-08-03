const fs = require('fs');
const express = require('express');
const expressStaticGzip = require("express-static-gzip");
const path = require("path");

const app = express();
var indexFile;

// Pour que la page racine utilise la cache du index.html
app.use(/^\/$/, function (req, res, next) {
    res.send(indexFile);
});

// Pour supporter les fichiers .gz
app.use("/", expressStaticGzip(path.join(__dirname, 'dist')));

// Pour gérer le 404 - on retourne index.html et on laisse l'application gérer l'erreur
app.use(function (req, res, next) {
    res.send(indexFile);
});

// Pour mettre le fichier index.html en cache
fs.readFile(path.join(__dirname, 'dist/index.html'), 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    indexFile = data;

    app.listen(8083, function () {
        console.log('Listening on port 8083...')
    });
});