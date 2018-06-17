const connection = require('./db/config');
const express = require('express');

const app = express()
const port = process.env.PORT || 3000;

const postRouters = require('./routes/post');

app.use(postRouters);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
