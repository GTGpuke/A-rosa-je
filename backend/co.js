// Importer les modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');

// Créer une instance de l'application Express
const app = express();

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Endpoint pour la connexion
app.post('/login', (req, res) => {
    // Récupérer les informations de connexion depuis le corps de la requête
    const { username, password } = req.body;

    // Vérifier les informations de connexion
    if (username === 'admin' && password === 'password') {
        // Authentification réussie
        res.status(200).json({ message: 'Authentification réussie' });
    } else {
        // Authentification échouée
        res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
});

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Le serveur est en écoute sur le port 3000');
});
