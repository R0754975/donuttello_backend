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
            orderdate : {
                type: Date,
                default: Date.now,
                required: false
            },
            orderstatus : {
                type: String,
                default: "Pending",
                required: false
            }
        },
        donuts: [{
            glaze: {
                type: String,
                required: true
            },
            filling: {
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
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }

});

const Donut = mongoose.model('Donut', DonutSchema);

module.exports = Donut;
