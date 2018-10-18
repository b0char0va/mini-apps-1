CREATE DATABASE purchase;

USE purchase;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    email VARCHAR(100),
    password VARCHAR(60),
    address VARCHAR(100),
    city VARCHAR(60),
    state VARCHAR(60),
    zip_code VARCHAR(6),
    phone_number VARCHAR(10),
    credit_card VARCHAR(10),
    expiry_date VARCHAR(5),
    CVV VARCHAR(3),
    billing_zip_code VARCHAR(6),
    PRIMARY KEY(id)
);