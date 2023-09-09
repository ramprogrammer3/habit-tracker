
const Habit = require("../models/Habit");

// this function creates a new habit
module.exports.createHabit = async function(req, res) {
    try {
        // console.log("req.body: ", req.body);
        // console.log("req.user: ", req.user);
        let habit = await Habit.findOne({title: req.body.title, user: req.user._id}).populate();
        // console.log(habit);
        if(habit) {
            console.log('Habit exists');
            return res.redirect('/');
        } else {
            let habit = await Habit.create({
                title: req.body.title,
                desc: req.body.desc,
                user: req.user._id,
                dates : {date : await getTodayDate() , completed : "none"}
            });

            req.flash('success', 'Habit Created Successfully');
            return res.redirect('/');
        }
    } catch (error) {
        console.log('Error in habitController/createHabit: ', error);
        return;
    }
}


// this function will change the current status of habit
module.exports.toggleStatus = async function(req, res) {
    try {
        let id = req.query.id;
        let date = req.query.date;
        const habit = await Habit.findById(id);
        console.log(date);

        if(!habit) {
            console.log('Habit not present!');
            return res.redirect('/');
        }

        // take out the date array of the habit.
        let dates = habit.dates;
        let found = false;
        // changes the complete argument accodingly.
        dates.find((item, index) =>{
            if(item.date == date){
                if(item.complete === 'y'){
                    item.complete = 'n';
                }else if(item.complete === 'n'){
                    item.complete = 'x';
                }else if(item.complete === 'x'){
                    item.complete = 'y';
                }
                found = true;
            }
        });

        if(!found) {
            dates.push({date : date, complete : 'y'});
        }
        // at last save the dates.
        habit.dates = dates;
        await habit.save();
        return res.redirect('/');
        
    } catch (error) {
        console.log('Error in habitController/toggleStatus', error);
        return res.render('404', {
            title: "Not Found"
        });
    }
}

