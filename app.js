const express = require("express");
const db = require("./db/db");

// Set up the express app
const app = express();

app.get('/api/v1/calapp', (req, res) => {
  // res.json({ msg: "API works!!" });
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

