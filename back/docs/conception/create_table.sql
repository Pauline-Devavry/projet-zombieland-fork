BEGIN;

-- Suppression des tables dans l'ordre inverse des dépendances
DROP TABLE IF EXISTS "reservation_ticket";
DROP TABLE IF EXISTS "ticket";
DROP TABLE IF EXISTS "attraction";
DROP TABLE IF EXISTS "category";
DROP TABLE IF EXISTS "reservation";
DROP TABLE IF EXISTS "message";
DROP TABLE IF EXISTS "user";

-- Création des tables dans l'ordre correct
-- Table "user" doit être créée avant les autres tables
CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "last_name" VARCHAR(80) NOT NULL,
  "first_name" VARCHAR(80) NOT NULL,
  "email" VARCHAR(320) UNIQUE NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "role" VARCHAR(20) NOT NULL CHECK (role IN ('utilisateur', 'administrateur'))
);

-- Table "category" avant "attraction"
CREATE TABLE "category" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "description" TEXT
);

-- Table "attraction" fait référence à "category"
CREATE TABLE "attraction" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(150) NOT NULL,
  "description" TEXT,
  "image" VARCHAR(255),
  "category_id" INT REFERENCES "category"("id")
);

-- Table "ticket" n'a pas de dépendances
CREATE TABLE "ticket" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "price" DECIMAL(10, 2) NOT NULL,
  "quantity" INT NOT NULL
);

-- Table "reservation" fait référence à "user" et "attraction"
CREATE TABLE "reservation" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user"("id"),
  "visit_date" DATE NOT NULL,
  "status" VARCHAR(20) NOT NULL CHECK (status IN ('confirmée', 'annulée'))
  "total_price" DECIMAL(10, 2) NOT NULL,
);

-- Table "message" fait référence à "user"
CREATE TABLE "message" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user"("id"),
  "last_name" VARCHAR(80) NOT NULL,
  "first_name" VARCHAR(80) NOT NULL,
  "content" VARCHAR(500) NOT NULL,
  "sent_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table "reservation_ticket" fait référence à "reservation" et "ticket"
CREATE TABLE "reservation_ticket" (
  "id" SERIAL PRIMARY KEY,
  "reservation_id" INT REFERENCES "reservation"("id"),
  "ticket_id" INT REFERENCES "ticket"("id"),
  "quantity" INT NOT NULL
);

COMMIT;
