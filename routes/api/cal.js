const express = require("express");
// const keys = require("././config/keys");

const router = express.Router();

//Import models
var Cal = require("../../model/cal_app");

const calRoute = express.Router();
calRoute.route('/caldata')
    .get((req, res) => {
        Cal.find({}, (err, cal_app) => {
            res.json(cal_app)
        })  
    })

module.exports = router;