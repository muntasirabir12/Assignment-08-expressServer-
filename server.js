const express = require('express');
const app = express();
const PORT = 5000;

// Route 1: Home
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express.js Server' });
});

// Route 2: About
app.get('/about', (req, res) => {
  res.json({ message: 'This is About  Page' });
});

// Route 3: Contact
app.get('/contact', (req, res) => {
  res.json({ message: 'This is Contact Page' });
});

// Route 4: Services
app.get('/services', (req, res) => {
  res.json({ message: 'Our Services' });
});

// Route 5: Students
app.get('/students', (req, res) => {
  res.json({ message: 'Student List' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});