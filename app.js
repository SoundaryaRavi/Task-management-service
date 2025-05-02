const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

const cors = require('./middlewares/cors');
const route = require('./routes/route');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors.allowCrossDomain);

let mongoUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/task"

mongoose.connect(mongoUrl).then((res) => {
    console.log('Connected to DB');
}).catch((error) => {
    console.log('Error while connecting to DB');
});

const port = process.env.PORT || 8080;

app.use('/api', route);

app.listen(port);

console.log('Express listening on port...', port);