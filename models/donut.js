const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DonutSchema = new Schema({

        contact: {
            mail : {
                type: String,
                required: true
            },
            phone : {
                type: String,
                required: true
            },
            name : {
                type: String,
                required: true
            },
            address : {
                type: String,
                required: true
            },
            city : {
                type: String,
                required: true
            },
            orderstatus : {
                type: String,
                default: "Pending",
                required: true
            }
        },
        donuts: [{
            glaze: {
                type: String,
                required: true
            },
            topping: {
                type: String,
                required: true
            },
            extra: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }],
        card: {
            shape: {
                type: String,
                required: false
            },
            url: {
                type: String,
                required: false
            }
        },
        orderdate : {
            type: Date,
            default: Date.now,
            required: false
        }

});

const Donut = mongoose.model('Donut', DonutSchema);

module.exports = Donut;
