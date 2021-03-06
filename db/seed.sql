DROP DATABASE IF EXISTS cloud;
CREATE DATABASE cloud;
\c cloud


CREATE TABLE products
(
    id serial primary key,
    name varchar(255),
    type varchar(255),
    unit varchar (255),
    cost FLOAT
);
CREATE TABLE clients
(
    id serial primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    phone varchar(255) not null 
);
CREATE TABLE request
(
    id serial primary key,
    date VARCHAR(255),
    location varchar(255),
    total FLOAT,
    client_id int not null,
    client_email varchar(255) not null,
    FOREIGN Key (client_id) REFERENCES clients
);
CREATE TABLE reqProduct
(
    id serial primary key,
    product_id int not null,
    FOREIGN KEY (product_id) REFERENCES products on delete cascade on update cascade,
    request_Id int not null,
    FOREIGN Key (request_Id) REFERENCES request on delete cascade on update cascade,
    price FLOAT
);

CREATE TABLE category(
id serial primary key,
storage int,
month int,
price FLOAT
);

INSERT INTO category(storage,month,price) VALUES (1, 1,0.026);


INSERT INTO products
    (name, type,unit,cost)
VALUES
    ('CPU','i5','none',173),
    ('CPU','i7','none',424),
    ('RAM','AMD','1GB',35),
    ('disk','WD','1TB',49.99),
    ('switch','Cisco','none',34.9),
    ('router','Cisco','none',89.99);

    INSERT INTO clients
    (name, email, phone )
VALUES
('Hanan', 'hanan111@hotmail.com', '0553299864');

INSERT INTO request 
(date, location, total, client_id, client_email) VALUES
('23/3/2019', 'KSA', '400', '1', 'hanan111@hotmail.com');