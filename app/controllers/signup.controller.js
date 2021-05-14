var jwt = require('jsonwebtoken');

const SignUpUser = require('../models/signup-user.js');
exports.create = (req, res) => {
    // Validate request
    if(!req.body.user_name) {
        return res.status(400).send({
            message: req.body.user_name
        });
    }
    if(!req.body.email) {
        console.log(req.body.email,"req.body.user_name")
        return res.status(400).send({
            message: "email can not be empty"
        });
    }
    if(!req.body.password) {
        return res.status(400).send({
            message: "Password can not be empty"
        });
    }

    // Create a User
    const signupuser = new SignUpUser({
        user_name: req.body.user_name,
        email: req.body.email,
        password:req.body.password
    });
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    // Save Note in the database
    signupuser.save()
    .then(data => {
        res.status(200).send({bearer:token});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
    const skip = parseInt(req.query.skip);// Make sure to parse the skip to number
    const searchQuery = req.search
    if(searchQuery){
        const { search } = searchQuery;
        $or: [
            {
                username: {
                    $regex: new RegExp(search.trim(), 'i'),
                },
            },
            // {
            //     last_name: {
            //         $regex: new RegExp(search.trim(), 'i'),
            //     },
            // },
            // {
            //     'email': {
            //         $regex: new RegExp(search.trim(), 'i'),
            //     },
            // },
        ]
    }
    SignUpUser.find({
        
    }).skip(skip)
    .limit(limit)
    .then(signupuser => {
        res.status(200).send(signupuser);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Delete a note with the specified usereId in the request
exports.delete = (req, res) => {
    SignUpUser.findByIdAndRemove(req.params.signupuserId)
    .then(signupuser => {
        if(!signupuser) {
            return res.status(404).send({
                message: "signupuser not found with id " + req.params.signupuserId
            });
        }
        res.send({message: "signupuser deleted successfully!"});
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
};

// Search in complete data base
// exports.searchAll = (req, res) => {
//     SignUpUser.find(req.body.query)
//     .then(searchresult => {
//         res.status(200).send(searchresult);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving notes."
//         });
//     });
// };