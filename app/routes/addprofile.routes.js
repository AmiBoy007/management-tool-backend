module.exports = (app) => {
    const AddProfile = require('../controllers/add_profile_controller.js');

    // Create a new User
    app.post('/addprofile', AddProfile.create);

   // Retrieve all AddProfile
//    app.get('/signupuser', AddProfile.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/AddProfile/:noteId', AddProfile.findOne);

    // // Update a Note with noteId
    // app.put('/AddProfile/:noteId', AddProfile.update);

    // // Delete a Note with noteId
  //  app.delete('/signupuserdelete/:signupuserId', AddProfile.delete);
}