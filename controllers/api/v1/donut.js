const Donut = require("../../../models/donut");

const getAll = (req, res) => {
    Donut.find({}, (err, donuts) => {
        if (err) {
            res.json({ err });
        }  res.json({
            "status": "success",
            "data" : {
                "donuts" : donuts,
            },
        });
    });
};

const getOne = (req, res) => {
    Donut.findById({"_id": req.params.id}, (err, order) => {
        let donut = order.donuts.id(req.params.donut);
        if (err) {
            res.json({ err });
        }  res.json({
            "status": "success",
            "data" : {
                "donut" : donut,
            },
        });
    });
};

const create = (req, res) => {
    let donut = new Donut();
    donut.contact = req.body.contact;
    donut.donuts = req.body.donuts;
    donut.card = req.body.card;
    donut.save((err, donut) => {
        if (err) {
            res.json({ err });
        } else {
            res.json({
                "status": "success",
                "body": donut
            })
        }
    });
};

const deleteDonut = (req, res) => {
    Donut.findByIdAndDelete(req.params.id, (err, donut) => {
        if (err) {
            res.json({ err });
        }  
        res.json({
            "status": "success",
            "data" : {
                "donut" : "donut " + req.params.id +  " deleted"
            }
        });

    });
};

const updateDonut = (req, res) => {
    Donut.updateOne(
        { 
        _id : req.params.id,
        donuts : { $elemMatch : { _id : req.params.donut } } 
    }, 
    { $set : {
                "donuts.$.glaze" : req.body.glaze,
                "donuts.$.filling" : req.body.filling,
                "donuts.$.topping" : req.body.topping,
                "donuts.$.extra" : req.body.extra,
                "donuts.$.quantity" : req.body.quantity
        }
    }, (err, body) => {
        if (err) {
           res.json({ err });
        }
        res.json({
            "status": "success",
            "data" : {
                "test" : req.body,
                "donut" : "donut " + req.params.donut +  " updated"
            }
        });
    }); 
};

            


module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.create = create;
module.exports.deleteDonut = deleteDonut;
module.exports.updateDonut = updateDonut;