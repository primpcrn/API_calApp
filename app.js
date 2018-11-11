const express = require("express");
// const db = require("./db/db");
const keys = require("./config/keys");

var cal = require("./routes/api/cal");
// DB config
const db = require("./config/keys").mongoURI;
// Set up the express app
const app = express();

app.use(express.static('./public'))

app.use("/api/cal", cal);

app.get('/api/v1/app', (req, res) => {
  // res.json({ msg: "API works!!" });
  res.status(200).send({
    success: 'true',
    message: 'DB retrieved successfully',
    DB: db
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

