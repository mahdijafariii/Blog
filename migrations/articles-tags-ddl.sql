CREATE TABLE articles_tags (
    id int(10) NOT NULL AUTO_INCREMENT,
    article_id int(10) unsigned NOT NULL,
    tag_id int(10) unsigned NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY tag_articles_unique (article_id , tag_id),

    KEY articles_tags__tags_fk (tag_id),
    CONSTRAINT articles_tags__tags_fk FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE
    KEY articles_tags__article_fk (tag_id),
    CONSTRAINT articles_tags__article_fk FOREIGN KEY (article_id) REFERENCES articles (id) ON DELETE CASCADE
)