module.exports = (app) => {
    const SignUpUser = require('../controllers/signup.controller.js');

    // Create a new User
    app.post('/signupuser', SignUpUser.create);

   // Retrieve all SignUpUser
    app.get('/signupuser', SignUpUser.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/SignUpUser/:noteId', SignUpUser.findOne);

    // // Update a Note with noteId
    // app.put('/SignUpUser/:noteId', SignUpUser.update);

    // // Delete a Note with noteId
    app.delete('/signupuserdelete/:signupuserId', SignUpUser.delete);
}