-- Generated by Mocodo 4.2.8

CREATE TABLE attraction (
  PRIMARY KEY (code_Attraction),
  code_Attraction VARCHAR(42) NOT NULL,
  nom             VARCHAR(42),
  description     VARCHAR(42),
  image_Url       VARCHAR(42),
  taille_Min      VARCHAR(42),
  taille_Max      VARCHAR(42),
  code_Categorie  VARCHAR(42) NOT NULL
);

CREATE TABLE billet (
  PRIMARY KEY (code_Billet),
  code_Billet VARCHAR(42) NOT NULL,
  nom         VARCHAR(42),
  prix        VARCHAR(42),
  description VARCHAR(42)
);

CREATE TABLE categorie (
  PRIMARY KEY (code_Categorie),
  code_Categorie VARCHAR(42) NOT NULL,
  nom            VARCHAR(42),
  description    VARCHAR(42)
);

CREATE TABLE contenir (
  PRIMARY KEY (code_Reservation, code_Billet),
  code_Reservation VARCHAR(42) NOT NULL,
  code_Billet      VARCHAR(42) NOT NULL
);

CREATE TABLE message (
  PRIMARY KEY (code_Message),
  code_Message     VARCHAR(42) NOT NULL,
  contenu          VARCHAR(42),
  code_Utilisateur VARCHAR(42) NOT NULL
);

CREATE TABLE reservation (
  PRIMARY KEY (code_Reservation),
  code_Reservation VARCHAR(42) NOT NULL,
  date_Visite      VARCHAR(42),
  statut           VARCHAR(42),
  qrcode           VARCHAR(42),
  quantite_Billet  VARCHAR(42),
  prix_Total       VARCHAR(42),
  code_Utilisateur VARCHAR(42) NOT NULL
);

CREATE TABLE utilisateur (
  PRIMARY KEY (code_Utilisateur),
  code_Utilisateur VARCHAR(42) NOT NULL,
  nom              VARCHAR(42),
  prenom           VARCHAR(42),
  date_Naissance   VARCHAR(42),
  courriel         VARCHAR(42),
  mot_De_Passe     VARCHAR(42),
  role             VARCHAR(42)
);

ALTER TABLE attraction ADD FOREIGN KEY (code_Categorie) REFERENCES categorie (code_Categorie);

ALTER TABLE contenir ADD FOREIGN KEY (code_Billet) REFERENCES billet (code_Billet);
ALTER TABLE contenir ADD FOREIGN KEY (code_Reservation) REFERENCES reservation (code_Reservation);

ALTER TABLE message ADD FOREIGN KEY (code_Utilisateur) REFERENCES utilisateur (code_Utilisateur);

ALTER TABLE reservation ADD FOREIGN KEY (code_Utilisateur) REFERENCES utilisateur (code_Utilisateur);