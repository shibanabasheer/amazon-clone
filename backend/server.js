const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample in-memory database
const users = [];

// Register endpoint
app.post('/api/register', (req, res) => {
  const { name, email, password, mobile } = req.body;
  const newUser = { id: users.length + 1, name, email, password, mobile };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
