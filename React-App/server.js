const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // Import du module body-parser
const database = require('./devops/src/assets/db/database')
const {add_student} = require("./devops/src/assets/db/database");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});

let redirectUrl = '';
app.post("/login", async (req, res) => {
    const { username, password, bool } = req.body;
    var userType = await database(username,password);
    console.log(userType);
    redirectUrl = userType;

    res.json({ message: "Data received successfully", redirectUrl });
});

app.get("/login_get", async (req, res) => {
    const { username, password, bool } = req.body;
    var userType = await database(username, password);
    console.log(userType);
    res.json({message: redirectUrl});
});

app.post("/password", async (req, res) => {
    const { username, password, bool } = req.body;
    console.log(username)
});

app.post("/add_event", async (req, res) => {
    const {classes,date_start,date_end,time} = req.body;
    console.log(classes);
    console.log(date_start);
    console.log(date_end);
    console.log(time);
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});
