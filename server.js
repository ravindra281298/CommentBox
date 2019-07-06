require('./models/db');

const express = require('express');

const commentController = require('./controllers/commentController');

var app = express();

app.listen(3000, () => {
    console.log('Express server started at port 3000');
});

app.use('/employee', commentController);