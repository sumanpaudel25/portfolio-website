const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = 3000;

// Middleware to parse URL-encoded data (from forms)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// CSV Writer setup
const csvWriter = createCsvWriter({
    path: 'submissions.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
        { id: 'message', title: 'Message' },
    ],
    append: true
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    const record = [
        { name: name, email: email, message: message }
    ];

    csvWriter.writeRecords(record)
        .then(() => {
            console.log('The CSV file was updated successfully');
            res.send('Thank you for your submission!');
        })
        .catch(err => {
            console.error('Error writing to CSV file', err);
            res.status(500).send('An error occurred. Please try again later.');
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
