// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser'); // Middleware to parse incoming request bodies
const cors = require('cors'); // Middleware for cross-origin allowance

/* Middleware */
// Configuring express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = process.env.PORT || 3000; // Allow port to be set by environment variable
const server = app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});

// GET route to retrieve all project data
app.get('/all', (req, res) => {
    res.send(projectData);
    console.log('GET request received. Current projectData:', projectData);
});

// POST route to add data to the projectData object
app.post('/add', (req, res) => {
    const { date, temperature, feel } = req.body;

    // Validate the incoming request data
    if (!date || !temperature || !feel) {
        return res.status(400).send({ error: 'Missing required data!' });
    }

    projectData = { date, temperature, feel }; // Update the projectData object
    res.send({ message: 'Data successfully added!', data: projectData });
    console.log('POST request received. Updated projectData:', projectData);
});
