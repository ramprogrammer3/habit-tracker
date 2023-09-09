
const User = require("../models/User");


// signup handler or page 

module.exports.signUp = async (req, res) => {
    try {
        return res.render('user_sign_up', {
            title: "Sign Up"
        });
    } catch (error) {
        console.log('Error in usersController/signUp: ', error);
        return res.redirect('back');
    }
}


// redirects the user to sign in page
module.exports.signIn = async function(req, res) {
    try {
        return res.render('user_sign_in', {
            title: "Sign In"
        });
    } catch (error) {
        console.log('Error in usersController/signIn: ', error);
        return res.redirect('back');
    }
}




