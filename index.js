const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

// Define a simple endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello World!',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export for testing purposes 