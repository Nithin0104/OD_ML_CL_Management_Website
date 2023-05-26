const users = require('../models/workout')

//GET all workouts

//GET a single workout

//create new workout
const createNewUser = async (req, res) => {const {username,password,role,email,rollno}=req.body
try{
    const user = await users.create({username,password,role,email,rollno})
    res.status(200).json(user)
}
catch(err){
    res.status(400).json({message: err.message})
}}

//delete a workout

//update a workout


module.exports = {
    createNewUser
}