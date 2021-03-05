const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());
app.listen(port, () => console.log(`Example app listening on port ${port}`));

const students = ["Sacha", "Reem", "Yousef"];

app.get("/", (req, res) => {
  res.send("Welcom to our dev class");
});

app.get("/students", (req, res) => {
  res.send(students);
  console.log(students);
});

app.post("/students", (req, res) => {
  students.push(req.body.name);
  res.send("student name added");
  console.log(students);
});
