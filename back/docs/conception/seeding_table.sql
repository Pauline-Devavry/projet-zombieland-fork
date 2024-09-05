BEGIN;

-- Insertion des catégories
INSERT INTO "category" (name, description) VALUES
('Montagnes Russes', 'Des attractions à sensations fortes avec des loopings et des chutes vertigineuses'),
('Attractions Aquatiques', 'Des attractions rafraîchissantes pour se divertir et se rafraîchir'),
('Attractions Familiales', 'Des attractions pour tous les âges, parfaites pour toute la famille');

-- Insertion des attractions
INSERT INTO "attraction" (name, description, image, "category_id") VALUES
('Le Grand Huit', 'Montagnes russes à grande vitesse', 'grand_huit.jpg', 1),
('Splash Mountain', 'Descente aquatique vertigineuse', 'splash_mountain.jpg', 2),
('Carrousel Enchanté', 'Manège classique pour toute la famille', 'carrousel.jpg', 3),
('Tornado', 'Montagnes russes inversées', 'tornado.jpg', 1),
('River Rapids', 'Parcours en bouées sur rivière tumultueuse', 'river_rapids.jpg', 2),
('Maison Hantée', 'Parcours effrayant dans le noir', 'maison_hantee.jpg', 3),
('Looping Infernal', 'Montagnes russes avec loopings multiples', 'looping_infernal.jpg', 1),
('Chute Libre', 'Tour de chute libre', 'chute_libre.jpg', 1),
('Bateau Pirate', 'Navire qui se balance', 'bateau_pirate.jpg', 3),
('Rivière Sauvage', 'Descente en radeaux', 'riviere_sauvage.jpg', 2),
('Monorail Spatial', 'Voyage futuriste en monorail', 'monorail_spatial.jpg', 3),
('Tourbillon Aquatique', 'Toboggans aquatiques en spirale', 'tourbillon_aquatique.jpg', 2),
('Grand Huit Inversé', 'Montagnes russes avec loopings inversés', 'grand_huit_inverse.jpg', 1),
('Cinéma 4D', 'Expérience cinématographique immersive', 'cinema_4d.jpg', 3),
('Chaises Volantes', 'Manège aérien', 'chaises_volantes.jpg', 3),
('Rapides de la Jungle', 'Aventure aquatique dans la jungle', 'rapides_jungle.jpg', 2),
('Montagne de la Terreur', 'Montagnes russes dans le noir', 'montagne_terreur.jpg', 1),
('Labyrinthe des Miroirs', 'Parcours amusant dans un labyrinthe de miroirs', 'labyrinthe_miroirs.jpg', 3),
('Simulateur de Vol', 'Expérience de vol virtuelle', 'simulateur_vol.jpg', 3),
('Plongeon de l''Extrême', 'Chute vertigineuse dans l''eau', 'plongeon_extreme.jpg', 2);

-- Insertion des tickets
INSERT INTO "ticket" (name, price, quantity) VALUES
('Billet Adulte', 50.00, 1000),
('Billet Enfant', 30.00, 1000),
('Pass Famille', 150.00, 500);

-- Insertion des utilisateurs
INSERT INTO "user" (last_name, first_name, email, password, role) VALUES
('Dupont', 'Jean', 'jean.dupont@email.com', 'motdepasse123', 'utilisateur'),
('Martin', 'Sophie', 'sophie.martin@email.com', 'motdepasse456', 'administrateur');

-- Insertion des réservations
INSERT INTO "reservation" (user_id, visit_date, status, total_price) VALUES
(1, '2024-07-15', 'confirmée', 25.00),
(2, '2024-08-01', 'confirmée', 25.00);

-- Insertion des messages
INSERT INTO "message" (user_id, last_name, first_name, content) VALUES
(1, 'Dupont', 'Jean', 'J''ai hâte de visiter le parc !'),
(2, 'Martin', 'Sophie', 'Merci pour cette expérience incroyable.');

-- Insertion des réservations de tickets
INSERT INTO "reservation_ticket" (reservation_id, ticket_id, quantity) VALUES
(1, 1, 2),
(1, 2, 1),
(2, 3, 1);

COMMIT;
