const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve specific HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'register.html'));
});

app.get('/catalog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'catalog.html'));
});

app.get('/forget-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'forget-password.html'));
});

app.get('/order', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'order.html'));
});

app.get('/password-strength', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'password-strength.html'));
});

app.get('/payment', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'payment.html'));
});

app.get('/shopping', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'shopping.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
