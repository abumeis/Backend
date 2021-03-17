const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { check, validationResult } = require('express-validator');
const bcryptjs = require("bcryptjs")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
const userModel = require("./models/user");
app.use(bodyParser.json())
app.use(cors())
const port = 8000;
mongoose.connect(
    "mongodb://localhost:27017/authentifications",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("database connected");
    }
);

app.listen(port, () => console.log(`Login App listening on port ${port}`));

const loginValidate = [
    // Check Username
    check('email', 'Username Must Be an Email Address').isEmail()
        .trim().escape().normalizeEmail(),
    // Check Password
    check('password').isLength({ min: 8 }).withMessage('Password Must Be at Least 8 Characters').custom((value, { req, loc, path }) => {
        if (value !== req.body.passwordConfirmation) {
            throw new Error("Passwords don't match");
        } else {
            return value;
        }
    }).matches('[0-9]').withMessage('Password Must Contain a Number').matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter').trim().escape()];

app.post("/signup", loginValidate, async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        await userModel.create({
            firstName: req.body.firstName,
            surName: req.body.surName,
            dateOfBirth: (req.body.dateOfBirth),
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password),
            //passwordConfirmation: req.body.passwordConfirmation,
        });
        res.send("well done");
    } catch (error) {
        res.status(500).send("try again")
    }
}
)
