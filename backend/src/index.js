const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('./env');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(env.PORT);

console.log(`Running on port: ${env.PORT}`);
