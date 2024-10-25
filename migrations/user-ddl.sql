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

CREATE TABLE tags (
    id int(10) NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    created_at datetime DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id),
    UNIQUE KEY tags_unique (title)
);
CREATE TABLE articles {
    id int(10) NOT NULL AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    content varchar(100) NOT NULL,
    slug mediumtext NOT NULL,
    author_id int(10) unsigned NOT NULL,
    created_at datetime DEFAULT CURRENT_TIMESTAMP(),
    updated_at datetime DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id),
    UNIQUE KEY article_unique (slug),
    KEY article_author_fk (author_id),
    CONSTRAINT article_author_fk FOREIGN KEY (author_id) REFERENCES users (id) ON DELETE CASCADE
};