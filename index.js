const express = require('express');
require('dotenv').config();
const mysql = require('mysql2');

const app = express();
const cors = require('cors');
const connection = mysql.createConnection(process.env.DATABASE_URL);

app.use(cors());

const userApi = require('./routes/api/users/users')(connection);
app.use('/', userApi);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port', process.env.PORT || 3000);
});