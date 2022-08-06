BEGIN;

DROP TABLE IF EXISTS "user", product, category, product_has_category;

-- Create table

CREATE TABLE "user" (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "role" TEXT NOT NULL DEFAULT 'User',
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    country TEXT DEFAULT 'France',
    city TEXT,
    street TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE category (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);

CREATE TABLE product (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "description" TEXT NOT NULL,
    price INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ
    category_id INTEGER NOT NULL REFERENCES category(id) ON DELETE CASCADE
);

CREATE TABLE product_has_category (
    product_id INTEGER NOT NULL REFERENCES category(id) ON DELETE CASCADE,
    category_id INTEGER NOT NULL REFERENCES product(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (product_id, category_id)
);

-- Seeding

INSERT INTO category("name") VALUES
('Bougie'),
('Savon'),
('Poterie'),
('Bijoux');

INSERT INTO product("name", description, price, image, category_id) VALUES
('Deux coquillage aux monoi', '2 petits coquillage au monoi parfait pour le salon', 12, '2005398278', 1),
('Aux fragances et fleurs de la ville de grasse', 'Aux fragances et fleurs de la ville de grasse parfait enchanter votre salon', 20, '2005384957, 2005414866', 1),
('Bord de mer parfum ocean', 'Parfait pour vous faire découvrir la mer', 12, '2005494680', 2),
('Bord de mer parfum ocean avec 6 coquillages et bois flotté', 'Parfait pour vous faire découvrir le bord de mer', 20, '1999607166', 3);

INSERT INTO "user"(first_name, last_name, email) VALUES
('Nathan', 'Bardi', 'nathan@gmail.com'),
('Nelly', 'Viau', 'nelly@gmail.com'),
('Cedric', 'Viau', 'cedric@gmail.com');

INSERT INTO product_has_category(product_id, category_id) VALUES 
(1, 1),
(2, 1),
(3, 2),
(4, 3);

COMMIT;