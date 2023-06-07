const express = require('express');
const router = express.Router();

module.exports = (connection) => {


    router.get('/', function (req, res) {
        console.log('Hello world!');
        res.send('Hello world!');
    });

    // เพิ่มเส้นทางของเราที่เชื่อมต่อกับฐานข้อมูล
    router.get('/api/users', (req, res) => {
        connection.query('SELECT * FROM users', (error, results, fields) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.json(results);
            }
        });
    });

    return router;
};