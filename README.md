
# 🎫 Système de Gestion de Demandes (Ticketing)
(Développement Fullstack : React.js & API Node.js/Express)

Ce projet est une plateforme complète permettant de créer, suivre et gérer des tickets d'assistance. Il repose sur une architecture découplée avec un **Frontend en React** et un **Backend (API REST)** communiquant avec une base de données SQL.

---

## 🚀 Installation & Configuration

### 1. Configuration de la Base de Données
La base de données n'est pas incluse dans le dépôt pour des raisons de sécurité et de légèreté. Vous devez la créer localement en exécutant les commandes suivantes dans votre client SQL (MySQL Workbench, phpMyAdmin, etc.) :

```sql
-- Création de la base de données
CREATE DATABASE IF NOT EXISTS ticketing_db;
USE ticketing_db;

-- Création de la table des tickets
CREATE TABLE IF NOT EXISTS tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    statut ENUM('En attente', 'En cours', 'Terminé') DEFAULT 'En attente',
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---
## 2. Lancement du Backend (API)
Bash

cd backend
npm install
# Assurez-vous de configurer vos accès DB dans le fichier de configuration
npm start

---
## 3. Lancement du Frontend (React)
Bash

cd frontend
npm install
npm start

---

## 4.Structure du Projet

```text
système-gestion-demandes/
├── frontend/                # Application React (Interface Utilisateur)
│   ├── src/
│   │   ├── components/      # Composants (Navbar, TicketCard, Formulaires)
│   │   └── App.js           # Point d'entrée et gestion des routes
│   └── package.json
├── backend/                 # API Node.js / Express (Logique Métier)
│   ├── config/              # Connexion à la base de données
│   ├── routes/              # Définition des points d'entrée API (Endpoints)
│   └── server.js            # Initialisation du serveur
└── README.md                # Documentation du projet
```

---


## 5.Arrêt et Nettoyage

Pour fermer l'environnement de test proprement :

    Stopper les processus : Faites Ctrl + C dans les terminaux où tournent le Frontend et le Backend.

    Nettoyer les dépendances : Pour libérer de l'espace disque en supprimant les modules installés :
    Bash

    # À exécuter dans les dossiers frontend et backend
    rm -rf node_modules

---

#  Prérequis

    Node.js (Version 16 ou supérieure)

    MySQL ou un serveur SQL équivalent

    Navigateur Web (Chrome, Firefox ou Edge)
