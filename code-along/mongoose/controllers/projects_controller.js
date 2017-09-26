const express = require('express')
const router = express.Router({mergeParams: true})
const Schema = require('../db/schema.js')

var StudentModel = Schema.StudentModel



// students/:studentId/projects
// for projects index route
router.get('/', (req, res) => {
    const studentId = req.params.studentId

    StudentModel.findById(studentId)
        .then((student) => {
       //find and listal of the student's projects
        //They're already there students.projects

         //display each project in a div
        res.render('project/index', {
            student: student
        })

        })
        .catch((error) => {
            console.log(error)
        })
})


module.exports = router