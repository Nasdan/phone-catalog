const express = require('express');
const path = require('path');
const env = require('./env');

const app = express();
const publicPath = path.resolve(__dirname, '../dist');

app.use(express.static(publicPath));
app.listen(env.PORT);

console.log(`Running on port: ${env.PORT}`);
