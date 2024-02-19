// Require the express module
const express = require('express');

// Create a new express app
const app = express();

// Use the express.static middleware to serve the HTML file as a static asset
app.use(express.static(__dirname));

// Define the routes for the three pages
app.get('/', (req, res) => {
  // Send the HTML file as a response for the home page
  res.sendFile(__dirname + '/index.html');
});

app.get('/progress', (req, res) => {
  // Send the response for the about page
  res.sendFile(__dirname + '/progress.html');
});

app.get('/diet', (req, res) => {
  // Send the response for the contact page
  res.sendFile(__dirname + '/diet.html');
});

app.get('/workout', (req, res) => {
  // Send the response for the contact page
  res.sendFile(__dirname + '/workout.html');
});

// Start the server on port 3000
app.listen(3000, () => {
  // Log a message when the server is ready
  console.log('Server is running on port 3000.');
});
