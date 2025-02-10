const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for frontend communication

// API Keys
const geonamesApiKey = process.env.GEO_API_KEY;
const weatherAPIKey = process.env.WB_API_KEY;
const pixabayAPIKey = process.env.PIX_API_KEY;

/**
 * Route to fetch location data from Geonames API
 */
app.get("/location/:city", async (req, res) => {
    const { city } = req.params;
    const geoUrl = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${geonamesApiKey}`;
    
    try {
        const response = await axios.get(geoUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch location data" });
    }
});

/**
 * Route to fetch weather data from Weatherbit API
 */
app.get("/weather/:lat/:lon", async (req, res) => {
    const { lat, lon } = req.params;
    const weatherUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${weatherAPIKey}`;
    
    try {
        const response = await axios.get(weatherUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

/**
 * Route to fetch images from Pixabay API
 */
app.get("/image/:query", async (req, res) => {
    const { query } = req.params;
    const pixabayUrl = `https://pixabay.com/api/?key=${pixabayAPIKey}&q=${encodeURIComponent(query)}&image_type=photo`;
    
    try {
        const response = await axios.get(pixabayUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch image data" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
