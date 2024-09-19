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
('Cyclone Mortel', 'Préparez-vous à une expérience vertigineuse sur le Cyclone Mortel. Cette montagne russe extrême vous propulse à travers des loopings inversés, des vrilles serrées et des descentes à couper le souffle. Avec ses virages brusques et ses accélérations foudroyantes, cette attraction repousse les limites de l''adrénaline.', 'cyclone_mortel.jpg', 1),
('Chute du Condor', 'Osez défier la gravité sur la Chute du Condor. Cette tour de chute libre vous élève à des hauteurs vertigineuses avant de vous lâcher dans une descente fulgurante. Ressentez l''apesanteur et l''adrénaline pure lors de cette chute spectaculaire qui vous laissera sans voix.', 'chute_condor.jpg', 1),
('Typhon Infernal', 'Plongez dans les ténèbres aquatiques du Typhon Infernal. Ce toboggan aquatique vous emporte dans un voyage tumultueux à travers des tunnels obscurs et des virages imprévisibles. Affrontez des courants déchaînés et des chutes soudaines dans cette aventure aquatique palpitante.', 'typhon_infernal.jpg', 2),
('Vortex Maudit', 'Laissez-vous emporter par le Vortex Maudit, un tourbillon aquatique impitoyable. Cette attraction vous plonge dans un maelström de sensations fortes, où les eaux tumultueuses vous ballottent et vous font tournoyer. Tentez de garder votre sang-froid dans ce chaos aquatique intense.', 'vortex_maudit.jpg', 2),
('Révolte Zombie', 'Survivez à la Révolte Zombie dans une ville en ruines. Cette expérience immersive vous plonge au cœur d''une apocalypse zombie. Naviguez à travers des rues désolées, évitez les hordes de morts-vivants et découvrez les secrets cachés de cette cité infestée.', 'revolte_zombie.jpg', 3),
('Forteresse Maudite', 'Explorez les sombres couloirs de la Forteresse Maudite. Cette attraction vous emmène dans un château hanté où rôdent des zombies affamés. Affrontez vos peurs, résolvez des énigmes macabres et échappez aux pièges mortels dans ce labyrinthe de terreur.', 'forteresse_maudite.jpg', 3),
('L''Abîme Spirale', 'Descendez dans les profondeurs de L''Abîme Spirale. Cette attraction vertigineuse vous entraîne dans une descente sans fin à travers une spirale hypnotique. Perdez toute notion d''orientation dans ce voyage psychédélique qui défie votre perception de la réalité.', 'abime_spirale.jpg', 4),
('Tour de la Terreur', 'Affrontez vos peurs ultimes dans la Tour de la Terreur. Cette chute vertigineuse dans l''obscurité totale vous prive de tous vos repères. Ressentez l''angoisse monter à chaque étage, avant de plonger dans un vide terrifiant, guidé uniquement par vos propres cris.', 'tour_terreur.jpg', 4),
('Ruée Apocalyptique', 'Survivez à la Ruée Apocalyptique dans un monde ravagé. Cette attraction intense vous propulse à travers des scénarios catastrophiques : tremblements de terre, tsunamis et éruptions volcaniques. Affrontez les éléments déchaînés et tentez de survivre à cette apocalypse simulée.', 'ruee_apocalyptique.jpg', 5),
('Ère du Chaos', 'Plongez dans l''Ère du Chaos, un futur dystopique dévasté. Cette expérience immersive vous confronte aux défis d''un monde post-apocalyptique. Naviguez à travers des ruines futuristes, affrontez des dangers high-tech et découvrez les secrets d''une civilisation effondrée.', 'ere_chaos.jpg', 5),
('Ouragan Mortel', 'Bravez l''Ouragan Mortel, une montagne russe déchaînée. Ressentez la puissance d''un cyclone à travers des virages serrés et des descentes vertigineuses. Cette attraction simule la force destructrice d''un ouragan, vous faisant vivre l''intensité d''un phénomène météorologique extrême.', 'ouragan_mortel.jpg', 1),
('Tremblement Apocalyptique', 'Vivez l''intensité d''un séisme dévastateur dans le Tremblement Apocalyptique. Cette simulation réaliste vous fait ressentir la puissance brute de la terre en colère. Accrochez-vous alors que le sol tremble, que les structures s''effondrent et que le chaos règne autour de vous.', 'tremblement_apocalyptique.jpg', 5),
('Cascade Maudite', 'Dévalez la Cascade Maudite, un toboggan aquatique infernal. Commencez par une montée tendue avant de plonger dans une descente abrupte et sinueuse. Terminez votre parcours par un plongeon spectaculaire qui vous laissera trempé et exalté.', 'cascade_maudite.jpg', 2),
('Requiem des Profondeurs', 'Plongez dans le Requiem des Profondeurs, une odyssée sous-marine post-apocalyptique. Explorez les vestiges d''une civilisation engloutie, naviguez à travers des courants traîtres et découvrez les secrets cachés des abysses. Une aventure aquatique sombre et mystérieuse vous attend.', 'requiem_profondeurs.jpg', 5),
('Invasion Zombie', 'Survivez à l''Invasion Zombie dans cette maison hantée terrifiante. À chaque tournant, des morts-vivants affamés surgissent de l''ombre. Naviguez à travers des pièces lugubres, évitez les pièges mortels et tentez de garder votre sang-froid face à l''horreur omniprésente.', 'invasion_zombie.jpg', 3),
('Spirale des Damnés', 'Descendez dans la Spirale des Damnés, une attraction vertigineuse qui défie la gravité. Cette expérience hypnotique vous entraîne dans une descente sans fin à travers une spirale infernale. Perdez tous vos repères dans ce voyage psychologique intense et désorientant.', 'spirale_damnes.jpg', 4),
('Tourbillon des Cendres', 'Entrez dans le Tourbillon des Cendres, un monde ravagé par une éruption volcanique apocalyptique. Naviguez à travers un paysage désolé, enveloppé de fumée toxique et de cendres brûlantes. Affrontez les dangers d''un environnement hostile dans cette expérience immersive post-catastrophe.', 'tourbillon_cendres.jpg', 5),
('Vertige Fatal', 'Défiez le Vertige Fatal, une montagne russe qui repousse les limites de la gravité. Enchaînez les montées vertigineuses et les descentes abruptes à une vitesse fulgurante. Cette attraction intense vous fera vivre des sensations fortes à chaque virage et chaque looping.', 'vertige_fatal.jpg', 1),
('Déluge des Enfers', 'Plongez dans le Déluge des Enfers, un toboggan aquatique infernal. Affrontez des chutes d''eau brutales et des virages serrés dans l''obscurité. Cette descente chaotique vous fera vivre l''expérience d''un torrent déchaîné, mêlant vitesse, obscurité et sensations aquatiques extrêmes.', 'deluge_enfers.jpg', 2),
('Dunes Maudites', 'Traversez les Dunes Maudites, un désert post-apocalyptique hostile. Cette attraction vous plonge dans un monde aride et dangereux, où chaque pas peut être le dernier. Affrontez des tempêtes de sable, des mirages trompeurs et les vestiges d''une civilisation disparue.', 'dunes_maudites.jpg', 5),
('Zombus Invasion', 'Embarquez dans le Zombus Invasion pour un tour terrifiant à travers une métropole dévastée. Ce parcours vous emmène au cœur d''une ville en proie à une invasion de zombies. Observez la destruction, évitez les hordes de morts-vivants et découvrez les secrets de cette apocalypse urbaine.', 'zombus_invasion.jpg', 3),
('Descente du Destin', 'Affrontez la Descente du Destin, une course effrénée à travers un canyon désertique. Cette attraction vous propulse à grande vitesse le long de falaises escarpées et de gorges profondes. Vivez l''adrénaline pure d''une descente vertigineuse dans un paysage aride et spectaculaire.', 'descente_destin.jpg', 5),
('Eau Sanglante', 'Naviguez sur l''Eau Sanglante, une rivière maudite aux eaux écarlates. Cette descente en bouée vous emmène à travers des rapides tumultueux et des passages étroits. L''atmosphère lugubre et la couleur inquiétante de l''eau ajoutent une dimension terrifiante à cette aventure aquatique.', 'eau_sanglante.jpg', 2),
('Rafale Ténébreuse', 'Plongez dans l''obscurité totale de la Rafale Ténébreuse. Cette descente à grande vitesse vous prive de tout repère visuel, intensifiant chaque sensation. Ressentez l''adrénaline monter alors que vous filez à travers les ténèbres, guidé uniquement par vos autres sens.', 'rafale_tenebreuse.jpg', 4),
('Jugement Apocalyptique', 'Survivez au Jugement Apocalyptique, une course contre la montre face à une catastrophe imminente. Cette attraction immersive vous place au cœur d''un scénario de fin du monde. Prenez des décisions cruciales, surmontez des obstacles mortels et tentez d''échapper à l''anéantissement total.', 'jugement_apocalyptique.jpg', 5);

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
INSERT INTO "reservation" (user_id, date_visit, status, total_price) VALUES
(1, '2024-11-15', 'confirmée', '45.00'),
(2, '2024-12-20', 'confirmée', '90.00');

-- Insertion des messages
INSERT INTO "message" (name, first_name, email, content) VALUES
('Santos', 'Marine', 'marine.s@email.com', 'J''ai hâte de visiter le parc !'),
('Martin', 'Sophie', 'sophie.martin@email.com', 'Merci pour cette expérience incroyable.');

-- Insertion des réservations de tickets
INSERT INTO "reservation_has_ticket" (reservation_id, ticket_id, quantity_ticket) VALUES
(1, 1, 1),
(2, 1, 2);

COMMIT;