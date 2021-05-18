var jwt = require('jsonwebtoken');

const SignUpUser = require('../models/signup-user.js');


// Retrieve and return all users from the database.
exports.findOne = (req, res).then(signupuser => {
        if(!signupuser) {
            return res.status(404).send({
                message: "signupuser not found with id " + req.params.signupuserId
            });
        }
        res.send({message: "successfully! login", code: "success"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "signupuser not found with id " + req.params.signupuserId
            });                
        }
        return res.status(500).send({
            message: "Could not delete signupuser with id " + req.params.signupuserId
        });
});

