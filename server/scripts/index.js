const express = require('express');
const cors = require('cors'); // Подключаем cors
const mysql = require('mysql2'); // Подключаем mysql2
const app = express();

// Используем cors для разрешения CORS
app.use(cors());

// Создаем подключение к базе данных MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_manager'
});

// Проверяем подключение к базе данных
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Создание контроллера, который будет обрабатывать запрос GET на /test
app.get('/test', (req, res) => {
    const response = new TestResponse("Hello, World!123", 42);
    res.json(response);
});

// Новый маршрут для получения информации о базе данных
app.get('/check', (req, res) => {
    db.query('SHOW TABLES', (error, results) => {
        if (error) {
            return res.status(500).json({
                message: 'Error retrieving tables',
                error: error.message
            });
        }

        const tables = results.map(row => Object.values(row)[0]); // Извлекаем имена таблиц
        res.json({
            message: "Database information retrieved successfully",
            tables: tables
        });
    });
});

// Класс TestResponse
class TestResponse {
    constructor(message, number) {
        this.message = message;
        this.number = number;
    }
}

// Запуск сервера на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
