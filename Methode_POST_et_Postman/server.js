const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((err, req, res,next) => {
  console.error(err.stack);
  res.status(500).send("Something broke !");
});

app.get('/', (req, res) => {
  res.send("Bienvenue sur la page d'accueil !");
});

app.get('/data/:id', async (req, res) => {
  try {
    const data = getDataById(req.params.id); // Supposons que cette fonction récupère des données
    
    if (data) {
      res.status(200).json(data);  // Envoie un statut 200 avec les données si elles existent
    } else {
      res.status(204).send();  // Envoie un statut 204 si aucune donnée n'est trouvée
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur interne du serveur");
  }  
  
});
  
function getDataById(id) {
  console.log(`Recherche de données pour l'id: ${id}`)
    // Ici on simule la récupération des données
    const sampleData = { id: 1, message: 'Donnée trouvée' };
    return id == 1 ? sampleData : null;
}

app.post('/new_post', (req, res) => {
    console.log(req.body);
    res.send('Données reçues');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//Créer une route grâce à la méthode POST
//trouver ce que c'est un middleware (comment l'utiliser)
//trouver la fonctionnalité du body de la requête
//Faire un console log pour voir si ça fonctionne bien
//envoyer la réponse (un code statut 200 ou 204)