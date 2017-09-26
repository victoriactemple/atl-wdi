const express = require('express')
const router = express.Router()
const Schema = require('../db/schema.js')

var StudentModel = Schema.StudentModel

//Index Route
//displays all the students

router.get('/', (req, res) => {

    //Find all the students in the DB
    StudentModel.find({})
        .then((students) => {   
            //THEN once we're done finding all the students form the DB, Use Handlebars to create a <div> for each student 
            res.render('student/index', {
                students: students
            })
        })
        .catch((error) => {
            console.log(error)
        })
        
});


//NEW  ROUTE 
/// Need a route to display an empty form  - just getting some raw HTML

router.get('/new', (req, res) =>{
    //Display an empty form containing inputs for each student attribute from our schema
    res.render('student/new')
   
    
})


// SHOW ROUTE
//displays specific student by their own specific id
//trying to find and object with an id of "4023893483"

router.get('/:id', (req, res) => {

    //We need the Id, grab id from the params
    const studentId = req.params.id

    //Find the student y ID from the DB
    StudentModel.findById(studentId)
    //THEN, once the database has returned the single student's info, 
    //Use handlebars to create a div for the single student
        .then((student) => {
            res.render('student/show', {
                student: student
            })
        })

})



// EDIT Route
/*  need to hook this up to the database, with the DB id */
router.get('/:id/edit', (req, res) => {

    //get the student ID from the params
    const studentId = req.params.id

    // I want to render a form contatining the existing student information. That's pretty similar to my show route, the only differece is the HTML, I want it in a form, instead of a div. 

    //find the student from the DB using the ID
    StudentModel.findById(studentId)

    .then((student) => {


    // THEN once the student has been returned from the DB
    //THEN render the form including the current student info
    //Then once the student has been returned from the DB
    //Use HBS to show a from that has been filled in with the info forom the single student we are trying to edit. 

    //BE SURE to use method override to let the form submit 
    //a PUT request instead of the default POST to '/students/THE_STUDENT_ID where THE_STUDENT_ID is the IS of the single student we are trying to update
    //(use student.id)
    res.render('student/edit', {
        student: student
    })
})
.catch((error) => {
    console.log(error)
})

})


//  CREATE Route
//posting
//make post to the form, body-parser gives us back a JS object that looks like a student, like our DB expects

router.post('/', (req, res) =>{

    //Grab the information the user entered in the form byt capturing the request body. 
    //NOTE: We need to have had set up body-parser to give us this request body in a nice JS format. 
    const newStudent = req.body

    //body parser created the newStudent You could pass in the req.body in as the parameter. 
    //Create a new student in the DB using the StudentModel
    StudentModel.create(newStudent)
    .then(() => {
        //THEN once the student has been saved to the DB, redirect to the Students INDEX so that we can view all students including the new one that we've created. 
        res.redirect('/students')
        //what would you type into a browser, go to that URL ^^
    })
    .catch((error) => {
        console.log(error)
    })
})


// UPDATE ROUTE
// PUT ROUTE
//why not patch? Put requests ususally comes from the browser and PATCH comes through API changing something through code and not user interaction

router.put('/:id', (req, res) => {

    //Get the student ID to identify which single student to update
    const studentIdToUpdate = req.params.id

    //Get all information from the form, including any updated information for the single student
    const updatedStudent = req.body

    //Use the StudentModel to find the student in the DB and update any changed information
    //PARAMETERS: 
    //First param = student ID to update
    //Second param = Updated student information as an object, including at updates (req.body)
    //Third param = boiler plate, new: true. Always pass this!!
                                                //this here is the same as {{name: update.name}}
    // StudentModel.findOneAndUpdate({id: studentIdToUpdate}, updatedStudent, {new: true})
    StudentModel.findByIdAndUpdate(studentIdToUpdate, updatedStudent, {new: true})
        .then(() => {
            //Once the single student has been successfully updated from the DB, rediect to the single student's SHOW page
            //redirecting to the show route so the user can see all the information they just editd -- one specific student
            res.redirect(`/students/${studentIdToUpdate}`)
        })
        .catch((error) => {
            console.log(error)
        })

})




//  DELETE ROUTE with a link

// router.get('/:id/delete', (req, res) => {
    
//     //Grab the student ID from the parameters for the single student that we are deleting

//         const studentId = req.params.id
    
//     //Use the StudentModel to find the student document by ID that we want to delete, and then delete it. 
//         StudentModel.findByIdAndRemove(studentId)

//             .then((student) => {

//             // THEN redirect back to the Students INDEX to show all students
//                 res.redirect('/students')
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
    
    
//     })


// Delete Route with a button 

    router.delete('/:id', (req, res) => {

         //Grab the student ID from the parameters for the single student that we are deleting
        
            const studentId = req.params.id
        
    //Use the StudentModel to find the student document by ID that we want to delete, and then delete it. 

            StudentModel.findByIdAndRemove(studentId)
                .then((student) => {

                    // THEN redirect back to the Students INDEX to show all students

                    res.redirect('/students')
                })
                .catch((error) => {
                    console.log(error)
                })
        
        
        })
    



        