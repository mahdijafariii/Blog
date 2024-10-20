CREATE TABLE users (
    id int(10) NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    avatar varchar(255) DEFAULT NULL,
    password varchar(255) DEFAULT NULL,
    email varchar(255) DEFAULT NULL,
    username varchar(255) NOT NULL UNIQUE,
    provider ENUM('local', 'google', 'meta') NOT NULL DEFAULT 'local',
    role ENUM('admin', 'user') NOT NULL DEFAULT 'user',

    PRIMARY KEY (id)
);