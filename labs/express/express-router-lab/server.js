const express = require("express");
const app = express();
const hbs = require("hbs");
const mathController = require("./controller/math.js");
const greetingController = require("./controller/greeting.js");

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.use("/math", mathController);
app.use("/greeting", greetingController);



const PORT = 3002;
app.listen(PORT, () => {

})