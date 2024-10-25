const path = require('path')
const fs = require('fs')
const db = require('../db')
const migrate = async () => {
    const createUserTableSql = fs.readFileSync(path.resolve(__dirname, "./user-ddl.sql"), "utf-8");
    const createArticlesTableSql = fs.readFileSync(path.resolve(__dirname, "./articles-ddl.sql"), "utf-8");
    const createTagsTableSql = fs.readFileSync(path.resolve(__dirname, "./tags-ddl.sql"), "utf-8");
    const createArticlesTagsTableSql = fs.readFileSync(path.resolve(__dirname, "./articles-tags-ddl.sql"), "utf-8");

    try {
        db.query(createUserTableSql);
        db.query(createArticlesTableSql);
        db.query(createTagsTableSql);
        db.query(createArticlesTagsTableSql);
    } catch (error) {
        throw error;
    }


};

migrate();