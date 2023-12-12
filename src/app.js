const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/launches');

app.use(express.urlencoded());
app.use(express.json());

const launches = require('./routes/launchesRoute');
app.use('/', launches);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})