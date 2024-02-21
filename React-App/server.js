const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // Import du module body-parser
const database = require('./devops/src/assets/db/database')
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/login", async (req, res) => {
    const { username, password, bool } = req.body;
    res.json({ message: "Data received successfully", username, password, bool });
    await database(username,password);
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});
