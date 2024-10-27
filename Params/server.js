const express = require('express');
const app = express();
const port = 3000;

app.get('/new_params', (req, res) => {
    const lang = req.query.lang;
    const prenom = req.query.prenom;
    const lieu = req.query.lieu;

    /*/const params = {
      lang: lang || 'français',
      prenom: prenom || 'angela',
      lieu : lieu || 'bordeaux'
    };/*/

    const params = {
      lang : lang,
      prenom : prenom,
      lieu : lieu
    };
    console.log(req.query)
    console.log(params);

    res.send(`Langue: ${params.lang}, prénom : ${params.prenom}, lieu : ${params.lieu} `)  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});