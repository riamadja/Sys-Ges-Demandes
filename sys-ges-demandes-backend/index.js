const express = require('express'); 
const { Pool } = require('pg');    
const cors = require('cors');      

const app = express();
app.use(cors());
app.use(express.json()); // Pour lire le format JSON

//  connexion à la base de données
const pool = new Pool({  // identifiants de connexions à modifier en fonction de votre configuration 
  user: 'postgres',           
  host: 'localhost',  
  database: '',        
  password: '', 
  port: 5432,
});

// ROUTE POST : Recevoir une demande et l'enregistrer (API REST)
app.post('/api/demandes', async (req, res) => {
  const { nom, materiel } = req.body;
  //console.log("Données recu: ",req.body);  pour un test 
  try {
    const result = await pool.query(
      'INSERT INTO demandes (employe_nom, materiel_nom) VALUES ($1, $2) RETURNING *',
      [nom, materiel]
    );
    
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.listen(5000, () => console.log("Serveur lancé sur le port 5000"));