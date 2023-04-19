DROP DATABASE IF EXISTS mainDB;

CREATE DATABASE mainDB;

use mainDB;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE work_images(
    id INT NOT NULL,
    user_id INT NOT NULL,
    file_path VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id)
    REFERENCES users(id) 
);

CREATE TABLE locations(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    location VARCHAR(200), 
    FOREIGN KEY (user_id)
    REFERENCES users(id)
);