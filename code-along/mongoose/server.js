const express = require('express')
const mongoose = require('mongoose')
const hbs = ('require')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express();

mongoose.connect('mongodb://localhost/students');

app.set("view engine", "hbs")
//body parser needs to be below view engine
//Good idea to set up middleware below the views 
app.use(bodyParser.urlencoded({extended: true}))
// before we catch the request at our controller, look in here and if the mehtod for the request has _method on it, then use whatever follows that as my action. _method is totally customizable. Just the signifyer. 
app.use(methodOverride('_method'))


//We could make an index controller, but let's do it the cheap way first

app.get('/', (req, res) => {
    res.redirect('/students')
})


const db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("database has been connected!");
});

const studentsController = require('./controllers/students_controller')
app.use('/students', studentsController)

const projectsController = require('./controllers/projects_controller')
app.use('/student/:studentId/projects', projectsController)

const port = 3000;
app.listen(port, () => {
    console.log(`Express started on ${port}`)
})