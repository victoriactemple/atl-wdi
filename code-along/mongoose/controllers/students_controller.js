const express = require('express')
const router = express.Router()
const Schema = require('../db/schema.js')

var StudentModel = Schema.StudentModel


router.get('/', (req, res) => {
    StudentModel.find({})
        .then((students) => {
            res.render('student/index', {
                students: students
            })
        })
        .catch((error) =>{
            console.log(error)
        })
});

// SHOW ROUTE

router.get('/:id', (req, res) => {
    const studentId = req.params.id

    // this will return 
    StudentModel.findById(studentId)
        // will need to use a promise 
        .then((student) => {
            res.render('student/show')
                student: student
        })
})

// DELETE ROUTE

router.get('/:id/delete', (req, res) => {

    const studentId = req.params.id
    StudentModel.findOneAndRemove(studentId)
        .then((student) => {
            res.send("Student deleted")
        })
})




module.exports = router