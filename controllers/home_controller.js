


// this function takes user to home
module.exports.home = async function(req, res) {

    return res.render('home',{
        title : "Habit Tracker"
    })
}