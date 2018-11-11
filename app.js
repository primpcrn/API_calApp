const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
// const db = require("./db/db");
// const keys = require("./config/keys");

var calRoute = require("./routes/api/cal");
// DB config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
   .connect(db)
   .then(() => console.log("MongoDB connected"))
   .catch(err => console.log(err));


// Set up the express app
const app = express();

app.use(express.static('./public'))

app.use(bodyParser.json());
app.use("/api/calRoute", calRoute);

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

