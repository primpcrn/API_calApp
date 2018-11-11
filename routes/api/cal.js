const express = require("express");
// const keys = require("././config/keys");
const router = express.Router();

//Import models
var Cal = require("../../model/Cal");

const calRoute = express.Router();

calRoute.route('/caldata')
    .get((req, res) => {
        Cal.find({}, (err, cal_app) => {
            // console.log(cal_app)
            res.json(cal_app)
        })  
    });

calRoute.route('/add').post(function (req, res) {
    const calData = new Cal(req.body);
    calData.save()
          .then(calData => {
          res.status(200).json({'calData': 'Course added successfully'});
          })
          .catch(err => {
          res.status(400).send("unable to save the calData into database");
          });
      });

module.exports = calRoute;