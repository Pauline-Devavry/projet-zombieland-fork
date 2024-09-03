BEGIN;

-- Insertion des catégories
INSERT INTO "category" ("name", "description") VALUES 
('Montagnes Russes', 'Attractions à grande vitesse avec des virages serrés.'),
('Rides Aquatiques', 'Attractions rafraîchissantes avec éclaboussures et toboggans.'),
('Rides Nocturnes', 'Attractions intérieures avec une narration immersive et des effets spéciaux.');

-- Insertion des attractions
INSERT INTO "attraction" ("name", "description", "image", "category_id") VALUES 
('Tonnerre', 'Montagne russe à grande vitesse avec des virages serrés.', 'tonnerre.jpg', 1),
('Chute Libre', 'Ride aquatique avec une grande descente et beaucoup d’éclaboussures.', 'chute_libre.jpg', 2),
('Maison Hantée', 'Ride nocturne avec des fantômes et des goules.', 'maison_hantee.jpg', 3),
('Grande Roue', 'Grande roue offrant une vue sur tout le parc.', 'grande_roue.jpg', 1),
('Toboggan Flottant', 'Ride aquatique relaxant qui se termine par une grande éclaboussure.', 'toboggan_flottant.jpg', 2),
('Aventure Spatiale', 'Ride nocturne à travers les étoiles.', 'aventure_spatiale.jpg', 3),
('Cyclone', 'Montagne russe en bois avec des grandes descentes.', 'cyclone.jpg', 1),
('Pirates des Caraïbes', 'Ride nocturne avec des animatroniques de pirates et des effets spéciaux.', 'pirates.jpg', 3),
('Rapides du Fleuve', 'Ride aquatique simulant une aventure de rivière sauvage.', 'rapides_fleuve.jpg', 2),
('Big Thunder Mountain', 'Montagne russe en train de mine qui déraille.', 'big_thunder.jpg', 1),
('Le Kraken', 'Montagne russe sans sol avec plusieurs inversions.', 'kraken.jpg', 1),
('Rivière Paresseuse', 'Ride aquatique calme où l’on flotte sur un courant doux.', 'rivière_paresseuse.jpg', 2),
('Mine Mystérieuse', 'Montagne russe nocturne à travers une mine hantée.', 'mine_mysterieuse.jpg', 3),
('Chutes Splash', 'Ride aquatique familial avec éclaboussures modérées.', 'chutes_splash.jpg', 2),
('Défi Dragon', 'Montagne russe à grande vitesse avec deux pistes côte à côte.', 'defi_dragon.jpg', 1),
('Train Fantôme', 'Ride nocturne à travers une gare hantée.', 'train_fantome.jpg', 3),
('Piscine à Vagues', 'Grande piscine avec des vagues générées artificiellement.', 'piscine_vagues.jpg', 2),
('Raptor', 'Montagne russe inversée avec plusieurs boucles.', 'raptor.jpg', 1),
('Lagune des Sirènes', 'Ride nocturne sous la mer avec des sirènes et des créatures marines.', 'lagune_sirenes.jpg', 3),
('Typhon', 'Toboggan aquatique envoyant les passagers dans une grande descente dans une piscine.', 'typhon.jpg', 2);

-- Insertion des utilisateurs
INSERT INTO "user" ("last_name", "first_name", "email", "password", "role") VALUES 
('Dupont', 'Jean', 'jean.dupont@example.com', 'motdepasse123', 'utilisateur'),
('Martin', 'Claire', 'claire.martin@example.com', 'motdepasse456', 'administrateur'),
('Lemoine', 'Paul', 'paul.lemoine@example.com', 'motdepasse789', 'utilisateur'),
('Dubois', 'Sophie', 'sophie.dubois@example.com', 'motdepasse321', 'utilisateur');

-- Insertion des billets
INSERT INTO "ticket" ("name", "price", "quantity") VALUES 
('Billet Enfant', 25.00, 100),
('Billet Adulte', 50.00, 200),
('Billet Senior', 35.00, 50);

-- Insertion des réservations
INSERT INTO "reservation" ("user_id", "attraction_id", "visit_date", "status") VALUES 
(1, 1, '2024-09-01', 'confirmée'),
(2, 2, '2024-09-02', 'annulée'),
(3, 3, '2024-09-03', 'confirmée'),
(4, 4, '2024-09-04', 'confirmée');

-- Insertion des réservations de tickets
INSERT INTO "reservation_ticket" ("reservation_id", "ticket_id", "quantity") VALUES 
(1, 1, 2),
(2, 2, 1),
(3, 3, 4),
(4, 1, 3);

COMMIT;
