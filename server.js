// Import necessary modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // For parsing form data

const app = express();
const port = 3000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve specific HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'home.html'));
});
// (Other routes)

// Profile Update Route
app.post('/update-profile', (req, res) => {
    const { name, email, phone, address } = req.body;

    // Here you would typically update the user's profile in the database.
    // For demonstration, we'll just log the details.
    console.log('Updated Profile:', { name, email, phone, address });

    // Redirect to profile page or render a success message
    res.redirect('/profile'); // Assumes you have a route for '/profile'
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


const mongoose = require('mongoose');
const User = require('./models/User'); // Import your user model

app.post('/update-profile', async (req, res) => {
    const { name, email, phone, address } = req.body;
    const userId = req.session.userId; // Assuming you store the user ID in session

    try {
        await User.findByIdAndUpdate(userId, { name, email, phone, address });
        res.redirect('/profile'); // Redirect to profile page after updating
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).send('Failed to update profile');
    }
});
