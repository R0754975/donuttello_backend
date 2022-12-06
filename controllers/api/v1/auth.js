const testMessage = (req, res) => {
    res.json({
        "status": "success"
    })
};

module.exports.testMessage = testMessage;