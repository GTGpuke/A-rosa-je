// Importer les modules nécessaires
const express = require('express');
const router = express.Router();

// Route pour la déconnexion
router.post('/logout', (req, res) => {
    // Code pour déconnecter l'utilisateur
    // ...

    // Réponse de succès
    res.status(200).json({ message: 'Déconnexion réussie' });
});

module.exports = router;
