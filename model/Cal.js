const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const callAppSchema = new Schema(
    {
        "value_a": String,
        "value_b": String,
        "operator_value": String,
        "result_value": Number
    },{
        collection: 'cal_app'
    }
);

module.exports = mongoose.model("callAppSchema", callAppSchema);