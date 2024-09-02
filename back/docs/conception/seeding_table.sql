INSERT INTO categorie (code_Categorie, nom, description) VALUES
('CAT001', 'Thrill Rides', 'Attractions à sensations fortes'),
('CAT002', 'Family Rides', 'Attractions familiales'),
('CAT003', 'Kids Rides', 'Attractions pour enfants');

-- Insertion de données dans la table attraction
INSERT INTO attraction (code_Attraction, nom, description, image_Url, taille_Min, taille_Max, code_Categorie) VALUES
('ATT001', 'Zombie Coaster', 'Montagnes russes à haute vitesse', 'zombie_coaster.jpg', '140', '200', 'CAT001'),
('ATT002', 'Haunted Mansion', 'Maison hantée effrayante', 'haunted_mansion.jpg', '100', '190', 'CAT002'),
('ATT003', 'Little Monsters', 'Manège pour enfants', 'little_monsters.jpg', '90', '150', 'CAT003');

-- Insertion de données dans la table billet
INSERT INTO billet (code_Billet, nom, prix, quantite_Billet, description) VALUES
('BIL001', 'Pass Journée', '50', '100', 'Accès illimité pour une journée'),
('BIL002', 'Pass Weekend', '80', '50', 'Accès illimité pour deux jours'),
('BIL003', 'Pass VIP', '100', '25', 'Accès prioritaire et avantages VIP');

-- Insertion de données dans la table utilisateur
INSERT INTO utilisateur (code_Utilisateur, nom, prenom, courriel, mot_De_Passe, role) VALUES
('USR001', 'Dupont', 'Jean', 'jean.dupont@email.com', 'motdepasse123', 'client'),
('USR002', 'Martin', 'Sophie', 'sophie.martin@email.com', 'password456', 'client'),
('USR003', 'Admin', 'Admin', 'admin@zombieland.com', 'adminpass789', 'admin');

-- Insertion de données dans la table reservation
INSERT INTO reservation (code_Reservation, num_Reservation, date_Visite, statut, prix_Total, code_Utilisateur) VALUES
('RES001', 'ZL001', '2024-10-31', 'confirmé', '100', 'USR001'),
('RES002', 'ZL002', '2024-11-01', 'en attente', '150', 'USR002');

-- Insertion de données dans la table contenir
INSERT INTO contenir (code_Reservation, code_Billet) VALUES
('RES001', 'BIL001'),
('RES002', 'BIL002');

-- Insertion de données dans la table message
INSERT INTO message (code_Message, nom, prenom, courriel, contenu, code_Utilisateur) VALUES
('MSG001', 'Dupont', 'Jean', 'jean.dupont@email.com', 'Question sur les horaires', 'USR001'),
('MSG002', 'Martin', 'Sophie', 'sophie.martin@email.com', 'Demande de remboursement', 'USR002');