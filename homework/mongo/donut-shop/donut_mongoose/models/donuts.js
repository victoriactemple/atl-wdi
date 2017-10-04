//requirements: require mongoose
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//create your donut schema:
const Schema = mongoose.Schema;
const DonutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});
//export your donut with module.exports()

// This is creating a new model. It's connecting this to our db and create a data type called "Donut"
const DonutModel = mongoose.model('Donut', DonutSchema);


module.exports = {
    DonutModel
};