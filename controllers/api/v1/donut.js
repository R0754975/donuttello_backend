const cookieParser = require("cookie-parser");
const Donut = require("../../../models/donut");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET;

const getAll = (req, res) => {
    Donut.find({}, (err, donuts) => {
        if (err) {
            res.json({ err });
        } res.json({
            "status": "success",
            "data": donuts
        });
    });
};

const getOne = (req, res) => {
    Donut.findById({ "_id": req.params.id }, (err, order) => {
        let donut = order.donuts.id(req.params.donut);
        if (err) {
            res.json({ err });
        } res.json({
            "status": "success",
            "data": donut
        });
    });
};

const create = (req, res) => {
    let donut = new Donut();
    donut.contact = req.body.contact;
    donut.donuts = req.body.donuts;
    donut.card = req.body.card;
    donut.save().then(result => {
        let token = jwt.sign({
            oid: result._id
        }, secret);
        res.json({
            "status": "success",
            "data": {
                "donut": donut,
                "token": token
            }

        })
        }).catch(err => {
            res.json({ err });
        }
    );
}
const deleteOrder = (req, res) => {
    Donut.findByIdAndDelete(req.params.id, (err, donut) => {
        if (err) {
            res.json({ err });
        }
        res.json({
            "status": "success",
            "data": {
                "donut": "order " + req.params.id + " deleted"
            }
        });

    });
};

const deleteDonut = (req, res) => {
    Donut.findById(req.params.id, (err, order) => {
        let donut = order.donuts.id(req.params.donut);
        donut.remove();
        order.save((err, order) => {
            if (err) {
                res.json({ err });
            }
            res.json({
                "status": "success",
                "data": {
                    "donut": "donut " + req.params.donut + " deleted"
                }
            });
        });
    });
};

const updateDonut = (req, res) => {
    Donut.updateOne(
        {
            _id: req.params.id,
            donuts: { $elemMatch: { _id: req.params.donut } }
        },
        {
            $set: {
                "donuts.$.glaze": req.body.glaze,
                "donuts.$.topping": req.body.topping,
                "donuts.$.extra": req.body.extra,
                "donuts.$.quantity": req.body.quantity
            }
        }, (err, body) => {
            if (err) {
                res.json({ err });
            }
            res.json({
                "status": "success",
                "data": {
                    "test": req.body,
                    "donut": "donut " + req.params.donut + " updated"
                }
            });
        });
};


const getOrder = (req, res) => {
    Donut.findById(req.params.id, (err, donut) => {
        if (err) {
            res.json({ err });
        } res.json({
            "status": "success",
            "data": donut
        });
    });
};

const updateOrder = (req, res) => {
    Donut.updateOne(
        {
            _id: req.params.id
        }
        , {
            $set: {
                "contact.orderstatus": req.body.status,

            }
        }, (err, body) => {
            if (err) {
                res.json({ err });
            }
            res.json({
                "status": "success",
                "data": "order " + req.params.id + " updated"
            });
        });
};

const auth = (req, res, next) => {
    res.json({
        "status": "success"
    })
}


module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.create = create;
module.exports.deleteOrder = deleteOrder;
module.exports.updateDonut = updateDonut;
module.exports.deleteDonut = deleteDonut;
module.exports.getOrder = getOrder;
module.exports.updateOrder = updateOrder;
module.exports.auth = auth;