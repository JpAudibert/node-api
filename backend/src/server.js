const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/node-api', {
    useNewUrlParser: true,
});

requireDir('./models');

//rotas
app.use('/node-api', require('./routes'));

app.listen(3001);