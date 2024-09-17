BEGIN;

-- Insertion des catégories
INSERT INTO "category" (name, description) VALUES
('Chutes mortelles', 'Des attractions à sensations fortes avec des loopings et des chutes vertigineuses'),
('Tsunami macabre', 'Des attractions terrifiantes et rafraîchissantes'),
('Zombulator', 'Plongez dans un univers post-apocalyptique où vous affrontez des attractions remplies de hordes de zombies.'),
('Spirale de la terreur', 'Des attractions avec une descente vertigineuse où chaque tour de spirale vous rapproche de vos plus grandes peurs.'),
('Apocalypse', 'Une catégorie d’attractions immersives qui vous plonge dans un univers cataclysmique.');

-- Insertion des attractions
INSERT INTO "attraction" (name, description, image_url, category_id) VALUES
('Cyclone Mortel', 'Une descente ultra-rapide avec des virages serrés et des loopings enchaînés', 'cyclone_mortel.jpg', 1),
('Chute du Condor', 'Une tour de chute libre où la gravité semble ne plus exister', 'chute_condor.jpg', 1),
('Typhon Infernal', 'Un toboggan aquatique qui vous plonge dans l’obscurité et les courants furieux', 'typhon_infernal.jpg', 2),
('Vortex Maudit', 'Un tourbillon aquatique où l’eau devient votre pire ennemi', 'vortex_maudit.jpg', 2),
('Révolte Zombie', 'Un parcours sinistre dans une ville infestée de zombies', 'revolte_zombie.jpg', 3),
('Forteresse Maudite', 'Explorez une forteresse en ruines peuplée de zombies et de dangers inattendus', 'forteresse_maudite.jpg', 3),
('L’Abîme Spirale', 'Une attraction terrifiante dans une spirale qui semble ne jamais finir', 'abime_spirale.jpg', 4),
('Tour de la Terreur', 'Une chute vertigineuse dans les ténèbres, où vos cris sont votre seul repère', 'tour_terreur.jpg', 4),
('Ruée Apocalyptique', 'Un parcours intense dans un monde dévasté par des catastrophes naturelles', 'ruee_apocalyptique.jpg', 5),
('Ère du Chaos', 'Voyagez dans un futur post-cataclysmique où la survie est un défi de chaque instant', 'ere_chaos.jpg', 5),
('Ouragan Mortel', 'Une descente avec des virages serrés et des descentes rapides', 'ouragan_mortel.jpg', 1),
('Tremblement Apocalyptique', 'Simulation d’un séisme avec des secousses et des chutes', 'tremblement_apocalyptique.jpg', 5),
('Cascade Maudite', 'Un toboggan aquatique avec une descente abrupte et un final éclaboussant', 'cascade_maudite.jpg', 2),
('Requiem des Profondeurs', 'Une aventure sous-marine dans un monde dévasté par les eaux', 'requiem_profondeurs.jpg', 5),
('Invasion Zombie', 'Une maison hantée où des zombies surgissent à chaque coin', 'invasion_zombie.jpg', 3),
('Spirale des Damnés', 'Une attraction qui vous emmène dans une spirale descendante sans fin', 'spirale_damnes.jpg', 4),
('Tourbillon des Cendres', 'Une expérience dans un univers post-éruptif, avec de la fumée et des cendres', 'tourbillon_cendres.jpg', 5),
('Vertige Fatal', 'Une descente avec des montées et descentes abruptes', 'vertige_fatal.jpg', 1),
('Déluge des Enfers', 'Un toboggan aquatique avec des chutes brusques et des virages serrés', 'deluge_enfers.jpg', 2),
('Dunes Maudites', 'Un parcours au milieu d’un désert post-apocalyptique', 'dunes_maudites.jpg', 5),
('Zombus Invasion', 'Un tour à travers une ville dévastée par une invasion zombie', 'zombus_invasion.jpg', 3),
('Descente du Destin', 'Une descente rapide dans un canyon désertique', 'descente_destin.jpg', 5),
('Eau Sanglante', 'Un parcours en bouée dans une rivière teintée de rouge', 'eau_sanglante.jpg', 2),
('Rafale Ténébreuse', 'Une descente à grande vitesse dans le noir total', 'rafale_tenebreuse.jpg', 4),
('Jugement Apocalyptique', 'Une attraction où les visiteurs doivent échapper à une catastrophe imminente', 'jugement_apocalyptique.jpg', 5);

-- Insertion des tickets
INSERT INTO "ticket" (name, price, description) VALUES
('Billet', 45.00, 'Ce billet vous donne accès à l’intégralité du parc et à toutes les attractions');

-- Insertion des utilisateurs
INSERT INTO "user" (name, first_name, email, password, role) VALUES
('Leroy', 'Paul', 'paul.leroy@email.com', 'motdepasse101', 'administrateur'),
('Dupont', 'Jean', 'jean.dupont@email.com', 'motdepasse123', 'utilisateur'),
('Martin', 'Sophie', 'sophie.martin@email.com', 'motdepasse456', 'utilisateur'),
('Bernard', 'Alice', 'alice.bernard@email.com', 'motdepasse789', 'utilisateur'),
('Durand', 'Marc', 'marc.durand@email.com', 'motdepasse112', 'utilisateur'),
('Lemoine', 'Claire', 'claire.lemoine@email.com', 'motdepasse131', 'utilisateur'),
('Garnier', 'Julien', 'julien.garnier@email.com', 'motdepasse415', 'utilisateur'),
('Moreau', 'Isabelle', 'isabelle.moreau@email.com', 'motdepasse161', 'utilisateur'),
('Roux', 'Thomas', 'thomas.roux@email.com', 'motdepasse718', 'utilisateur'),
('Robert', 'Nathalie', 'nathalie.robert@email.com', 'motdepasse192', 'utilisateur'),
('Tremblay', 'Louis', 'louis.tremblay@email.com', 'motdepasse223', 'utilisateur');

-- Insertion des réservations
INSERT INTO "reservation" (user_id, num_reservation, date_visit, status, total_price) VALUES
(12, 'RES-2024-1261', '2024-11-30', 'confirmée', '45.00');

-- Insertion des messages
INSERT INTO "message" (name, first_name, email, content) VALUES
('Santos', 'Marine', 'marine.s@email.com', 'J''ai hâte de visiter le parc !'),
('Martin', 'Sophie', 'sophie.martin@email.com', 'Merci pour cette expérience incroyable.');

-- Insertion des réservations de tickets
INSERT INTO "reservation_has_ticket" (reservation_id, ticket_id, quantity_ticket) VALUES
(1, 1, 1),
(2, 1, 2);

COMMIT;