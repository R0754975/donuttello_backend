const User = require('../../../models/user');

const signup = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({username: username});
    await user.setPassword(password);
    await user.save().then(result => {
        res.json({
            message: 'User created'
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
        res.json({
            "user" : result,
            });
    }).catch(err => {
        res.json({
            message: 'User not logged in'
        });
    });
};



module.exports.signup = signup;
module.exports.login = login;