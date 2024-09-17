const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve static frontend files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple API endpoint
app.get('/your_api', (req, res) => {
  const data = {
    id: 1,
    title: "My First Custom API",
    body: "This is a custom API response from my Node.js app!",
    userId: 123
  };
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
