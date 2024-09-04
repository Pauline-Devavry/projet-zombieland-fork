# Dictionnaire de Données

## Table: Utilisateur

| **Attribut** | **Type de Donnée**                    | **Longueur** | **Contraintes**             | **Description**                                                     |
| ------------ | ------------------------------------- | ------------ | --------------------------- | ------------------------------------------------------------------- |
| id           | INT                                   |              | PRIMARY KEY, AUTO_INCREMENT | Identifiant unique de l'utilisateur, auto-incrémenté.               |
| nom          | VARCHAR                               | 80           | NOT NULL                    | Nom de l'utilisateur.                                               |
| prenom       | VARCHAR                               | 80           | NOT NULL                    | Prénom de l'utilisateur.                                            |
| courriel     | VARCHAR                               | 320          | NOT NULL, UNIQUE            | Adresse e-mail de l'utilisateur.                                    |
| mot_de_passe | VARCHAR                               | 255          | NOT NULL                    | Mot de passe de l'utilisateur, stocké de manière sécurisée (hashé). |
| role         | ENUM('utilisateur', 'administrateur') |              | NOT NULL                    | Rôle de l'utilisateur dans le système.                              |

## Table: Attraction

| **Attribut** | **Type de Donnée** | **Longueur** | **Contraintes**                                | **Description**                                                 |
| ------------ | ------------------ | ------------ | ---------------------------------------------- | --------------------------------------------------------------- |
| id           | INT                |              | PRIMARY KEY, AUTO_INCREMENT                    | Identifiant unique de l'attraction, auto-incrémenté.            |
| nom          | VARCHAR            | 150          | NOT NULL                                       | Nom de l'attraction.                                            |
| description  | TEXT               |              | NULL                                           | Description détaillée de l'attraction.                          |
| categorie_id | INT                |              | NOT NULL, FOREIGN KEY REFERENCES Categorie(id) | Identifiant de la catégorie à laquelle l'attraction appartient. |
| image        | VARCHAR            | 255          | NULL                                           | URL de l'image représentant l'attraction.                       |

## Table: Catégorie

| **Attribut** | **Type de Donnée** | **Longueur** | **Contraintes**             | **Description**                                                  |
| ------------ | ------------------ | ------------ | --------------------------- | ---------------------------------------------------------------- |
| id           | INT                |              | PRIMARY KEY, AUTO_INCREMENT | Identifiant unique de la catégorie, auto-incrémenté.             |
| nom          | VARCHAR            | 100          | NOT NULL                    | Nom de la catégorie (ex: Montagnes russes, Maison hantée, etc.). |
| description  | TEXT               |              | NULL                        | Description de la catégorie.                                     |

## Table: Réservation

| **Attribut**   | **Type de Donnée**           | **Longueur** | **Contraintes**                                  | **Description**                                             |
| -------------- | ---------------------------- | ------------ | ------------------------------------------------ | ----------------------------------------------------------- |
| id             | INT                          |              | PRIMARY KEY, AUTO_INCREMENT                      | Identifiant unique de la réservation, auto-incrémenté.      |
| utilisateur_id | INT                          |              | NOT NULL, FOREIGN KEY REFERENCES Utilisateur(id) | Identifiant de l'utilisateur ayant effectué la réservation. |                      |
| date_visite    | DATE                         |              | NOT NULL                                         | Date de la visite réservée.
| prix_total    | DECIMAL                        |    (10, 2)          | NOT NULL                                         |Prix total du billet réservé.                               |
| statut         | ENUM('confirmée', 'annulée') |              | NOT NULL                                         | Statut de la réservation.                                   |

## Table: Message

| **Attribut**   | **Type de Donnée** | **Longueur** | **Contraintes**                                  | **Description**                                       |
| -------------- | ------------------ | ------------ | ------------------------------------------------ | ----------------------------------------------------- |
| id             | INT                |              | PRIMARY KEY, AUTO_INCREMENT                      | Identifiant unique du message, auto-incrémenté.       |
| utilisateur_id | INT                |              | NOT NULL, FOREIGN KEY REFERENCES Utilisateur(id) | Identifiant de l'utilisateur ayant envoyé le message. |
| nom            | VARCHAR            | 80           | NOT NULL                                         | nom de l'expéditeur du message.                       |
| prenom         | VARCHAR            | 80           | NOT NULL                                         | prénom de l'expéditeur du message.                    |
| contenu        | VARCHAR            | 500          | NOT NULL                                         | Contenu du message envoyé.                            |
| date_envoi     | DATETIME           |              | DEFAULT CURRENT_TIMESTAMP                        | Date et heure de l'envoi du message.                  |

## Table: Billet

| **Attribut** | **Type de Donnée** | **Longueur** | **Contraintes**             | **Description**                                |
| ------------ | ------------------ | ------------ | --------------------------- | ---------------------------------------------- |
| id           | INT                |              | PRIMARY KEY, AUTO_INCREMENT | Identifiant unique du billet, auto-incrémenté. |
| nom          | VARCHAR            | 100          | NOT NULL                    | Nom du billet (exemple: enfant/adulte)         |
| prix         | DECIMAL            | (10, 2)      | NOT NULL                    | Prix du billet                                 |
| quantite     | INT                |              | NOT NULL                    | Quantité de billet(s)                          |

## Table: `reservation_ticket`

| **Attribut**     | **Type de Donnée** | **Longueur** | **Contraintes**                                                   | **Description**                                             |
| ---------------- | ------------------ | ------------ | ----------------------------------------------------------------- | ----------------------------------------------------------- |
| `id`             | INT                |              | PRIMARY KEY, AUTO_INCREMENT                                       | Identifiant unique, auto-incrémenté.                        |
| `reservation_id` | INT                |              | NOT NULL, FOREIGN KEY REFERENCES `reservations`(`reservation_id`) | Identifiant de la réservation auquel le ticket est associé. |
| `ticket_id`      | INT                |              | NOT NULL, FOREIGN KEY REFERENCES `tickets`(`ticket_id`)           | Identifiant du ticket associé à la réservation.             |
| `quantity`       | INT                |              | NOT NULL                                                          | Quantité de tickets réservés.                               |
