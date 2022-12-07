const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({username: username});
    await user.setPassword(password);
    await user.save().then(result => {
        let token = jwt.sign({
            uid: result._id
        }, "secret");

        res.json({
            "status": "success",
            "token" : token
        });
    }).catch(err => {
        res.json({
            message: 'User not created'
        });
    }
    );

};

const login = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    const user = await User.authenticate()(username, password).then(result => {
        if(result.user === false){

            return res.json({
                "status": "failed",
                "message" : "Invalid username or password"
            })
        }

        let token = jwt.sign({
            uid: result._id
        }, "secret"); 

        res.json({
            "status": "success",
            "token" : token,
            });
    }).catch(err => {
        res.json({
            message: err
        });
    });
};

const auth = (req, res, next) => {
    res.json({
        "status": "success"
    })
}

module.exports.signup = signup;
module.exports.login = login;
module.exports.auth = auth;