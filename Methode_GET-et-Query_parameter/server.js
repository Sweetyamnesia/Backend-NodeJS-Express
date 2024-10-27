const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/new_get_method', (req, res) => {
    res.send('Nouvelle méthode');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/search', (req, res) => {
    const lang = req.query.lang;
    const prenom = req.query.prenom;
    const lieu = req.query.lieu;
    res.send(`Langue ${lang}, prenom ${prenom}, lieu ${lieu}`);    
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});