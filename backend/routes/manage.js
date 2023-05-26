const express = require('express')
const { createNewUser } = require('../controllers/manageController')

const router = express.Router()

//GET all workouts
// router.get('/', (req, res) => {
//     res.json({message: 'GET all workouts'})
// })



//GET a single workout
router.get('/:id', (req, res) => {
    res.json({message: 'GET a single workout'})
})

//POST a workout
router.post('/', async (req, res) => {
    
      
})

//PUT a workout
router.put('/:id', (req, res) => {
    res.json({message: 'PUT a workout'})
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a workout'})
})

//update a workout
router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE a workout'})
})


module.exports = router