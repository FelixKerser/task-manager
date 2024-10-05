const express = require('express');
const cors = require('cors'); // Подключаем cors
const mysql = require('mysql2'); // Подключаем mysql2
const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_manager'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/projects', (req, res) => {
    const query = 'SELECT * FROM projects';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching projects:', error); // Лог для ошибки
            return res.status(500).json({
                message: 'Error retrieving projects',
                error: error.message
            });
        }

        res.json({
            message: 'Projects retrieved successfully',
            projects: results
        });
    });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
