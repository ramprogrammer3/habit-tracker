
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


// create a new user

module.exports.create = async(req,res)=>{
    try {
         // console.log(req.body);
         if(req.body.password != req.body.confirm_password) {
            // console.log(req.body);
            console.log('Password mismatch!');
            req.flash('error', 'Password mismatch');
            return res.redirect('back');
        }
        let user = await User.findOne({ email: req.body.email });
        // if user is not present 
        if (!user) {
            // create the user 
            // console.log(req.body);
            await User.create(req.body);
            // redirect to sign in page
            return res.redirect("/users/sign-in");
        }
        console.log('User is already present');
        return res.redirect('back');
        
    } catch (error) {
        console.log('Error in creating the user ', error);
        return res.redirect('back');
    }
}


// signs in existing user
module.exports.createSession = async function(req, res) {
    req.flash('success', 'You are logged in!');
    return res.redirect('/');
}

// signs out the user
module.exports.destroySession = async function(req, res, done) {
    req.logout((err) => {
        if (err) {
            return done(err);
        }
    });
    req.flash('success' , 'You are logged out!');
    return res.redirect('/users/sign-in');
}



