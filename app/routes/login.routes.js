module.exports = (app) => {
    const SignUpUser = require('../controllers/login_controller.js');
   // Retrieve all SignUpUser
    app.get('/login', SignUpUser.findEmail);
}