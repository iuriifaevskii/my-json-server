const bodyParser = require('body-parser')
const connection = require('./db/config');
const express = require('express');

const app = express()
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const postRouters = require('./routes/post');
const userRouters = require('./routes/user');

app.use(postRouters);
app.use(userRouters);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
