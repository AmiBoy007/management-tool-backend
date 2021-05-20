var jwt = require('jsonwebtoken');

const SignUpUser = require('../models/signup-user.js');


// Retrieve and return all users from the database.
exports.findEmail = (req, res) => {
    SignUpUser.findOne({ email: req.query.email })
    .then(email => {
        if(!email) {
            return res.status(404).send({
                message: "User not found with id " + req.query.email
            });            
        }
        var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
        //return res.send(res.status(200).json({
            return res.status(200).json({
                token
              });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return  res.status(404).json({
                message: "User not found with id " + req.query.email
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.query.email
        });
    });
};

