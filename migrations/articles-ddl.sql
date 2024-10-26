CREATE TABLE articles (
    id int(10) NOT NULL AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    content varchar(100) NOT NULL,
    slug mediumtext NOT NULL,
    author_id int(10)  NOT NULL,
    created_at datetime DEFAULT CURRENT_TIMESTAMP(),
    updated_at datetime DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id),
    UNIQUE KEY article_unique (slug),
    KEY article_author_fk (author_id),
    CONSTRAINT article_author_fk FOREIGN KEY (author_id) REFERENCES users (id) ON DELETE CASCADE
);

