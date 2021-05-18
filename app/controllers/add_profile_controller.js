const AddProfile = require('../models/add_profile.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    console.log(req.body.firstName,"req.body.firstName")
    if(!req.body.firstName) {
        return res.status(400).send({
            message: "First is required"
        });
    }
    if(!req.body.email) {
        return res.status(400).send({
            message: "First is required"
        });
    }
    if(!req.body.contact_number) {
        return res.status(400).send({
            message: "First is required"
        });
    }
    if(!req.body.address) {
        return res.status(400).send({
            message: "First is required"
        });
    }

    // Create a Note
    const addprofile = new AddProfile({
        firstName: req.body.firstName || "Untitled Note", 
        lastName: req.body.lastName,
        email: req.body.email,
        contact_number: req.body.contact_number,
        address: req.body.address,
        dob: req.body.dob,
    });

    // Save Note in the database
    addprofile.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding  the Profile."
        });
    });
};