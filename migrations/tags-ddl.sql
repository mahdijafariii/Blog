CREATE TABLE tags (
    id int(10) NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    created_at datetime DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id),
    UNIQUE KEY tags_unique (title)
);