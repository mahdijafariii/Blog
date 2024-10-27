const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoutes = require('../Blog/routes/auth')
const articleRoutes = require('../Blog/routes/articles')
const tagsRoutes = require('../Blog/routes/tags')

const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname + 'public')));


app.use("/api/auth",authRoutes)
app.use("/api/article",articleRoutes)
app.use("/api/tags",tagsRoutes)


module.exports = app;

